<template>
  <v-app>
    <LayoutHeader />
    <LayoutNavigation />
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>
