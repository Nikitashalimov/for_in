export default function orderByProps(object, arrStart) { // функция для создания массива
  const arrKey = []; // пустой массив для ключей
  for (const el in object) { // перебираем ключи и добавляем в массив c ключами
    arrKey.push(el);
  }
  const arrResult = []; // пустой итоговый массив
  arrKey.sort(); // сортируем массив с ключами
  // далее пробегаемся по стартовому массиву и выносим вперед нужные элементы
  const arrReverse = arrStart.reverse(); // переворачиваем массив из условия
  for (let i = 0; i < arrReverse.length; i += 1) { // пробегаем по перевернутому массиву из условия
    const index = arrKey.findIndex((item) => item === arrReverse[i]); // ищем индекс элементов
    arrKey.unshift(...arrKey.splice(index, 1)); // вырезаем и вставляем в начало массива с ключами
  }
  for (let i = 0; i < arrKey.length; i += 1) { // циклом пробегаемся по массиву с ключами
    const k = arrKey[i];
    const newObject = { key: k, value: object[k] };
    arrResult.push(newObject); // наполняем конечный массив
  }
  return arrResult;
}
