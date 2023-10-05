import { defineStore } from 'pinia';
import { Product } from '../types/product';
import { Option, Result } from '../types/v-table';

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    loading: false,
    products: [] as Product[],
  });

  async function getProducts(option: Option) {
    state.loading = true;
    console.log('option', option);
    const { data }: any = await useFetch(
      `https://dummyjson.com/products?limit=${option.itemsPerPage}&skip=${option.page}`,
      {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    state.loading = false;

    const result = {
      datas: data.value?.products ?? [],
      total: data.value?.total ?? 0,
    } as Result<Product>;

    return result;
  }

  return {
    state,
    getProducts,
  };
});
