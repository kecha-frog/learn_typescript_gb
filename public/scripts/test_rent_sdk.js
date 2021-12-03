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
export function test_rent_sdk() {
  return __awaiter(this, void 0, void 0, function* () {
    const flatRent = new FlatRentSdk();
    console.log(yield flatRent.get('vnd331'));
    const params = {
      city: 'Санкт-Петербург',
      checkInDate: new Date(1654385200000),
      checkOutDate: new Date(1668508400000),
    };
    console.log(yield flatRent.search(params));
    const date1 = new Date();
    date1.setDate(20);
    const date2 = new Date();
    date2.setDate(25);
    console.log(yield flatRent.book('vnd331', date1, date2));
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9yZW50X3Nkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0X3JlbnRfc2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxNQUFNLFVBQWdCLGFBQWE7O1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUV6QyxNQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBQyxpQkFBaUI7WUFDdEIsV0FBVyxFQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNuQyxZQUFZLEVBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3JDLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRTFDLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqQixNQUFNLEtBQUssR0FBRSxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ3ZCLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmxhdFJlbnRTZGt9IGZyb20gJy4vZmxhdC1yZW50LXNkay5qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0X3JlbnRfc2RrKCkge1xuICBjb25zdCBmbGF0UmVudCA9IG5ldyBGbGF0UmVudFNkaygpXG5cbiAgY29uc29sZS5sb2coYXdhaXQgZmxhdFJlbnQuZ2V0KCd2bmQzMzEnKSlcblxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgY2l0eTon0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMnLFxuICAgIGNoZWNrSW5EYXRlOm5ldyBEYXRlKDE2NTQzODUyMDAwMDApLFxuICAgIGNoZWNrT3V0RGF0ZTpuZXcgRGF0ZSgxNjY4NTA4NDAwMDAwKSxcbiAgfVxuICBjb25zb2xlLmxvZyhhd2FpdCBmbGF0UmVudC5zZWFyY2gocGFyYW1zKSlcblxuICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgZGF0ZTEuc2V0RGF0ZSgyMClcbiAgY29uc3QgZGF0ZTI9IG5ldyBEYXRlKClcbiAgZGF0ZTIuc2V0RGF0ZSgyNSlcbiAgY29uc29sZS5sb2coYXdhaXQgZmxhdFJlbnQuYm9vaygndm5kMzMxJyxkYXRlMSwgZGF0ZTIpKVxufVxuIl19
