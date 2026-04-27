<template>
  <v-card class="mx-auto elevation-2" width="850">
    <v-card-title class="text-center pa-0">
      <v-toolbar flat dark color="primary">
        <v-toolbar-title>URL Shortner</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text class="px-5 py-5">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            label="URL"
            type="url"
            placeholder="Type url here..."
            variant="underlined"
            color="primary"
            v-model="controller.linkToShrt.value"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        class="text-none text-subtitle-1"
        color="primary"
        size="large"
        variant="flat"
        block
        :loading="controller.loading.value"
        @click="controller.shrtLink()"
        >🚀 Submit</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>
