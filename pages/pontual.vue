<template>
  <div>
    <div v-show="!loading" class="max-w-full">
      <div v-show="!status || status !== 'ok'" class="lg:w-500">
        <single-transaction-card
          :callback="endTransaction"
          class="mx-4 my-4 px-8 flex-grow-0 overflow-hidden"
        />
      </div>

      <div v-show="status && status === 'error'">
        <v-alert type="error">{{ this.error }}</v-alert>
      </div>

      <div v-show="status && status === 'ok'" class="lg:w-500">
        <finish-transaction :boleto_url="boleto_url" />
      </div>
    </div>
    <div v-show="loading">
      <loader />
    </div>
  </div>
</template>

<script>
import pagarme from "pagarme";
import SingleTransactionCard from "@/components/SingleTransactionCard.vue";
import FinishTransaction from "@/components/FinishTransaction.vue";
import EmptyState from "@/components/EmptyState.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    SingleTransactionCard,
    FinishTransaction,
    Loader,
    EmptyState,
  },
  data: () => ({
    client: null,
    plans: null,
    paymentData: null,
    loading: true,
    status: null,
    error: null,
    boleto_url: ""
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
    this.loading = false;
  },
  methods: {
    async endTransaction(data, amount, error) {
      let expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 5);
      let dd = expirationDate.getDate();
      let mm = expirationDate.getMonth() + 1;
      let yyyy = expirationDate.getFullYear();
      let expirationFormattedDate = dd + "/" + mm + "/" + yyyy;

      data.customer["external_id"] = ""+this.generateHash()
      data.customer["country"] = "br"
      let documentType = null
      if (data.customer.document_number.length === 11) {
        documentType = "cpf"
        data.customer["type"] = "individual"
      } else {
        documentType = "cnpj"
        data.customer["type"] = "corporation"
      }
      data.customer["documents"] = [{
        "type": documentType,
        "number": data.customer.document_number
      }]
      data.customer["phone_numbers"] = ["+55"+data.customer.phone.ddd+data.customer.phone.number]
      data["billing"] = {}
      data.billing["address"] = data.customer.address
      data.billing["name"] = data.customer.name
      data.billing.address["country"] = "br"
      data.boleto_expiration_date = expirationDate
      delete data.customer.address
      delete data.customer.document_number
      delete data.customer.phone
      if(data.billing.address.complementary === "") {
        delete data.billing.address.complementary
      }
      data["items"] = [{
        id: "1",
        title: "Doação Pontual",
        unit_price: amount,
        quantity: 1,
        tangible: "false",
      }]
      if (error) {
        this.error = error?.response?.errors[0].message;
        this.status = "error";
        return
      }
      try {
        let res = await this.client.transactions.create({
          ...data,
        });
        if(res.status === "refused") {
          this.error = "Problema na transação: "+res.refuse_reason;
          this.status = "error";
        } else {
          this.status = "ok";
          if (res?.boleto_url) {
            this.boleto_url = res.boleto_url
            window.open(res.boleto_url, "_blank");
          }
        }
      } catch (err) {
        this.error = err?.response?.errors[0].message;
        this.status = "error";
      }
    },
    generateHash() {
      let hash = 0, i, chr;
      if (this.length === 0) return hash;
      for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
      }
      return hash;
    }
  },
};
</script>
