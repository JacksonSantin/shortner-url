<template>
  <v-card class="mx-auto" width="850">
    <v-card-title class="text-center pa-0">
      <v-toolbar flat dark color="primary">
        <v-toolbar-title>Here is your new URL</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text class="px-5 py-5">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            id="urlToCopy"
            label="Shortned URL"
            variant="underlined"
            :append-inner-icon="
              controller.copy.value ? 'mdi-content-copy' : 'mdi-check'
            "
            @click:append-inner="controller.copyUrl()"
            v-model="controller.urlGenerated.value"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            label="Full URL"
            variant="underlined"
            disabled
            v-model="controller.fullUrl.value"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        class="text-none text-subtitle-1 text-white"
        color="#2466E0"
        size="large"
        variant="flat"
        block
        @click="controller.returnToFormScreen()"
      >
        Return
      </v-btn>
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
