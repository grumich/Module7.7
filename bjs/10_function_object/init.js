document.querySelector('#generation').addEventListener('click', function() {
const initPerson = personGenerator.getPerson();
document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
document.querySelector('#surnameOutput').innerText = initPerson.surName;
document.querySelector('#secondNameOutput').innerText = initPerson.patroNymic;
document.querySelector('#genderOutput').innerText = initPerson.gender;
document.querySelector('#birthYearOutput').innerText = initPerson.yearOfBirthday;
document.querySelector('#professionOutput').innerText = initPerson.profession;
document.querySelector('#birthDayOutput').innerText = initPerson.day;
document.querySelector('#birthMonthOutput').innerText = initPerson.month;
});

document.querySelector('#clear').addEventListener('click', function() {
document.querySelector('#firstNameOutput').innerText = "Имя";
document.querySelector('#surnameOutput').innerText = "Фамилия";
document.querySelector('#secondNameOutput').innerText = "Отчество";
document.querySelector('#genderOutput').innerText = "Пол";
document.querySelector('#birthDayOutput').innerText = "";
document.querySelector('#birthMonthOutput').innerText = "";
document.querySelector('#birthYearOutput').innerText = "Дата рождения,";
document.querySelector('#professionOutput').innerText = "Профессия";
});
