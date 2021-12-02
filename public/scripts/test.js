var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator['throw'](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import { FlatRentSdk } from './flat-rent-sdk.js';
export function test() {
  return __awaiter(this, void 0, void 0, function* () {
    const test = new FlatRentSdk();
    const date = new Date();
    date.setDate(10);
    const date2 = new Date(date);
    date2.setDate(15);
    const params = {
      city: 'Санкт-Петербург',
      checkInDate: date,
      checkOutDate: date2,
    };
    console.log(test.book('vnd331', date, date2));
    console.log(yield test.get('vnd331'));
    console.log(yield test.search(params));
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxNQUFNLFVBQWdCLElBQUk7O1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDOUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2hCLE1BQU0sS0FBSyxHQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakIsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJLEVBQUMsaUJBQWlCO1lBQ3RCLFdBQVcsRUFBQyxJQUFJO1lBQ2hCLFlBQVksRUFBQyxLQUFLO1NBQ25CLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUV4QyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRSZW50U2RrfSBmcm9tICcuL2ZsYXQtcmVudC1zZGsuanMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcbiAgY29uc3QgdGVzdCA9IG5ldyBGbGF0UmVudFNkaygpXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gIGRhdGUuc2V0RGF0ZSgxMClcbiAgY29uc3QgZGF0ZTI9IG5ldyBEYXRlKGRhdGUpXG4gIGRhdGUyLnNldERhdGUoMTUpXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBjaXR5OifQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsycsXG4gICAgY2hlY2tJbkRhdGU6ZGF0ZSxcbiAgICBjaGVja091dERhdGU6ZGF0ZTIsXG4gIH1cbiAgY29uc29sZS5sb2codGVzdC5ib29rKCd2bmQzMzEnLGRhdGUsIGRhdGUyKSlcbiAgY29uc29sZS5sb2coYXdhaXQgdGVzdC5nZXQoJ3ZuZDMzMScpKVxuICBjb25zb2xlLmxvZyhhd2FpdCB0ZXN0LnNlYXJjaChwYXJhbXMpKVxuXG59XG4iXX0=
