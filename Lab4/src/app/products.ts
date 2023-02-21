export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  kaspiLink: string;
  rating: number;
}

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
    rating: 5.0,
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
    rating: 4.7,
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
    rating: 3.3,
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
    rating: 5.0,
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
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 46309,
    description: `    Технология NFC: Нет
    Цвет: черный
    Тип экрана: PLS TFT LCD сенсорный, мультитач
    Диагональ: 6.5 дюйм
    Размер оперативной памяти: 2 ГБ
    Процессор: 8-ядерный Unisoc SC9863A
    Объем встроенной памяти: 32 ГБ
    Емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim черный',
    price: 1170000,
    description: `    Технология NFC: Да
    Цвет: черный
    Тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
    Диагональ: 6.7 дюйм
    Размер оперативной памяти: 6 ГБ
    Процессор: 6-ядерный Apple A16 Bionic
    Объем встроенной памяти: 1024 ГБ
    Емкость аккумулятора: 3095 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h3e/63792875536414/apple-iphone-14-pro-max-1tb-chernyi-107116389-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi Note 11 6 ГБ/128 ГБ синий',
    price: 118990,
    description: `    Технология NFC: Нет
    Цвет: синий
    Тип экрана: AMOLED, сенсорный, мультитач
    Диагональ: 6.43 дюйм
    Размер оперативной памяти: 6 ГБ
    Процессор: 8-ядерный Qualcomm Snapdragon 680
    Объем встроенной памяти: 128 ГБ
    Емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/hd3/50327712104478/xiaomi-redmi-note-11-6-128gb-sinij-104635639-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-6-gb-128-gb-sinii-104635639/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 4.7,
  },
  {
    id: 9,
    name: 'Смартфон Google Pixel 6a 6 ГБ/128 ГБ белый',
    price: 211900,
    description: `    Технология NFC: Да
    Цвет: белый
    Тип экрана: Super AMOLED, емкостный, мультитач
    Диагональ: 6.2 дюйм
    Размер оперативной памяти: 6 ГБ
    Процессор: 8 ядер (2x2.80 ГГц Cortex-X1 и 2x2.25 ГГц Cortex-A76 и 4x1.80 ГГц Cortex-A55)
    Объем встроенной памяти: 128 ГБ
    Емкость аккумулятора: 4800 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h97/62084242243614/google-pixel-6a-6-gb-128-gb-belyi-106250314-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-belyi-106250314/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 4.9,
  },
  {
    id: 10,
    name: 'Смартфон VIVO Y35 4 ГБ/64 ГБ золотистый',
    price: 100390,
    description: `    Технология NFC: Нет
    Цвет: золотистый
    Тип экрана: LCD IPS
    Диагональ: 6.58 дюйм
    Размер оперативной памяти: 4 ГБ
    Процессор: Qualcomm Snapdragon 680
    Объем встроенной памяти: 64 ГБ
    Емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/h77/63653488459806/vivo-y35-4-gb-64-gb-zolotistyi-107091521-1.jpg',
    kaspiLink:
      'https://kaspi.kz/shop/p/vivo-y35-4-gb-64-gb-zolotistyi-107091521/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHLRZGqNxX004vcod2OfJopbyw4FnwkcF3bfeOVb6sgvAhVhMmKBV8RoCjcQQAvD_BwE#!/item',
    rating: 4.5,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
