<script lang="ts" setup>
import { Product } from '~/types/product';
import { Header, Option } from '../types/v-table';
const productStore = useProductStore();
const search = ref<string | undefined>();

const serverItems = ref<Product[]>([]);
const total = ref(0);
const perPage = ref(5);

const headers = ref<Header[]>([
  { title: 'ID', key: 'id', align: 'center' },
  { title: 'Title', key: 'title' },
  { title: 'PRICE', key: 'price', align: 'end' },
  { title: 'RATING', key: 'rating', align: 'end' },
  { title: 'STOCK', key: 'stock', align: 'end' },
  { title: 'BRAND', key: 'brand', align: 'end' },
]);

async function loadItems(option: Option) {
  console.log(option);
  const result = await productStore.getProducts(option);

  serverItems.value = result.datas;
  total.value = result.total;
}
</script>

<template>
  <div>
    <v-data-table-server
      v-model:items-per-page="perPage"
      :headers="headers"
      :items-length="total"
      :items="serverItems"
      :loading="productStore.state.loading"
      class="elevation-1"
      item-value="name"
      @update:options="loadItems">
    </v-data-table-server>
  </div>
</template>
