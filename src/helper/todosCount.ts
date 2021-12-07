//Ошибка разрешения спецификатора модуля «axios». Связанные спецификаторы модуля должны начинаться с «./», «../» или «/».
//import axios from 'axios';

interface ITodos{
  'userId': number,
  'id': number,
  'title': string,
  'completed': boolean
}
export const getTodosByCount = async (count: number): Promise<void> => {
  // Не смог подключить как не пытался, только через скрипт ссылкой работает
  // console.log(await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`, {})
  //   .then(r => r.data)
  //   .catch(e => e.message))

  const response:ITodos[] | void = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
    .then((response:Response) => response.json())
    .then((data:ITodos[]) => data)
    .catch()

  if (response){
    console.log(response)
  }else {
    console.log('Fetch Error')
  }
}

