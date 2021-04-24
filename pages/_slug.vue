<template>
  <div>
  <div class="min-h-screen flex justify-center items-center text-center mx-auto bg-green-500">
    <div v-if="!loading">

      <div v-if="!status || status !== 'ok'">
        <v-card class="py-5 px-5" min-width="500" elevation="2">
          <v-img
            contain
            aspect-ratio="2"
            :src="require('@/assets/images/logo-esf.png')"
          ></v-img>
          <div v-if="planId">
            <div class="my-10">
              <h1 class="font-sans">Doação mensal no valor de</h1>
              <h1 class="font-sans text-green-600"> R$ {{getFormatedPrice()}} </h1>
            </div>
            <div>
              <v-btn
                class="ma-2"
                outlined
                color="#2aa879"
                @click="callCheckout()"
              >
                Preencher dados
              </v-btn>
            </div>
          </div>
          <div v-if="!planId">
            <div class="my-10">
              <h1 class="font-sans">Doação não encontrada</h1>
            </div>
          </div>
        </v-card>
        <v-alert type="error" v-if="status && status === 'error'">{{this.error}}</v-alert>
      </div>

      <div v-if="status && status === 'ok'">
        <v-card class="py-5 px-5 sm" elevation="2">
          <v-img
            contain
            aspect-ratio="2"
            :src="require('@/assets/images/logo-esf.png')"
          ></v-img>
          <div class="my-10">
            <h1 class="font-sans">Doação cadastrada com sucesso</h1>
            <h1 class="font-sans">Em caso de dúvidas contate:</h1>
            <h1 class="font-sans text-green-600"> comunicacao.jf@esf-brasil.org  </h1>
          </div>
        </v-card>
        <v-alert
          type="success"
        >Doação confirmada</v-alert>
      </div>

    </div>
    <div v-if="loading">
      <v-progress-circular
      :size="80"
      color="#FFFFFF"
      indeterminate>
      </v-progress-circular>
    </div>

    </div>

    <v-footer
      dark
      padless
      fixed
    >
      <v-card
        class="flex"
        flat
        tile
      >
      <p class="white--text text-center p-0.5 text-sm">
        {{ new Date().getFullYear() }} — Alexandre Cabral 
        <v-btn icon href="https://github.com/o-mago" target="_blank">
          <v-icon>
            mdi-github
          </v-icon> 
        </v-btn>
      </p>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
import pagarme from "pagarme";

export default {
  data: () => ({
    client: null,
    plan: null,
    paymentData: null,
    loading: true,
    planId: undefined,
    status: null,
    error: null
  }),
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://assets.pagar.me/checkout/1.1.0/checkout.js"
    );
    document.head.appendChild(externalScript);
  },
  async created() {
    this.planId = parseInt(this.$route.params.slug)
    if(this.planId) {
      this.client = await pagarme.client.connect({
        api_key: process.env.apiKey,
      });
      this.plan = await this.client.plans.find({
        id: this.planId
      })
    }
    this.loading = false
  },
  methods: {
    getFormatedPrice() {
      let stringAmount = ""+this.plan.amount
      let formatedPrice = stringAmount.slice(-stringAmount.length-1,-2)+","+stringAmount.substring(stringAmount.length - 2)
      return formatedPrice
    },
    callCheckout() {
      let self = this
      let checkout = new PagarMeCheckout.Checkout({
        encryption_key: process.env.encryptionKey,
        success: function (data) {
          self.createRecurrence(data);
        },
        error: function (err) {
          console.log(err);
        },
        close: function () {
          console.log("The modal has been closed.");
        },
      });

      checkout.open({
        amount: this.plan.amount,
        customerData: "true",
        paymentMethods: "credit_card",
        paymentButtonText: 'Doar',
        createToken: "false",
        uiColor: '#2aa879',
        headerText: "Valor da doação mensal",
        items: [
          {
            id: "1",
            title: "Doação",
            unit_price: this.plan.amount,
            quantity: 1,
            tangible: "false",
          },
        ],
      });
    },
    async createRecurrence(data) {
      try {
        let res = await this.client.subscriptions.create({
          plan_id: this.plan.id,
          ...data
        });
        console.log(res)
        this.status = "ok"
      } catch(err) {
        console.log(err?.response?.errors[0].message)
        this.error = err?.response?.errors[0].message
        this.status = "error"
      }
    },
  },
};
</script>
