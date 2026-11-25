import img1 from './assets/items/img1.png'
import img2 from './assets/items/img2.png'
import img3 from './assets/items/img3.png'
import img4 from './assets/items/img4.svg'
import img5 from './assets/items/img5.svg'
import img6 from './assets/items/img6.svg'
import img7 from './assets/items/img7.svg'
import blog1 from './assets/blog/blog1.png'
import blog2 from './assets/blog/blog2.png'
import blog3 from './assets/blog/blog3.png'

export const categories = [
  { title: 'Напольные зеркала', count: 4, src: img4 },
  { title: 'Торшеры и лампы', count: 4, src: img5 },
  { title: 'Кресла и стулья', count: 4, src: img6 },
  { title: 'Столы и тумбы', count: 4, src: img7 },
]

export const items = [
  { src: img1, alt: 'Дизайнерский светильник', bg: 'bg-transparent', itemTitle: 'Светильник', desc: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения', price: '150 000' },
  { src: img2, alt: 'Дизайнерское кресло', bg: 'bg-pink', itemTitle: 'Кресло', desc: 'Функциональная дизайнерское кресло для создания максимально уюта в помещении', price: '120 000' },
  { src: img3, alt: 'Дизайнерская ваза', bg: 'bg-sky-blue', itemTitle: 'Ваза', desc: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения', price: '235 000' },
]

export const posts = [
  { title: 'Новая коллекция кресел', src: blog1, minutes: 3 },
  { title: 'Световой дизайн в интерьере', src: blog2, minutes: 3 },
  { title: 'Как выбрать шкаф в спальню', src: blog3, minutes: 3 },
  { title: 'Зеркала в интерьере', src: blog1, minutes: 4 },
  { title: 'Как выбрать торшер', src: blog2, minutes: 3 },
  { title: 'Акценты для гостиной', src: blog3, minutes: 5 },
  { title: 'Уютное место для чтения', src: blog1, minutes: 4 },
  { title: 'Столы для небольших комнат', src: blog2, minutes: 3 },
  { title: 'Декор и детали', src: blog3, minutes: 2 },
]
