let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (maxValue < minValue) {
    [maxValue, minValue] = [minValue, maxValue];
}
if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
}
minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;




const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

//Кнопка заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
    maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
    if (maxValue < minValue) {
        [maxValue, minValue] = [minValue, maxValue];
    }
    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    }
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;


})



//Кнопка больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
           const phraseRandom = Math.round( Math.random()*3);
           switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                        break;

                    case 1:
                        answerPhrase = `Вы забыли, какое число загадали?\n\u{1F92A}`
                        break;

                    case 2:
                        answerPhrase = `Вы ошиблись с числом!\n\u{1F9D0}`
                        break;

                    case 3:
                        answerPhrase = `Не жульничайте!\n\u{1F620}`
                        break;
                }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Наверное, это число `
                        break;

                    case 1:
                        answerPhrase = `Возможно `
                        break;

                    case 2:
                        answerPhrase = `Это число `
                        break;              
                }
            answerField.innerText = `${answerPhrase} ${answerNumber }?`;
        }
    }
})
//Кнопка меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            const phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                        break;

                    case 1:
                        answerPhrase = `Вы забыли, какое число загадали?\n\u{1F92A}`
                        break;

                    case 2:
                        answerPhrase = `Вы ошиблись с числом!\n\u{1F9D0}`
                        break;

                    case 3:
                        answerPhrase = `Не жульничайте!\n\u{1F620}`
                        break;
                }
                answerField.innerText = answerPhrase;
                gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                    case 1:
                        answerPhrase = `Наверное, это число `
                        break;

                    case 2:
                        answerPhrase = `Возможно `
                        break;

                    case 3:
                        answerPhrase = `Это число `
                        break;              
                }
            answerField.innerText = `${answerPhrase} ${answerNumber }?`;
        }
    }
})
//Кнопка верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 3);
        switch (phraseRandom) {
                case 0:
                    answerPhrase = `Я всегда угадываю\n\u{1F60E}`
                    break;

                case 1:
                    answerPhrase = `Yes! \n\u{1F60E}`
                    break;

                case 2:
                    answerPhrase = `Отлично!\n\u{1F973}`
                    break;

                case 3:
                    answerPhrase = `Я выиграл!\n\u{1F929}`
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
    }
})
