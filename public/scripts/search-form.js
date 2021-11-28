import { renderBlock } from './lib.js';
import DateClass from './helper/dateClass.js';
import { searchFormFunc } from './helper/searchFormFunc.js';
export function renderSearchFormBlock(arrivalDate, dateOfDeparture) {
  const date = new DateClass();
  function submitFormEvent(e, arrayValues) {
    e.preventDefault();
    if (e.target) {
      const formData = new FormData(e.target);
      const formDataEntries = {};
      arrayValues.forEach(key => {
        formDataEntries[key] = formData.get(key);
      });
      searchFormFunc(formDataEntries);
    }
  }
  renderBlock('search-form-block', `
    <form id="form">
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
            <input id="check-in-date" type="date" value=${arrivalDate ? arrivalDate : date.getDaysPlus(1)} min=${date.getToday()} max=${date.getMonthPlus()} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${dateOfDeparture ? dateOfDeparture : date.getDaysPlus(2)} min=${date.getToday()} max=${date.getMonthPlus()} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
  const form = document.getElementById('form');
  if (form) {
    const arrayNames = ['checkin', 'checkout', 'price'];
    form.addEventListener('submit', ev => submitFormEvent(ev, arrayNames));
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUNwQyxPQUFPLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQWtCLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBSTNFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxXQUFvQixFQUFFLGVBQXdCO0lBQ2xGLE1BQU0sSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUE7SUFFNUIsU0FBUyxlQUFlLENBQUMsQ0FBYSxFQUFFLFdBQXVCO1FBQzdELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUM7WUFDWCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBeUIsQ0FBQyxDQUFBO1lBQzFELE1BQU0sZUFBZSxHQUFvQixFQUFFLENBQUM7WUFFNUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFjLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckQsQ0FBQyxDQUFDLENBQUE7WUFFRixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBaUJzRCxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRTs7OzsyREFJaEcsZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLElBQUksQ0FBQyxZQUFZLEVBQUU7Ozs7Ozs7Ozs7OztLQVkvSixDQUNGLENBQUE7SUFFRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTVDLElBQUksSUFBSSxFQUFDO1FBQ1AsTUFBTSxVQUFVLEdBQWUsQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUE7S0FDdkU7QUFFSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW5kZXJCbG9ja30gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQgRGF0ZUNsYXNzIGZyb20gJy4vaGVscGVyL2RhdGVDbGFzcy5qcyc7XG5pbXBvcnQge0lTZWFyY2hGb3JtRGF0YSwgc2VhcmNoRm9ybUZ1bmN9IGZyb20gJy4vaGVscGVyL3NlYXJjaEZvcm1GdW5jLmpzJztcblxuZXhwb3J0IHR5cGUgbmFtZXNUeXBlID0gJ2NoZWNraW4nIHwgJ2NoZWNrb3V0JyB8ICdwcmljZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhhcnJpdmFsRGF0ZT86IHN0cmluZywgZGF0ZU9mRGVwYXJ0dXJlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZUNsYXNzKClcblxuICBmdW5jdGlvbiBzdWJtaXRGb3JtRXZlbnQoZTpTdWJtaXRFdmVudCwgYXJyYXlWYWx1ZXM6bmFtZXNUeXBlW10pe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChlLnRhcmdldCl7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpXG4gICAgICBjb25zdCBmb3JtRGF0YUVudHJpZXM6IElTZWFyY2hGb3JtRGF0YSA9IHt9O1xuXG4gICAgICBhcnJheVZhbHVlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZvcm1EYXRhRW50cmllc1trZXldID0gPG5hbWVzVHlwZT5mb3JtRGF0YS5nZXQoa2V5KVxuICAgICAgfSlcblxuICAgICAgc2VhcmNoRm9ybUZ1bmMoZm9ybURhdGFFbnRyaWVzKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPSR7YXJyaXZhbERhdGUgPyBhcnJpdmFsRGF0ZSA6IGRhdGUuZ2V0RGF5c1BsdXMoMSl9IG1pbj0ke2RhdGUuZ2V0VG9kYXkoKX0gbWF4PSR7ZGF0ZS5nZXRNb250aFBsdXMoKX0gbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPSR7ZGF0ZU9mRGVwYXJ0dXJlID8gZGF0ZU9mRGVwYXJ0dXJlIDogZGF0ZS5nZXREYXlzUGx1cygyKX0gbWluPSR7ZGF0ZS5nZXRUb2RheSgpfSBtYXg9JHtkYXRlLmdldE1vbnRoUGx1cygpfSBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcblxuICBpZiAoZm9ybSl7XG4gICAgY29uc3QgYXJyYXlOYW1lczpuYW1lc1R5cGVbXSA9IFsnY2hlY2tpbicsJ2NoZWNrb3V0JywncHJpY2UnXVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXYgPT4gc3VibWl0Rm9ybUV2ZW50KGV2LGFycmF5TmFtZXMgKSlcbiAgfVxuXG59XG4iXX0=
