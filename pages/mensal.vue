<template>
  <div>
    <div v-show="!loading" class="max-w-full">
      <div
        v-show="(!status || status !== 'ok') && plans && plans.length > 0"
        class="sm:mx-5 md:mx-10 flex flex-wrap justify-center"
      >
        <subscription-card
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
          :callback="createRecurrence"
          class="mx-4 my-4 px-8 flex-grow-0 overflow-hidden"
        />
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
</template>

<script>
import pagarme from "pagarme";
import SubscriptionCard from "@/components/SubscriptionCard.vue";
import FinishTransaction from "@/components/FinishTransaction.vue";
import EmptyState from "@/components/EmptyState.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    SubscriptionCard,
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
    this.plans = this.plans.filter((elem) => elem.name !== "OFF");
    this.plans.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
    this.loading = false;
  },
  methods: {
    async createRecurrence(data, planId, error) {
      if (error) {
        this.error = error?.response?.errors[0].message;
        this.status = "error";
        return
      }
      try {
        let res = await this.client.subscriptions.create({
          plan_id: planId,
          ...data,
        });
        this.status = "ok";
        if (res?.currentTransaction?.boleto_url) {
          window.open(res.currentTransaction.boleto_url, "_blank");
        }
      } catch (err) {
        this.error = err?.response?.errors[0].message;
        this.status = "error";
      }
    },
  },
};
</script>
