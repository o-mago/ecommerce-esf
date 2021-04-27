<template>
  <v-card class="py-5 px-5" elevation="2">
    <v-img
      contain
      aspect-ratio="2"
      :src="require('@/assets/images/logo-esf.png')"
    ></v-img>
    <div class="my-10">
      <h1 class="font-sans">Doação mensal no valor de</h1>
      <h1 class="font-sans text-green-600">{{ getFormatedPrice() }}</h1>
    </div>
    <div>
      <v-btn class="my-2" outlined color="#2aa879" @click="callCheckout()">
        Preencher dados
      </v-btn>
    </div>
    <div class="mt-2 text-xs">
      <p>Formas de pagamento:</p>
      <v-row justify="center">
        <v-img
          class="mt-6 mx-2"
          v-if="plan.payment_methods.includes('credit_card')"
          contain
          max-width="40"
          :src="require('@/assets/images/credit-card.svg')"
        ></v-img>
        <v-img
          class="mt-6 mx-2"
          v-if="plan.payment_methods.includes('boleto')"
          contain
          max-width="40"
          :src="require('@/assets/images/boleto.svg')"
        ></v-img>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import pagarme from "pagarme";

export default {
  data: () => ({
    paymentData: null,
  }),
  props: {
    plan: {
      type: Object,
      default: () => {},
    },
    callback: {
      type: Function,
      default: () => () => {},
    },
  },
  methods: {
    getFormatedPrice() {
      if (this.plan) {
        let stringAmount = "" + this.plan.amount;
        let unity = stringAmount.slice(-stringAmount.length - 1, -2)
        unity = unity ? unity : 0
        let decimal = stringAmount.substring(stringAmount.length - 2)
        let floatPrice = parseFloat(unity + "." + decimal)
        let formatter = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        let formatedPrice = formatter.format(floatPrice);
        return formatedPrice;
      }
      return "";
    },
    getPaymentIcon(method) {
      const paymentMap = {
        credit_card: "../assets/images/credit-card.svg",
        boleto: "../assets/images/boleto.svg",
      };
      return paymentMap[method];
    },
    callCheckout() {
      let self = this;
      let checkout = new PagarMeCheckout.Checkout({
        encryption_key: process.env.encryptionKey,
        success: function (data) {
          self.callback(data, self.plan.id, null);
        },
        error: function (err) {
          self.callback(null, null, err);
        },
        close: function () {},
      });

      let methods = this.plan.payment_methods.reduce((acc, elem) => {
        if (acc !== "") elem = "," + elem;
        acc += elem;
        return acc;
      }, "");

      checkout.open({
        amount: this.plan.amount,
        customerData: "true",
        paymentMethods: methods,
        paymentButtonText: "Doar",
        createToken: "false",
        uiColor: "#2aa879",
        headerText: "Valor da doação: {price_info}",
        items: [
          {
            id: ""+this.plan.id,
            title: "Doação",
            unit_price: this.plan.amount,
            quantity: 1,
            tangible: "false",
          },
        ],
      });
    },
  },
};
</script>
