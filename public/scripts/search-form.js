import { renderBlock } from './lib.js';
class ClassDate {
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
const date = new ClassDate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUdwQyxNQUFNLFNBQVM7SUFBZjtRQUNFLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ2pCLE1BQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzNCLE1BQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRXZCLGFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBZ0I3QyxDQUFDO0lBZEMsV0FBVyxDQUFDLFFBQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQTtRQUN6RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN6RyxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDNUIsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDdkYsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFBO0FBRTVCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxjQUFzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUEwQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1SCxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzswREFpQnNELFdBQVcsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRTs7OzsyREFJNUQsZUFBZSxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUMsWUFBWSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZdkgsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyQmxvY2t9IGZyb20gJy4vbGliLmpzJ1xuXG5cbmNsYXNzIENsYXNzRGF0ZSB7XG4gIGRhdGUgPSBuZXcgRGF0ZSgpXG4gIHkgPSB0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKVxuICBtID0gdGhpcy5kYXRlLmdldE1vbnRoKCk7XG4gIGQgPSB0aGlzLmRhdGUuZ2V0RGF0ZSgpXG5cbiAgZGF0ZVBsdXMgPSBuZXcgRGF0ZSh0aGlzLnksIHRoaXMubSwgdGhpcy5kKVxuXG4gIGdldERheXNQbHVzKGRheXNQbHVzOm51bWJlcikge1xuICAgIHRoaXMuZGF0ZVBsdXMuc2V0RGF0ZSh0aGlzLmRhdGVQbHVzLmdldERhdGUoKSArIGRheXNQbHVzKVxuICAgIHJldHVybiB0aGlzLmRhdGVQbHVzLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAodGhpcy5kYXRlUGx1cy5nZXRNb250aCgpKzEpICsgJy0nICsgdGhpcy5kYXRlUGx1cy5nZXREYXRlKClcbiAgfVxuXG4gIGdldE1vbnRoUGx1cygpIHtcbiAgICBjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUodGhpcy55LCB0aGlzLm0sIDApO1xuICAgIGxhc3REYXkuc2V0TW9udGgodGhpcy5tICsgMSlcbiAgICByZXR1cm4gbGFzdERheS5nZXRGdWxsWWVhcigpICsgJy0nICsgKGxhc3REYXkuZ2V0TW9udGgoKSsxKSArICctJyArIGxhc3REYXkuZ2V0RGF0ZSgpXG4gIH1cblxuICBnZXRUb2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy55ICsgJy0nICsgKHRoaXMubSsxKSsgJy0nICsgdGhpcy5kXG4gIH1cbn1cblxuY29uc3QgZGF0ZSA9IG5ldyBDbGFzc0RhdGUoKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGFycml2YWxEYXRlOiBzdHJpbmcgPSBkYXRlLmdldERheXNQbHVzKDEpLCBkYXRlT2ZEZXBhcnR1cmU6IHN0cmluZyA9IGRhdGUuZ2V0RGF5c1BsdXMoMikpIHtcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9JHthcnJpdmFsRGF0ZX0gbWluPSR7ZGF0ZS5nZXRUb2RheSgpfSBtYXg9JHtkYXRlLmdldE1vbnRoUGx1cygpfSBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9JHtkYXRlT2ZEZXBhcnR1cmV9IG1pbj0ke2RhdGUuZ2V0VG9kYXkoKX0gbWF4PSR7ZGF0ZS5nZXRNb250aFBsdXMoKX0gbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG59XG4iXX0=
