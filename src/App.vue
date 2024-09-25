<template>
  <v-app>
    <v-main>
      <shortner-url />
    </v-main>
  </v-app>
</template>

<script setup>
import ShortnerUrl from "./module/view/shortner.vue";
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
