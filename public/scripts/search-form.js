import { renderBlock } from './lib.js';
class DateClass {
  constructor() {
    this.date = new Date();
    this.y = this.date.getFullYear();
    this.m = this.date.getMonth();
    this.d = this.date.getDate();
    this.datePlus = new Date(this.y, this.m, this.d);
  }
  getDaysPlus(daysPlus) {
    this.datePlus.setDate(this.datePlus.getDate() + daysPlus);
    return this.datePlus.getFullYear() + '-' + (this.datePlus.getMonth() + 1) + '-' + this.datePlus.getDate();
  }
  getMonthPlus() {
    const lastDay = new Date(this.y, this.m, 0);
    lastDay.setMonth(this.m + 1);
    return lastDay.getFullYear() + '-' + (lastDay.getMonth() + 1) + '-' + lastDay.getDate();
  }
  getToday() {
    return this.y + '-' + (this.m + 1) + '-' + this.d;
  }
}
const date = new DateClass();
export function renderSearchFormBlock(arrivalDate = date.getDaysPlus(1), dateOfDeparture = date.getDaysPlus(2)) {
  renderBlock('search-form-block', `
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUVwQyxNQUFNLFNBQVM7SUFBZjtRQUNFLFNBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ3RCLE1BQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzNCLE1BQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRXZCLGFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBZ0I3QyxDQUFDO0lBZEMsV0FBVyxDQUFDLFFBQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQTtRQUN6RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN6RyxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sT0FBTyxHQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDNUIsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDdkYsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFBO0FBRTVCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxjQUFzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUEwQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1SCxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzswREFpQnNELFdBQVcsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRTs7OzsyREFJNUQsZUFBZSxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUMsWUFBWSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZdkgsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyQmxvY2t9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBEYXRlQ2xhc3Mge1xuICBkYXRlOkRhdGUgPSBuZXcgRGF0ZSgpXG4gIHkgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKVxuICBtID0gdGhpcy5kYXRlLmdldE1vbnRoKCk7XG4gIGQgPSB0aGlzLmRhdGUuZ2V0RGF0ZSgpXG5cbiAgZGF0ZVBsdXMgPSBuZXcgRGF0ZSh0aGlzLnksIHRoaXMubSwgdGhpcy5kKVxuXG4gIGdldERheXNQbHVzKGRheXNQbHVzOm51bWJlcik6c3RyaW5nIHtcbiAgICB0aGlzLmRhdGVQbHVzLnNldERhdGUodGhpcy5kYXRlUGx1cy5nZXREYXRlKCkgKyBkYXlzUGx1cylcbiAgICByZXR1cm4gdGhpcy5kYXRlUGx1cy5nZXRGdWxsWWVhcigpICsgJy0nICsgKHRoaXMuZGF0ZVBsdXMuZ2V0TW9udGgoKSsxKSArICctJyArIHRoaXMuZGF0ZVBsdXMuZ2V0RGF0ZSgpXG4gIH1cblxuICBnZXRNb250aFBsdXMoKTpzdHJpbmcge1xuICAgIGNvbnN0IGxhc3REYXk6RGF0ZSA9IG5ldyBEYXRlKHRoaXMueSwgdGhpcy5tLCAwKTtcbiAgICBsYXN0RGF5LnNldE1vbnRoKHRoaXMubSArIDEpXG4gICAgcmV0dXJuIGxhc3REYXkuZ2V0RnVsbFllYXIoKSArICctJyArIChsYXN0RGF5LmdldE1vbnRoKCkrMSkgKyAnLScgKyBsYXN0RGF5LmdldERhdGUoKVxuICB9XG5cbiAgZ2V0VG9kYXkoKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnkgKyAnLScgKyAodGhpcy5tKzEpKyAnLScgKyB0aGlzLmRcbiAgfVxufVxuXG5jb25zdCBkYXRlID0gbmV3IERhdGVDbGFzcygpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soYXJyaXZhbERhdGU6IHN0cmluZyA9IGRhdGUuZ2V0RGF5c1BsdXMoMSksIGRhdGVPZkRlcGFydHVyZTogc3RyaW5nID0gZGF0ZS5nZXREYXlzUGx1cygyKSkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2Fycml2YWxEYXRlfSBtaW49JHtkYXRlLmdldFRvZGF5KCl9IG1heD0ke2RhdGUuZ2V0TW9udGhQbHVzKCl9IG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2RhdGVPZkRlcGFydHVyZX0gbWluPSR7ZGF0ZS5nZXRUb2RheSgpfSBtYXg9JHtkYXRlLmdldE1vbnRoUGx1cygpfSBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==
