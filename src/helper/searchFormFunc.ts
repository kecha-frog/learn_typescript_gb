import {FlatRentSdk} from '../flat-rent-sdk.js';

export interface ISearchFormData {
  checkin?: string;
  checkout?: string;
  price?: string;
}

export const searchFormFunc = async (formData: ISearchFormData): Promise<void> => {

  if (formData.checkin && formData.checkout) {
    const flatRent = new FlatRentSdk()
    const params = {
      city: 'Санкт-Петербург',
      checkInDate: new Date(formData.checkin),
      checkOutDate: new Date(formData.checkout),
    }

    console.log(await flatRent.search(params))

    //Тест
    const date1 = new Date()
    date1.setDate(20)
    const date2 = new Date()
    date2.setDate(25)
    console.log(await flatRent.get('vnd331'))
    console.log(await flatRent.book('vnd331', date1, date2))

  }


}
