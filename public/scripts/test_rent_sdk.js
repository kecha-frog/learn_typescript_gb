var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FlatRentSdk } from './flat-rent-sdk.js';
export function test_rent_sdk() {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date(1638385200000);
        const date2 = new Date(1639508400000);
        const flatRent = new FlatRentSdk();
        const params = {
            city: 'Санкт-Петербург',
            checkInDate: date,
            checkOutDate: date2,
        };
        console.log(yield flatRent.get('vnd331'));
        console.log(yield flatRent.search(params));
        console.log(yield flatRent.book('vnd331', date, date2));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9yZW50X3Nkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0X3JlbnRfc2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxNQUFNLFVBQWdCLGFBQWE7O1FBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sS0FBSyxHQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXBDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDbEMsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJLEVBQUMsaUJBQWlCO1lBQ3RCLFdBQVcsRUFBQyxJQUFJO1lBQ2hCLFlBQVksRUFBQyxLQUFLO1NBQ25CLENBQUE7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmxhdFJlbnRTZGt9IGZyb20gJy4vZmxhdC1yZW50LXNkay5qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0ZXN0X3JlbnRfc2RrKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTYzODM4NTIwMDAwMClcbiAgY29uc3QgZGF0ZTI9IG5ldyBEYXRlKDE2Mzk1MDg0MDAwMDApXG5cbiAgY29uc3QgZmxhdFJlbnQgPSBuZXcgRmxhdFJlbnRTZGsoKVxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgY2l0eTon0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMnLFxuICAgIGNoZWNrSW5EYXRlOmRhdGUsXG4gICAgY2hlY2tPdXREYXRlOmRhdGUyLFxuICB9XG5cbiAgY29uc29sZS5sb2coYXdhaXQgZmxhdFJlbnQuZ2V0KCd2bmQzMzEnKSlcbiAgY29uc29sZS5sb2coYXdhaXQgZmxhdFJlbnQuc2VhcmNoKHBhcmFtcykpXG4gIGNvbnNvbGUubG9nKGF3YWl0IGZsYXRSZW50LmJvb2soJ3ZuZDMzMScsZGF0ZSwgZGF0ZTIpKVxufVxuIl19