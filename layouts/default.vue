<template>
  <div
    class="min-h-screen min-w-full flex justify-center items-center text-center mx-auto bg-green-500"
  >
    <Nuxt />
    <div class="my-8"></div>

    <v-footer
      dark
      padless
      fixed
      max-width="100vw"
      class="justify-center overflow-hidden"
    >
      <p class="white--text text-center py-1 text-m">
        Dúvidas? financeiro.jf@esf-brasil.org
      </p>
      <p
        class="white--text text-right text-xs absolute right-0 hidden md:block"
      >
        Desenvolvido por Alexandre Cabral
        <v-btn icon small href="https://github.com/o-mago" target="_blank">
          <v-icon> mdi-github </v-icon>
        </v-btn>
      </p>
    </v-footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
