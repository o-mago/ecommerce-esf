<template>
  <v-card class="py-5 px-5" min-width="300" elevation="2">
    <v-img
      contain
      aspect-ratio="2"
      :src="require('@/assets/images/logo-esf.png')"
    ></v-img>
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
    <div class="mt-2 text-xs">
      <p>Formas de pagamento:</p>
      <v-icon v-for="method in plan.payment_methods" :key="method" color="green"> {{ getPaymentIcon(method) }} </v-icon>
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
      default: () => {}
    },
    callback: {
      type: Function,
      default: () => () => {}
    }
  },
  methods: {
    getFormatedPrice() {
      if(this.plan) {
        let stringAmount = ""+this.plan.amount
        let formatedPrice = stringAmount.slice(-stringAmount.length-1,-2)+","+stringAmount.substring(stringAmount.length - 2)
        return formatedPrice
      }
      return ""
    },
    getPaymentIcon(method) {
      const paymentMap = {
        credit_card: "mdi-credit-card-outline",
        boleto: "mdi-receipt"
      }
      return paymentMap[method]
    },
    callCheckout() {
      let self = this
      let checkout = new PagarMeCheckout.Checkout({
        encryption_key: process.env.encryptionKey,
        success: function (data) {
          self.callback(data, self.plan.id);
        },
        error: function (err) {
          console.log(err);
        },
        close: function () {
        },
      });

      let expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 2); 

      let dd = expirationDate.getDate();
      let mm = expirationDate.getMonth() + 1;
      let yyyy = expirationDate.getFullYear();

      let expirationFormattedDate = dd + '/'+ mm + '/'+ yyyy;

      let methods = this.plan.payment_methods.reduce((acc, elem) => {
        if (acc !== "") elem = ","+elem
        acc+=elem
        return acc
      }, "")

      checkout.open({
        amount: this.plan.amount,
        customerData: "true",
        paymentMethods: methods,
        paymentButtonText: 'Doar',
        createToken: "false",
        boletoExpirationDate: expirationFormattedDate,
        pixExpirationDate: expirationFormattedDate,
        uiColor: '#2aa879',
        headerText: "Valor da doação: {price_info}",
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
    }
  }
};
</script>
