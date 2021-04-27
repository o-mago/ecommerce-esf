<template>
  <v-card class="py-5 px-5" elevation="2">
    <v-img
      contain
      aspect-ratio="2"
      :src="require('@/assets/images/logo-esf.png')"
    ></v-img>
    <div class="my-5 inline-block w-6/12">
      <h1 class="font-sans mb-5">Valor da doação</h1>
      <v-text-field
        class="text-white centered-input text-xl"
        v-model.lazy="price" 
        v-money="money"
        background-color="#424242"
        solo
        dark
        text-center
      >{{price}}</v-text-field>
    </div>
    <div>
      <v-btn class="ma-2" outlined color="#2aa879" @click="callCheckout()">
        Preencher dados
      </v-btn>
    </div>
    <div class="mt-2 text-xs">
      <p>Formas de pagamento:</p>
      <v-row justify="center">
        <v-img
          class="mt-6 mx-2"
          contain
          max-width="40"
          :src="require('@/assets/images/credit-card.svg')"
        ></v-img>
        <v-img
          class="mt-6 mx-2"
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
import { VMoney } from 'v-money'

export default {
  data: () => ({
    paymentData: null,
    price: 0,
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: '',
      precision: 2,
      masked: false
    }
  }),
  props: {
    callback: {
      type: Function,
      default: () => () => {},
    },
  },
  computed: {
    rawPrice () {
      return parseInt(this.price.substring(2).replace(',',''))
    },
  },
  methods: {
    getPaymentIcon(method) {
      const paymentMap = {
        credit_card: "../assets/images/credit-card.svg",
        boleto: "../assets/images/boleto.svg",
      };
      return paymentMap[method];
    },
    callCheckout() {
      if(this.rawPrice <= 0) {
        return
      }
      let self = this;
      let checkout = new PagarMeCheckout.Checkout({
        api_key: process.env.apiKey,
        encryption_key: process.env.encryptionKey,
        success: function (data) {
          self.callback(data, self.rawPrice, null);
        },
        error: function (err) {
          self.callback(null, self.rawPrice, err);
        },
        close: function () {},
      });

      checkout.open({
        amount: this.rawPrice,
        customerData: "true",
        paymentMethods: "credit_card,boleto",
        paymentButtonText: "Doar",
        createToken: "false",
        uiColor: "#2aa879",
        headerText: "Valor da doação: {price_info}",
        items: [
          {
            id: "1",
            title: "Doação Pontual",
            unit_price: this.rawPrice,
            quantity: 1,
            tangible: "false",
          },
        ],
      });
    },
  },
  directives: {money: VMoney}
};
</script>

<style>
.centered-input input {
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
</style>