import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getFavoritesAmount, getUserData } from './helper/helper.js';
window.addEventListener('DOMContentLoaded', () => {
    //Тест
    localStorage.setItem('user', JSON.stringify({
        userName: 'Test Test',
        avatarUrl: '/img/avatar.png'
    }));
    localStorage.setItem('favoritesAmount', '100');
    const { userName, avatarUrl } = getUserData();
    const favoritesAmount = getFavoritesAmount();
    renderUserBlock(userName, avatarUrl, favoritesAmount);
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, {
        name: 'Понял', handler: () => {
            console.log('Уведомление закрыто');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sa0JBQWtCLENBQUE7QUFDdEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0scUJBQXFCLENBQUE7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQTtBQUN6QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sVUFBVSxDQUFBO0FBQ3BDLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUluRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU07SUFDTixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pDLFFBQVEsRUFBQyxXQUFXO1FBQ3BCLFNBQVMsRUFBQyxpQkFBaUI7S0FDNUIsQ0FBQyxDQUFDLENBQUE7SUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdDLE1BQU0sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLEdBQUcsV0FBVyxFQUFFLENBQUE7SUFDM0MsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQTtJQUU1QyxlQUFlLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUNyRCxxQkFBcUIsRUFBRSxDQUFBO0lBQ3ZCLHFCQUFxQixFQUFFLENBQUE7SUFDdkIsV0FBVyxDQUNULEVBQUMsSUFBSSxFQUFFLDJEQUEyRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFDcEY7UUFDRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3BDLENBQUM7S0FDRixDQUNGLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyU2VhcmNoRm9ybUJsb2NrfSBmcm9tICcuL3NlYXJjaC1mb3JtLmpzJ1xuaW1wb3J0IHtyZW5kZXJTZWFyY2hTdHViQmxvY2t9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuanMnXG5pbXBvcnQge3JlbmRlclVzZXJCbG9ja30gZnJvbSAnLi91c2VyLmpzJ1xuaW1wb3J0IHtyZW5kZXJUb2FzdH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge2dldEZhdm9yaXRlc0Ftb3VudCwgZ2V0VXNlckRhdGF9IGZyb20gJy4vaGVscGVyL2hlbHBlci5qcyc7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy/QotC10YHRglxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsSlNPTi5zdHJpbmdpZnkoe1xuICAgIHVzZXJOYW1lOidUZXN0IFRlc3QnLFxuICAgIGF2YXRhclVybDonL2ltZy9hdmF0YXIucG5nJ1xuICB9KSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlc0Ftb3VudCcsJzEwMCcpXG5cbiAgY29uc3Qge3VzZXJOYW1lLCBhdmF0YXJVcmx9ID0gZ2V0VXNlckRhdGEoKVxuICBjb25zdCBmYXZvcml0ZXNBbW91bnQgPSBnZXRGYXZvcml0ZXNBbW91bnQoKVxuXG4gIHJlbmRlclVzZXJCbG9jayh1c2VyTmFtZSwgYXZhdGFyVXJsLCBmYXZvcml0ZXNBbW91bnQpXG4gIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpXG4gIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpXG4gIHJlbmRlclRvYXN0KFxuICAgIHt0ZXh0OiAn0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LgnLCB0eXBlOiAnc3VjY2Vzcyd9LFxuICAgIHtcbiAgICAgIG5hbWU6ICfQn9C+0L3Rj9C7JywgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpXG4gICAgICB9XG4gICAgfVxuICApXG59KVxuIl19