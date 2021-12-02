import {FlatRentSdk} from './flat-rent-sdk.js';

export async function test_rent_sdk() {
  const flatRent = new FlatRentSdk()

  console.log(await flatRent.get('vnd331'))

  const params = {
    city:'Санкт-Петербург',
    checkInDate:new Date(1638385200000),
    checkOutDate:new Date(1639508400000),
  }
  console.log(await flatRent.search(params))

  const date1 = new Date()
  date1.setDate(20)
  const date2= new Date()
  date2.setDate(25)
  console.log(await flatRent.book('vnd331',date1, date2))
}
