export interface IButtonsData {
  text: string
  style: {
    top: string
    left?: string
    right?: string
  }
}

const buttonsData1: IButtonsData[] = [
  { text: 'Нет договора?', style: { top: '70px', left: '200px' } },
  { text: 'Заказчик мешает работать?', style: { top: '170px', left: '40px' } },
  { text: 'Спор о качестве работ?', style: { top: '270px', left: '120px' } },
  {
    text: 'Заказчик не принимает работы?',
    style: { top: '370px', left: '30px' },
  },
  { text: 'Ушел с объекта?', style: { top: '520px', left: '100px' } },
  { text: 'Уклоняются от приемки?', style: { top: '650px', left: '190px' } },
  {
    text: 'Заказчик не платит за допработы?',
    style: { top: '800px', left: '400px' },
  },
  { text: 'Не можешь найти юриста?', style: { top: '700px', left: '700px' } },
  { text: 'Получил претензию?', style: { top: '800px', left: '750px' } },
  { text: 'Разорвал контракт?', style: { top: '740px', right: '400px' } },
  { text: 'Работа сделана плохо?', style: { top: '580px', right: '175px' } },
  { text: 'Требование по гарантии?', style: { top: '450px', right: '100px' } },
  { text: 'На вас подали в суд?', style: { top: '330px', right: '150px' } },
  { text: 'Нужно потянуть время?', style: { top: '200px', right: '170px' } },
  { text: 'Огромная неустойка?', style: { top: '80px', right: '200px' } },
]

const buttonsData2: IButtonsData[] = [
  // left
  { text: 'Нет договора?', style: { top: '70px', left: '50px' } },
  { text: 'Заказчик мешает работать?', style: { top: '170px', left: '40px' } },
  { text: 'Спор о качестве работ?', style: { top: '20px', left: '220px' } },
  {
    text: 'Заказчик не принимает работы?',
    style: { top: '100px', left: '250px' },
  },
  { text: 'Ушел с объекта?', style: { top: '820px', left: '100px' } },
  { text: 'Уклоняются от приемки?', style: { top: '650px', left: '140px' } },
  {
    text: 'Заказчик не платит за допработы?',
    style: { top: '730px', right: '150px' },
  },
  { text: 'Не можешь найти юриста?', style: { top: '700px', left: '200px' } },
  { text: 'Получил претензию?', style: { top: '875px', left: '200px' } },

  // right
  { text: 'Разорвал контракт?', style: { top: '840px', right: '100px' } },
  { text: 'Работа сделана плохо?', style: { top: '780px', right: '175px' } },
  { text: 'Требование по гарантии?', style: { top: '670px', right: '100px' } },
  { text: 'На вас подали в суд?', style: { top: '30px', right: '50px' } },
  { text: 'Нужно потянуть время?', style: { top: '200px', right: '70px' } },
  { text: 'Огромная неустойка?', style: { top: '100px', right: '150px' } },
]

const buttonsData3: IButtonsData[] = [
  // left
  { text: 'Нет договора?', style: { top: '10px', left: '40px' } },
  { text: 'Заказчик мешает работать?', style: { top: '70px', left: '40px' } },
  { text: 'Спор о качестве работ?', style: { top: '10px', left: '230px' } },
  {
    text: 'Заказчик не принимает работы?',
    style: { top: '130px', left: '150px' },
  },
  { text: 'Ушел с объекта?', style: { top: '590px', left: '100px' } },
  { text: 'Уклоняются от приемки?', style: { top: '495px', left: '140px' } },
  {
    text: 'Заказчик не платит за допработы?',
    style: { top: '550px', right: '100px' },
  },
  { text: 'Не можешь найти юриста?', style: { top: '540px', left: '5px' } },
  { text: 'Получил претензию?', style: { top: '655px', left: '50px' } },

  // right
  { text: 'Разорвал контракт?', style: { top: '650px', right: '100px' } },
  { text: 'Работа сделана плохо?', style: { top: '600px', right: '175px' } },
  { text: 'Требование по гарантии?', style: { top: '495px', right: '100px' } },
  { text: 'На вас подали в суд?', style: { top: '30px', right: '50px' } },
  { text: 'Нужно потянуть время?', style: { top: '165px', right: '70px' } },
  { text: 'Огромная неустойка?', style: { top: '110px', right: '40px' } },
]

const buttonsData4: IButtonsData[] = [
  // left
  { text: 'Нет договора?', style: { top: '220px', left: '5px' } },
  { text: 'Заказчик мешает работать?', style: { top: '220px', right: '5px' } },
  { text: 'Спор о качестве работ?', style: { top: '260px', left: '5px' } },
  {
    text: 'Заказчик не принимает работы?',
    style: { top: '340px', left: '5px' },
  },
  { text: 'Ушел с объекта?', style: { top: '340px', right: '5px' } },
  { text: 'Уклоняются от приемки?', style: { top: '300px', left: '5px' } },
  {
    text: 'Заказчик не платит за допработы?',
    style: { top: '460px', left: '5px' },
  },
  { text: 'Не можешь найти юриста?', style: { top: '420px', left: '5px' } },
  { text: 'Получил претензию?', style: { top: '300px', right: '5px' } },

  // right
  { text: 'Разорвал контракт?', style: { top: '380px', left: '5px' } },
  { text: 'Работа сделана плохо?', style: { top: '380px', right: '5px' } },
  { text: 'Требование по гарантии?', style: { top: '260px', right: '5px' } },
  { text: 'На вас подали в суд?', style: { top: '420px', right: '5px' } },
  { text: 'Нужно потянуть время?', style: { top: '185px', left: '5px' } },
  { text: 'Огромная неустойка?', style: { top: '185px', right: '5px' } },
]

export { buttonsData1, buttonsData2, buttonsData3, buttonsData4 }
