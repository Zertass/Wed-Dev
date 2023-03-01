export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  kaspiLink: string;
  rating: number;
}

export interface Category {
  id: number;
  name: string;
  imageLink: string;
  listOfProducts: number[];
}

export const categories = [
  {
    id: 0,
    name: 'Тупо все',
    imageLink: 'https://kaspi.kz/img/Home.png',
    listOfProducts: [],
  },
  {
    id: 1,
    name: 'Телефоны, гажеты',
    imageLink: 'https://kaspi.kz/img/Phone.png',
    listOfProducts: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: 'Компьютеры',
    imageLink: 'https://kaspi.kz/img/Computer.png',
    listOfProducts: [6, 7, 8, 9, 10],
  },
  {
    id: 3,
    name: 'Обувь',
    imageLink: 'https://kaspi.kz/img/Shoes1.png',
    listOfProducts: [11, 12, 13, 14, 15],
  },
  {
    id: 4,
    name: 'Одежда',
    imageLink: 'https://kaspi.kz/img/Clothes1.png',
    listOfProducts: [16, 17, 18, 19, 20],
  },
];

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: 104665,
    description: `Технология NFC: Да
      Цвет: черный
      Тип экрана: PLS TFT LCD сенсорный, мультитач
      Диагональ: 6.6 дюйм
      азмер оперативной памяти: 6 ГБ
      роцессор: 8-ядерный Snapdragon 680
      Объем встроенной памяти: 128 ГБ
      Емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 72346,
    description: `Технология NFC: Нет
    Цвет: серый
    Тип экрана: IPS, сенсорный, мультитач
    Диагональ: 6.71 дюйм
    Размер оперативной памяти: 4 ГБ
    Процессор: 8-ядерный Qualcomm Snapdragon 680
    Объем встроенной памяти: 128 ГБ
    Емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 3,
    name: 'Смартфон BQ 6631G Surf 2 ГБ/16 ГБ черный',
    price: 42010,
    description: `Технология NFC: Нет
    Цвет: черный
    Тип экрана: сенсорный, мультитач, IPS
    Диагональ: 6.53 дюйм
    Размер оперативной памяти: 2 ГБ
    Процессор: 4х-ядерный Unisoc SC7731E
    Объем встроенной памяти: 16 ГБ
    Емкость аккумулятора: 3000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hc2/34290608930846/bq-6631g-surf-2-16gb-cernyj-101495509-1-Container.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/bq-6631g-surf-2-gb-16-gb-chernyi-101495509/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 709660,
    description: `    Технология NFC: Да
    Цвет: фиолетовый
    Тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
    Диагональ: 6.7 дюйм
    Размер оперативной памяти: 6 ГБ
    Процессор: 6-ядерный Apple A16 Bionic
    Объем встроенной памяти: 256 ГБ
    Емкость аккумулятора: 3095 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 0,
  },
  {
    id: 5,
    name: 'Смартфон Xiaomi Redmi Note 11 4 ГБ/128 ГБ серый',
    price: 99840,
    description: `    Технология NFC: Нет
    Цвет: серый
    Тип экрана: AMOLED, сенсорный, Corning Gorilla Glass 3
    Диагональ: 6.43 дюйм
    Размер оперативной памяти: 4 ГБ
    Процессор: 8-ядерный Qualcomm Snapdragon 680
    Объем встроенной памяти: 128 ГБ
    Емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/hc9/48472414289950/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-seryi-103541773/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 0,
  },
  {
    id: 6,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    description: `    Диагональ экрана: 15.6 дюйм
    Процессор: Intel Pentium Gold 7505
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8 ГБ
    Тип жесткого диска: SSD
    Общий объем накопителей: 256 ГБ`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 7,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239990,
    description: `    Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i3 1115G4
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8 ГБ
    Тип жесткого диска: SSD
    Общий объем накопителей: 512 ГБ`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 8,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389800,
    description: `    Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5 11400H
    Видеокарта: NVIDIA GeForce GTX 1650
    Размер оперативной памяти: 16 ГБ
    Тип жесткого диска: SSD
    Общий объем накопителей: 512 ГБ`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 9,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 478990,
    description: `    Диагональ экрана: 13.3 дюйм
    Процессор: Apple M1
    Видеокарта: Apple M1 7 core
    Размер оперативной памяти: 8 ГБ
    Тип жесткого диска: SSD
    Общий объем накопителей: 256 ГБ`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 10,
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    price: 139990,
    description: `    Диагональ экрана: 14 дюйм
    Процессор: Intel Celeron N4020
    Видеокарта: Intel UHD Graphics 600
    Размер оперативной памяти: 4 ГБ
    Тип жесткого диска: SSD
    Общий объем накопителей: 128 ГБ`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 11,
    name: 'Кроссовки Stay Tory 8452 черный 38',
    price: 12900,
    description: `    Модель: кроссовки
    Материал верха: искусственная кожа
    Сезон: демисезон`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h86/52285213769758/fashion-8452-cernyj-105711192-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/stay-tory-8452-chernyi-38-105711193/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 12,
    name: 'Кроссовки Stay Tory 8452 белый 37',
    price: 12900,
    description: `    Модель: кроссовки
    Материал верха: искусственная кожа
    Сезон: демисезон`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/hae/52285729570846/fashion-8452-belyj-105711188-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/stay-tory-8452-belyi-37-105711190/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 13,
    name: 'Кроссовки FASHION A703 белый 36',
    price: 11500,
    description: `    Модель: кроссовки
    Материал верха: искусственная кожа
    Сезон: демисезон`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/hc7/66700023595038/fashion-a703-belyi-chernyi-107904774-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/fashion-a703-belyi-36-107904775/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 14,
    name: 'Кроссовки Fashion C352-B белый 39',
    price: 6900,
    description: `    Модель: кроссовки
    Материал верха: текстиль
    Сезон: лето`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/h16/69334731456542/fashion-c352-b-belyi-104500747-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/fashion-c352-b-belyi-39-104500749/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 15,
    name: 'Кроссовки FASHION 2021 черный 39',
    price: 13500,
    description: `    Модель: кроссовки
    Материал верха: искусственная кожа
    Сезон: демисезон
    Особенности размера: маломерит на 1 размер`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/he3/67561826648094/fashion-2021-belyi-chernyi-108313978-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/fashion-2021-chernyi-39-108313979/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 16,
    name: 'Decathlon Domyos Sportee 8572641 черная 2XL',
    price: 2390,
    description: `    Модель: футболка
    Воротник/вырез: круглый вырез
    Рукава: короткие
    Состав: хлопок
    Узор: однотонный`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/hda/50677320974366/decathlon-domyos-sportee-8572641-104822143-1JPEG.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/decathlon-domyos-sportee-8572641-chernaja-2xl-101567382/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 17,
    name: 'Майка Berrak Tekstil 1020 белый 52',
    price: 1567,
    description: `    Модель: майка
    Воротник/вырез: круглый вырез
    Рукава: отсутствуют
    Состав: хлопок
    Узор: однотонный`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/hdc/52291479797790/majka-berrak-tekstil-1020-belyj-105718269-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/maika-berrak-tekstil-1020-belyi-52-105718271/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 18,
    name: 'майка Berrak Tekstil 1022 черный L',
    price: 1873,
    description: `    Модель: майка
    Воротник/вырез: круглый вырез
    Рукава: отсутствуют
    Состав: хлопок
    Узор: однотонный`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/hdf/50815824101406/berrak-tekstil-1022-104892322-1jpg.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/maika-berrak-tekstil-1022-chernyi-l-103549552/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 19,
    name: 'футболка Decathlon Domyos 8667940 ',
    price: 2390,
    description: `    Модель: футболка
    Воротник/вырез: круглый вырез
    Рукава: короткие
    Состав: хлопок
    Узор: однотонный`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/h7b/50676954234910/decathlon-domyos-8667940-104821957-1jpg.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/futbolka-decathlon-domyos-8667940-belyi-m-104291206/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 20,
    name: 'Tespe АТК029 серый 48',
    price: 1300,
    description: `    Модель: футболка
    Воротник/вырез: круглый вырез
    Рукава: короткие
    Состав: хлопок
    Узор: однотонный`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h2f/49891444195358/tespe-atk029-104396529-1jpg.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/tespe-atk029-seryi-48-104175205/?c=750000000#!/item',
    rating: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
