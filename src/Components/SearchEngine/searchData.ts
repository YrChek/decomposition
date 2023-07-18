import type { SearchPattern } from "./searchTypes";

/**
 * Входные данные для поисковой системы
 * @param [Object] searshData {
  sections: Array {
  text: string;
  url: string
};
  searchExample: {
  text: string,
  url: string
}}
 */

const searchData: SearchPattern = {
  sections: [
    {
      text: 'Видео',
      url: ''
    },
    {
      text: 'Картинки',
      url: ''
    },
    {
      text: 'Новости',
      url: ''
    },
    {
      text: 'Карты',
      url: ''
    },
    {
      text: 'Маркет',
      url: ''
    },
    {
      text: 'Переводчик',
      url: ''
    },
    {
      text: 'Эфир',
      url: ''
    },
    {
      text: 'еще',
      url: ''
    },
  ],
  searchExample: {
    text: 'фаза луны сегодня',
    url: ''
  }
}

export default searchData;

