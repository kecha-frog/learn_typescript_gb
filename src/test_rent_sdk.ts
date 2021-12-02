import {FlatRentSdk} from './flat-rent-sdk.js';

export async function test_rent_sdk() {
  const date = new Date(1638385200000)
  const date2= new Date(1639508400000)

  const FlatRent = new FlatRentSdk()
  const params = {
    city:'Санкт-Петербург',
    checkInDate:date,
    checkOutDate:date2,
  }

  console.log(FlatRent.book('vnd331',date, date2))
  console.log(await FlatRent.get('vnd331'))
  console.log(await FlatRent.search(params))
}
