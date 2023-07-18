import type { NewsPattern } from "./typeNews";

/**
 *  Входные данные для блока новостей
 * {
  @param dataNews 
  header: {
  newsLine: Array<{
  text: string;
  url: string;
  }> 
  newsFeed: Array<{
  img: string;
  text: string;
  url: string;
  }> 
  currency: {
  usd: number;
  usdGrowth: string;
  eur: number;
  eurGrowth: string;
  oil: number;
  oilGrowth: string;
  } 
  adBlock: {
  img: string;
  title: string;
  text: string;
  url: string;
  }
  }
 */

const dataNews:NewsPattern = {
  header: {
    newsLine: [
      {
      text: 'Сейчас в СМИ',
      url: ''
      },
      {
      text: 'в Германии',
      url: ''
      },
      {
      text: 'Рекомендуем',
      url: ''
      },
    ],
    newsFeed: [{
        img: 'camera.png',
        text: 'Путин упростил получение автомобильных номеров',
        url: ''
      },
      {
        img: 'camera.png',
        text: 'В команде Зеленского раскрыли план реформ на Украине',
        url: ''
      },
      {
        img: 'camera.png',
        text: '"Турпомощь" прокоментировала гтбель десятков россиян в Анталье',
        url: ''
      },
      {
        img: 'camera.png',
        text: 'Суд закрыл дело Демпартии США против России',
        url: ''
      },
      {
        img: 'camera.png',
        text: 'На Украине призвали создать ракеты для ударов по Москве',
        url: ''
      }
    ],
    currency: {
      usd: 63.52,
      usdGrowth: '+0,09',
      eur: 70.86,
      eurGrowth: '+0,14',
      oil: 64.90,
      oilGrowth: '+1.63%'
    },
    adBlock: {
      img: 'earth.png',
      title: 'Работа над ошибками',
      text: 'Смотрите на Яндексе и запоминайте',
      url: ''
    }
  }
}

export default dataNews