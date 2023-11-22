import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
export const useExchangeStore = defineStore("exchange", () => {
  const router = useRouter();
  const exchange_data = ref({});
  const exchange_datetime = ref("");
  const API_URL = "127.0.0.1:8000";

  const getExChange = function () {
    axios({
      method: "get",
      url: `${API_URL}/articles/exchange/`,
    })
      .then((res) => {
        exchange_data.value = res.data.data;
        exchange_datetime.value = res.data.datetime;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
});
