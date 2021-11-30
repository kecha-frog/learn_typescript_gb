//Ошибка разрешения спецификатора модуля «axios». Связанные спецификаторы модуля должны начинаться с «./», «../» или «/».
//import axios from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator['throw'](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
export const getTodosByCount = (count) => __awaiter(void 0, void 0, void 0, function* () {
  // Не смог подключить как не пытался, только через скрипт ссылкой работает
  // console.log(await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`, {})
  //   .then(r => r.data)
  //   .catch(e => e.message))
  const response = yield fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch();
  if (response) {
    console.log(response);
  }
  else {
    console.log('Fetch Error');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3NDb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXIvdG9kb3NDb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5SEFBeUg7QUFDekgsNEJBQTRCOzs7Ozs7Ozs7O0FBUTVCLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFPLEtBQWEsRUFBaUIsRUFBRTtJQUNwRSwwRUFBMEU7SUFDMUUsZ0dBQWdHO0lBQ2hHLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFFNUIsTUFBTSxRQUFRLEdBQW1CLE1BQU0sS0FBSyxDQUFDLHFEQUFxRCxLQUFLLEVBQUUsQ0FBQztTQUN2RyxJQUFJLENBQUMsQ0FBQyxRQUFpQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUMsSUFBSSxDQUFDLENBQUMsSUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDN0IsS0FBSyxFQUFFLENBQUE7SUFFVixJQUFJLFFBQVEsRUFBQztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7S0FDdEI7U0FBSztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDM0I7QUFDSCxDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8v0J7RiNC40LHQutCwINGA0LDQt9GA0LXRiNC10L3QuNGPINGB0L/QtdGG0LjRhNC40LrQsNGC0L7RgNCwINC80L7QtNGD0LvRjyDCq2F4aW9zwrsuINCh0LLRj9C30LDQvdC90YvQtSDRgdC/0LXRhtC40YTQuNC60LDRgtC+0YDRiyDQvNC+0LTRg9C70Y8g0LTQvtC70LbQvdGLINC90LDRh9C40L3QsNGC0YzRgdGPINGBIMKrLi/CuywgwqsuLi/CuyDQuNC70LggwqsvwrsuXG4vL2ltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBJVG9kb3N7XG4gICd1c2VySWQnOiBudW1iZXIsXG4gICdpZCc6IG51bWJlcixcbiAgJ3RpdGxlJzogc3RyaW5nLFxuICAnY29tcGxldGVkJzogYm9vbGVhblxufVxuZXhwb3J0IGNvbnN0IGdldFRvZG9zQnlDb3VudCA9IGFzeW5jIChjb3VudDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIC8vINCd0LUg0YHQvNC+0LMg0L/QvtC00LrQu9GO0YfQuNGC0Ywg0LrQsNC6INC90LUg0L/Ri9GC0LDQu9GB0Y8sINGC0L7Qu9GM0LrQviDRh9C10YDQtdC3INGB0LrRgNC40L/RgiDRgdGB0YvQu9C60L7QuSDRgNCw0LHQvtGC0LDQtdGCXG4gIC8vIGNvbnNvbGUubG9nKGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zP19saW1pdD0ke2NvdW50fWAsIHt9KVxuICAvLyAgIC50aGVuKHIgPT4gci5kYXRhKVxuICAvLyAgIC5jYXRjaChlID0+IGUubWVzc2FnZSkpXG5cbiAgY29uc3QgcmVzcG9uc2U6SVRvZG9zW10gfCB2b2lkID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcz9fbGltaXQ9JHtjb3VudH1gKVxuICAgIC50aGVuKChyZXNwb25zZTpSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhOklUb2Rvc1tdKSA9PiBkYXRhKVxuICAgIC5jYXRjaCgpXG5cbiAgaWYgKHJlc3BvbnNlKXtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgfWVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaCBFcnJvcicpXG4gIH1cbn1cblxuIl19
