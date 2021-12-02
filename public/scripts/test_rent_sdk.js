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
    const date = new Date(1638385200000);
    const date2 = new Date(1639508400000);
    const FlatRent = new FlatRentSdk();
    const params = {
      city: 'Санкт-Петербург',
      checkInDate: date,
      checkOutDate: date2,
    };
    console.log(FlatRent.book('vnd331', date, date2));
    console.log(yield FlatRent.get('vnd331'));
    console.log(yield FlatRent.search(params));
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9yZW50X3Nkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0X3JlbnRfc2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxNQUFNLFVBQWdCLGFBQWE7O1FBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sS0FBSyxHQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXBDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDbEMsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJLEVBQUMsaUJBQWlCO1lBQ3RCLFdBQVcsRUFBQyxJQUFJO1lBQ2hCLFlBQVksRUFBQyxLQUFLO1NBQ25CLENBQUE7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRSZW50U2RrfSBmcm9tICcuL2ZsYXQtcmVudC1zZGsuanMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVzdF9yZW50X3NkaygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDE2MzgzODUyMDAwMDApXG4gIGNvbnN0IGRhdGUyPSBuZXcgRGF0ZSgxNjM5NTA4NDAwMDAwKVxuXG4gIGNvbnN0IEZsYXRSZW50ID0gbmV3IEZsYXRSZW50U2RrKClcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGNpdHk6J9Ch0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzJyxcbiAgICBjaGVja0luRGF0ZTpkYXRlLFxuICAgIGNoZWNrT3V0RGF0ZTpkYXRlMixcbiAgfVxuXG4gIGNvbnNvbGUubG9nKEZsYXRSZW50LmJvb2soJ3ZuZDMzMScsZGF0ZSwgZGF0ZTIpKVxuICBjb25zb2xlLmxvZyhhd2FpdCBGbGF0UmVudC5nZXQoJ3ZuZDMzMScpKVxuICBjb25zb2xlLmxvZyhhd2FpdCBGbGF0UmVudC5zZWFyY2gocGFyYW1zKSlcbn1cbiJdfQ==
