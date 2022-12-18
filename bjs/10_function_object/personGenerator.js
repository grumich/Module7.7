const mon = Math.floor(Math.random() * 3); // случайное число для генерации месяца
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemalelJson:`{
        "count":10,
        "list":{
        "id_1": "Мария",
        "id_2": "Алена",
        "id_3": "Анна",
        "id_4": "Наталья",
        "id_5": "Ирина",
        "id_6": "Евгения",
        "id_7": "Татьяна",
        "id_8": "Ксения",
        "id_9": "Вероника",
        "id_10": "Алла"
        
        }
    }`,
    
      patronymicJson:`{
        "count":10,
        "list":{
           "id_1": "Владимиров",
           "id_2": "Алексеев",
           "id_3": "Сергеев",
           "id_4": "Петров",
           "id_5": "Андреев",
           "id_6": "Михайлов",
           "id_7": "Иванов",
           "id_8": "Александров",
           "id_9": "Анатольев",
           "id_10": "Петров"
        
        }
    }`,

       professionMaleJson:`{
        "count":10,
        "list":{
        "id_1": "Шахтер",
        "id_2": "Грузчик",
        "id_3": "Певец",
        "id_4": "Инженер",
        "id_5": "Строитель",
        "id_6": "Разнорабочий",
        "id_7": "Военный",
        "id_8": "Крановщик",
        "id_9": "Охраник",
        "id_10": "Полицейский"
        
        }
    }`,

        professionFemaleJson:`{
        "count":10,
        "list":{
        "id_1": "Танцовщица",
        "id_2": "Актриса",
        "id_3": "Певица",
        "id_4": "Визажист",
        "id_5": "Уборщица",
        "id_6": "Модель",
        "id_7": "Учительница",
        "id_8": "Медсестра",
        "id_9": "Швея",
        "id_10": "Переводчица"
        
        }
    }`,

    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

// генерация пола
    randomGender: function() {
    return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
   

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
   
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
// генерация имени
    randomFirstName: function() {
    if(this.person.gender=='Мужчина'){
         return this.randomValue(this.firstNameMaleJson);
    }
    else{
        return this.randomValue(this.firstNameFemalelJson);
    }
    },
//генерация фамилии
     randomSurname: function() {
     if(this.person.gender=='Мужчина'){
        return this.randomValue(this.surnameJson);
    }
    else{
        return this.randomValue(this.surnameJson) + "а";
    }
    },
//генерация отчества
    randomPatronymic: function() {
     if(this.person.gender=='Мужчина'){
        return this.randomValue(this.patronymicJson) +"ич";
    }
    else{
        return this.randomValue(this.patronymicJson) + "на";
    }
    },
//генерация года рождения
    randomYearOfBirthday: function (){
        return this.randomIntNumber(1980, 2001) +" г.р.";
    },

//генерация профессии
 randomProfession: function() {
     if(this.person.gender=='Мужчина'){
        return this.randomValue(this.professionMaleJson);
    }
    else{
        return this.randomValue(this.professionFemaleJson);
    }
    },

//генерация месяцев
  randomMonth31: function randomMonth() { // Функция генерации месяцев, в которых 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { // Функция генерации месяцев, в которых 30 дней
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { // Функция генерации месяца Февраль
		let month = `февраля`
		return month;
	},
    
    

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patroNymic = this.randomPatronymic();
        this.person.yearOfBirthday = this.randomYearOfBirthday();
    	this.person.profession = this.randomProfession();
        if (mon === 0) {
        this.person.month = this.randomMonth31();
        this.person.day = this.randomIntNumber(1, 31); // Генерация чисел в месяцах, в которых 31 день
        } 
        else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); // Генерация чисел в месяцах, в которых 30 деней
        } 
        else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); // Генерация чисел в месяце Февраль, в котором 28 дней
        }
        return this.person;
    }
};
