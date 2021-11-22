import {renderBlock} from './lib.js'

class DateClass {
  date = new Date()
  y = this.date.getFullYear()
  m = this.date.getMonth();
  d = this.date.getDate()

  datePlus = new Date(this.y, this.m, this.d)

  getDaysPlus(daysPlus:number) {
    this.datePlus.setDate(this.datePlus.getDate() + daysPlus)
    return this.datePlus.getFullYear() + '-' + (this.datePlus.getMonth()+1) + '-' + this.datePlus.getDate()
  }

  getMonthPlus() {
    const lastDay = new Date(this.y, this.m, 0);
    lastDay.setMonth(this.m + 1)
    return lastDay.getFullYear() + '-' + (lastDay.getMonth()+1) + '-' + lastDay.getDate()
  }

  getToday() {
    return this.y + '-' + (this.m+1)+ '-' + this.d
  }
}

const date = new DateClass()

export function renderSearchFormBlock(arrivalDate: string = date.getDaysPlus(1), dateOfDeparture: string = date.getDaysPlus(2)) {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${arrivalDate} min=${date.getToday()} max=${date.getMonthPlus()} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateOfDeparture} min=${date.getToday()} max=${date.getMonthPlus()} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
