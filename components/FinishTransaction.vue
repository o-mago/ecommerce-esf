<template>
  <div>
    <v-card class="py-5 px-5" elevation="2">
      <v-img
        contain
        aspect-ratio="2"
        :src="require('@/assets/images/logo-esf.png')"
      ></v-img>
      <div class="my-10">
        <h1 class="font-sans">Doação cadastrada com sucesso</h1>
        <h1 v-if="boleto_url !==''" class="font-sans inline-block">
          Link para o boleto:  
          <v-btn icon :href="boleto_url" target="_blank">
            <v-img
              contain
              max-width="40"
              :src="require('@/assets/images/boleto.svg')"
            ></v-img>
          </v-btn>
        </h1>
        <h1 class="font-sans">Em caso de dúvidas contate:</h1>
        <h1 class="font-sans text-green-600">financeiro.jf@esf-brasil.org</h1>
      </div>
    </v-card>
    <v-alert v-if="boleto_url ===''" type="success">Doação confirmada</v-alert>
    <v-alert v-if="boleto_url !==''" type="success">A doação será confirmada após o pagamento</v-alert>
  </div>
</template>

<script>
export default {
  props: {
    boleto_url: {
      type: String,
      default: "",
    }
  },
};
</script>
