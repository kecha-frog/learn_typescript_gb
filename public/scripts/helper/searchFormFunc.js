var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator['throw'](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import { FlatRentSdk } from '../flat-rent-sdk.js';
export const searchFormFunc = (formData) => __awaiter(void 0, void 0, void 0, function* () {
  if (formData.checkin && formData.checkout) {
    const flatRent = new FlatRentSdk();
    const params = {
      city: 'Санкт-Петербург',
      checkInDate: new Date(formData.checkin),
      checkOutDate: new Date(formData.checkout),
    };
    console.log(yield flatRent.search(params));
    //Тест
    const date1 = new Date();
    date1.setDate(20);
    const date2 = new Date();
    date2.setDate(25);
    console.log(yield flatRent.get('vnd331'));
    console.log(yield flatRent.book('vnd331', date1, date2));
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoRm9ybUZ1bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVyL3NlYXJjaEZvcm1GdW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQVFoRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBTyxRQUF5QixFQUFpQixFQUFFO0lBRS9FLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDbEMsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1NBQzFDLENBQUE7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRTFDLE1BQU07UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBRXpEO0FBR0gsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRSZW50U2RrfSBmcm9tICcuLi9mbGF0LXJlbnQtc2RrLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoRm9ybURhdGEge1xuICBjaGVja2luPzogc3RyaW5nO1xuICBjaGVja291dD86IHN0cmluZztcbiAgcHJpY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hGb3JtRnVuYyA9IGFzeW5jIChmb3JtRGF0YTogSVNlYXJjaEZvcm1EYXRhKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cbiAgaWYgKGZvcm1EYXRhLmNoZWNraW4gJiYgZm9ybURhdGEuY2hlY2tvdXQpIHtcbiAgICBjb25zdCBmbGF0UmVudCA9IG5ldyBGbGF0UmVudFNkaygpXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2l0eTogJ9Ch0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzJyxcbiAgICAgIGNoZWNrSW5EYXRlOiBuZXcgRGF0ZShmb3JtRGF0YS5jaGVja2luKSxcbiAgICAgIGNoZWNrT3V0RGF0ZTogbmV3IERhdGUoZm9ybURhdGEuY2hlY2tvdXQpLFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGF3YWl0IGZsYXRSZW50LnNlYXJjaChwYXJhbXMpKVxuXG4gICAgLy/QotC10YHRglxuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgIGRhdGUxLnNldERhdGUoMjApXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZSgpXG4gICAgZGF0ZTIuc2V0RGF0ZSgyNSlcbiAgICBjb25zb2xlLmxvZyhhd2FpdCBmbGF0UmVudC5nZXQoJ3ZuZDMzMScpKVxuICAgIGNvbnNvbGUubG9nKGF3YWl0IGZsYXRSZW50LmJvb2soJ3ZuZDMzMScsIGRhdGUxLCBkYXRlMikpXG5cbiAgfVxuXG5cbn1cbiJdfQ==
