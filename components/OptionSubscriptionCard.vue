<template>
  <div>
    <v-card class="py-5 px-5" elevation="2">
      <v-img
        contain
        aspect-ratio="2"
        :src="require('@/assets/images/logo-esf.png')"
      ></v-img>
      <div>
      <v-btn class="my-10" outlined color="#2aa879" @click="$router.push('/mensal')">
        Doação <span class="font-sans text-green-600">MENSAL</span>
      </v-btn>
    </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>