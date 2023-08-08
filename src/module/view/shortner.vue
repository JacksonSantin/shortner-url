<template>
  <home :controller="controller" />
</template>

<script setup>
import { shortnerControllerImpl } from "../di/di";
import Home from "../components/home.vue";
const controller = shortnerControllerImpl();
</script>

<style>
</style>