interface IUser {
  userName: string
  avatarUrl: string
}

export const getUserData = (): IUser => {
  //Мог написать :unknown, но знаю что из localStorage придёт или string или null
  const userData: unknown = localStorage.getItem('user')

  if (typeof userData === 'string') {
    const objectKey = Object.keys(JSON.parse(userData))

    if (objectKey.includes('userName') && objectKey.includes('avatarUrl')) {
      return JSON.parse(userData)
    }
  }

  //Если localStorage пуст или не соответствует  IUser
  return {
    userName: 'Wade Warren',
    avatarUrl: '/img/avatar.png'
  }
}


export const getFavoritesAmount = (): number => {
  const userData: unknown = localStorage.getItem('favoritesAmount')


  if (typeof userData === 'string' && parseInt(userData)) {
    return +userData
  }

  //Если localStorage пуст или не число
  return 0
}
