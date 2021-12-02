import {FlatRentSdk} from './flat-rent-sdk.js';

export async function test_rent_sdk() {
  const date = new Date(1638385200000)
  const date2= new Date(1639508400000)

  const flatRent = new FlatRentSdk()
  const params = {
    city:'Санкт-Петербург',
    checkInDate:date,
    checkOutDate:date2,
  }

  console.log(await flatRent.get('vnd331'))
  console.log(await flatRent.search(params))
  console.log(await flatRent.book('vnd331',date, date2))
}
