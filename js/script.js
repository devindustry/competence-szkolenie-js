const studentsDomElement = document.querySelector('.students');
const teachersDomElement = document.querySelector('#teachers');

class Person {
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  changeAge(newAge) {
    this.age = newAge;
  }
}

class Student extends Person {
  constructor(name, address, age, id) {
    super(name, address, age);
    this.id = id;
    this.profile = 'STUDENT';
  }

  displayFullInfo() {
    return `${this.profile}: ${this.name}, ${this.address}, Wiek: ${this.age}, ID: ${this.id} `;
  };

  changeId(newId) {
    this.id = newId;
  }

  changeAge(newAge) {
    this.age = `Nowy wiek: ${newAge}`;
  }
}

class Teacher extends Person {
  constructor(name, address, age, id) {
    super(name, address, age);
    this.id = id;
    this.profile = 'TEACHER';
  }

  displayFullInfo() {
    return `${this.profile}: ${this.name}, ${this.address}, Wiek: ${this.age}, ID: ${this.id}`;
  };

  changeId = (newId) => {
    this.id = newId;
  }
}

const PROFILE = {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
};

class CreatePerson {
  constructor({name, address, age, id, profile}) {
    switch (profile) {
      case PROFILE.STUDENT:
        return new Student(name, address, age, id);
      case PROFILE.TEACHER:
        return new Teacher(name, address, age, id);
    }
  }
}

const person1 = {
  name: 'Kaj Białas',
  address: 'Poznań',
  age: 30,
  id: 1234,
  profile: PROFILE.TEACHER,
};

const person2 = {
  name: 'Kaj Białas',
  address: 'Poznań',
  age: 30,
  id: 1234,
  profile: PROFILE.STUDENT,
};

const people = [
  new CreatePerson(person1),
  new CreatePerson(person1),
  new CreatePerson(person2),
  new CreatePerson(person2),
];

const renderHtml = (people) => people.map(element => {
  const newElement = document.createElement('div');
  newElement.innerText = element.displayFullInfo();

  if (element.profile === PROFILE.STUDENT) {
    return studentsDomElement.appendChild(newElement);
  }
  return teachersDomElement.appendChild(newElement);
});

renderHtml(people);
studentsDomElement.classList.add('final');
teachersDomElement.classList.add('final');
