<script setup lang="ts">
const layoutStore = useLayoutStore();
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-nav-icon variant="text" @click="layoutStore.toggleDrawer"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ layoutStore.title }} </v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
