import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock} from './user.js'
import {renderToast} from './lib.js'
import {getFavoritesAmount, getUserData} from './helper/helper.js';
import {getTodosByCount} from './helper/todosCount.js';

window.addEventListener('DOMContentLoaded', () => {
  //Тест
  localStorage.setItem('user',JSON.stringify({
    userName:'Test Test',
    avatarUrl:'/img/avatar.png'
  }))
  localStorage.setItem('favoritesAmount','100')

  const {userName, avatarUrl} = getUserData()
  const favoritesAmount = getFavoritesAmount()

  renderUserBlock(userName, avatarUrl, favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()

  getTodosByCount(3).then()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {
      name: 'Понял', handler: () => {
        console.log('Уведомление закрыто')
      }
    }
  )
})
