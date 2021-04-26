<template>
  <div>
    <div
      class="min-h-screen flex justify-center items-center text-center mx-auto bg-green-500"
    >
      <div v-show="!loading">
        <div v-show="(!status || status !== 'ok') && (plans && plans.length > 0)" class="mx-20 flex flex-wrap justify-center">
          <card v-for="plan in plans" :key="plan.id" :plan="plan" :callback="createRecurrence" class="mx-4 my-4 px-8 flex-grow-0 overflow-hidden"/>
        </div>

        <div v-show="!plans || (plans && plans.length === 0)" class="lg:w-500">
          <empty-state />
        </div>

        <div v-show="status && status === 'error'">
          <v-alert type="error">{{ this.error }}</v-alert>
        </div>

        <div v-show="status && status === 'ok'" class="lg:w-500">
          <finish-transaction />
        </div>
      </div>
      <div v-show="loading">
        <loader />
      </div>
    </div>

    <div class="my-8">
    </div>

    <v-footer dark padless fixed class="justify-center">
      <p class="white--text text-center p-1 text-m">
        Dúvidas? financeiro.jf@esf-brasil.org
      </p>
      <p class="white--text text-right text-xs absolute right-0 hidden md:block">
        Desenvolvido por Alexandre Cabral
        <v-btn icon small href="https://github.com/o-mago" target="_blank">
          <v-icon> mdi-github </v-icon>
        </v-btn>
      </p>
    </v-footer>
  </div>
</template>

<script>
import pagarme from "pagarme";
import Card from "@/components/Card.vue";
import FinishTransaction from "@/components/FinishTransaction.vue";
import EmptyState from "@/components/EmptyState.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Card,
    FinishTransaction,
    Loader,
    EmptyState
  },
  data: () => ({
    client: null,
    plans: null,
    paymentData: null,
    loading: true,
    status: null,
    error: null,
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
    this.client = await pagarme.client.connect({
      api_key: process.env.apiKey,
    });
    this.plans = await this.client.plans.all();
    this.plans = this.plans.filter((elem) => elem.name !== "OFF")
    this.plans.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount))
    this.loading = false;
  },
  methods: {
    async createRecurrence(data, planId) {
      try {
        let res = await this.client.subscriptions.create({
          plan_id: planId,
          ...data,
        });
        this.status = "ok";
        if(res?.currentTransaction?.boleto_url) {
          window.open(res.currentTransaction.boleto_url, "_blank")
        }
      } catch (err) {
        this.error = err?.response?.errors[0].message;
        this.status = "error";
      }
    },
  },
};
</script>
