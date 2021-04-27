<template>
  <div>
    <div class="max-w-full sm:mx-5 md:mx-10 flex flex-wrap justify-center">
      <div class="lg:w-500">
        <option-subscription-card
          class="mx-4 my-4 px-8 flex-grow-0 overflow-hidden"
        />
      </div>
      <div class="lg:w-500">
        <option-single-card
          class="mx-4 my-4 px-8 flex-grow-0 overflow-hidden"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pagarme from "pagarme";
import SubscriptionCard from "@/components/SubscriptionCard.vue";
import FinishTransaction from "@/components/FinishTransaction.vue";
import EmptyState from "@/components/EmptyState.vue";
import Loader from "@/components/Loader.vue";
import OptionSubscriptionCard from "../components/OptionSubscriptionCard.vue";
import OptionSingleCard from "../components/OptionSingleCard.vue";

export default {
  components: {
    OptionSubscriptionCard,
    OptionSingleCard,
  },
};
</script>
