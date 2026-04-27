<template>
  <v-container class="d-flex align-center justify-center fill-height" fluid>
    <home v-if="controller.formScreen.value" :controller="controller" />
    <success-page
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { shortnerControllerImpl } from "../di/di";
import Home from "../components/home.vue";
import SuccessPage from "../components/successPage.vue";
const controller = shortnerControllerImpl();
</script>

<style></style>
