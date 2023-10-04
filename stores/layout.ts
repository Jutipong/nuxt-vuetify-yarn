import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', () => {
  const isRail = ref(true);
  const title = ref('Nuxi');

  function toggleDrawer() {
    isRail.value = !isRail.value;
  }

  return {
    isRail,
    title,
    toggleDrawer,
  };
});
