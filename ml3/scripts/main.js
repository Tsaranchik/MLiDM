/**
 * Проверка, являются ли отношения функцией
 * @param masOfMas
 */
function check(mas) {
    let res = []; // результирующий массив
    let isFunction = true; // флаг
    for (let i = 0; i < mas.length; ++i) {
        let elem = mas[i].split(' '); // сплитим пару элементов массива [1 1]
        if (res.includes(elem[0])) {
            isFunction = false; // проверка на наличие элемента в результирующем массиве
            break;
        }
        res[res.length] = elem[0]; // добавление элемента
    }

    return isFunction;
}

/**
 * Основная функция
 */
function main() {
    let mas = document.getElementById('id_mas').value;
    document.getElementById('result').innerHTML = 'Результат: <br>';
    mas = mas.split(', ');
    let IsFunction = true;

    IsFunction = check(mas);
    if (!IsFunction)
        document.getElementById('result').innerHTML += 'Отношения не являются функцией <br>';
    else document.getElementById('result').innerHTML += 'Отношения являются функцией <br>';
}
