import type { Accept } from "./typeWidgets";

/**
 * Входные данные для блока виджетов
 * @param {Array} dataWidget Array{
    type: string;
    title: string;
    text: Array{
  title: string;
  url: string;
  text?: string;
  span?: string;
  img?: string
} | Array\<string>;
    url: string;
    now: string | undefined;
    img: string | undefined;
}
 */

const dataWidget: Accept[] = [
  {
    type: 'weather',
    img: 'earth.png',
    title: 'Погода',
    now: '+17',
    text: ['Утром +17,', 'днем +20'],
    url: 'earth.png',
  },
  {
    type: 'accordion',
    title: 'Посещаемое',
    url: '',
    text: [
      {
      title: 'Недвижимость',
      text: '- о сталинках',
      url: ''
      },
      {
      title: 'Маркет',
      text: '- люстры и светильники',
      url: ''
      },
      {
      title: 'Авто.ру',
      text: '- привод 4х4 до 500000',
      url: ''
      },
    ]
  },
  {
    type: 'guitar',
    title: 'Карта Германии',
    url: '',
    text: [
      {
        title: 'Расписания',
        url: ''
      },
    ]
  },
  {
    type: 'guitar',
    img: 'earth.png',
    title: 'Телепрограмма',
    url: '',
    text: [
      {
        title: '02:00',
        text: 'ТНТ. Best',
        span: 'THT International',
        url: ''
      },
      {
        title: '02:15',
        text: 'Джинглики',
        span: 'Карусель INT',
        url: '',
      },
      {
        title: '02:25',
        text: 'Наедине со всеми',
        span: 'Первый',
        url: '',
      },
    ]
  },
  {
    type: 'guitar',
    title: 'Эфир',
    url: '',
    text: [
      {
        img: 'camera.png',
        title: 'Управление как искуство',
        span: 'Успех',
        url: ''
      },
      {
        img: 'camera.png',
        title: 'Ночь. Мир в это время',
        span: 'eathTV',
        url: '',
      },
      {
        img: 'camera.png',
        title: 'Андрей Возн...',
        span: 'Совершенно секретно',
        url: '',
      },
    ]
  },
]

export default dataWidget
