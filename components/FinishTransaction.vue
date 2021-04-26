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
        <h1 class="font-sans">Em caso de dúvidas contate:</h1>
        <h1 class="font-sans text-green-600">financeiro.jf@esf-brasil.org</h1>
      </div>
    </v-card>
    <v-alert type="success">Doação confirmada</v-alert>
  </div>
</template>

<script>
export default {};
</script>
