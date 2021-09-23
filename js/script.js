const studentsDomElement = document.querySelector('.students');
const headerDomElement = document.querySelector('.header');
const buttonDomElement = document.querySelector('.disable');
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
  new CreatePerson(person2),
];

const renderHtml = (people) => {
  studentsDomElement.innerHTML = '';
  teachersDomElement.innerHTML = '';

  people.map(element => {
    const newElement = document.createElement('div');
    newElement.innerText = element.displayFullInfo();

    if (element.profile === PROFILE.STUDENT) {

      return studentsDomElement.appendChild(newElement);
    }
    return teachersDomElement.appendChild(newElement);
  });
};

renderHtml(people);
studentsDomElement.classList.add('final');
teachersDomElement.classList.add('final');


const form = document.forms['peopleForm'];
const formNameInput = form['name'];
const formAddressInput = form['address'];
const formAgeInput = form['age'];
const formIdInput = form['id'];
const formProfileInput = form['profile'];
const formButton = form['submit'];
formButton.disabled = true;

const validation = {
  name: false,
  address: false,
  profile: false,
};

function validateForm() {
  if (validation.name && validation.address && validation.profile) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}

form.childNodes.forEach(element => {
  const currentFormLs = JSON.parse(window.localStorage.getItem('peopleForm'));
  element.value = currentFormLs && currentFormLs[element.name] || '';

  if (element.name === 'name') {
    if (formNameInput.value.length < 3) {
      formNameInput.classList.add('wrong');
      validation.name = false;
    } else {
      formNameInput.classList.remove('wrong');
      validation.name = true;
    }
  }

  if (element.name === 'address') {
    if (formAddressInput.value.length < 3) {
      formAddressInput.classList.add('wrong');
      validation.address = false;
    } else {
      formAddressInput.classList.remove('wrong');
      validation.address = true;
    }
  }

  if (element.name === 'profile') {
    if (formProfileInput.value === 'teacher' || formProfileInput.value === 'student' ) {
      formProfileInput.classList.remove('wrong');
      validation.profile = true;
    } else {
      formProfileInput.classList.add('wrong');
      validation.profile = false;
    }
  }

  validateForm();
});

form.querySelectorAll('input').forEach(element => element.addEventListener('change', () => {
  validateForm();
}));

form.childNodes.forEach(element => {
  element.addEventListener('change', () => {
    const currentFormLs = JSON.parse(window.localStorage.getItem('peopleForm'));
     window.localStorage.setItem('peopleForm', JSON.stringify({
      ...currentFormLs,
      [element.name]: element.value,
    }));
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validation.name && validation.address && validation.profile)  {
    const newPerson = {
      name: formNameInput.value,
      address: formAddressInput.value,
      age: formAgeInput.value,
      id: formIdInput.value,
      profile: formProfileInput.value === 'teacher' ? PROFILE.TEACHER : PROFILE.STUDENT,
    }
    people.push(new CreatePerson(newPerson));
    renderHtml(people);
    window.localStorage.removeItem('peopleForm');
  }
});


formNameInput.addEventListener('input', ()=> {
  if (formNameInput.value.length < 3) {
    formNameInput.classList.add('wrong');
    validation.name = false;
  } else {
    formNameInput.classList.remove('wrong');
    validation.name = true;
  }
});

formAddressInput.addEventListener('input', ()=> {
  if (formAddressInput.value.length < 3) {
    formAddressInput.classList.add('wrong');
    validation.address = false;
  } else {
    formAddressInput.classList.remove('wrong');
    validation.address = true;
  }
});

formProfileInput.addEventListener('input', ()=> {
  if (formProfileInput.value === 'teacher' || formProfileInput.value === 'student' ) {
    formProfileInput.classList.remove('wrong');
    validation.profile = true;
  } else {
    formProfileInput.classList.add('wrong');
    validation.profile = false;
  }
});


const asyncElement = document.querySelector('.async');

const setText = (text, duration) => {
  if (duration) {
    return setTimeout(() => {
      asyncElement.innerHTML += `<div>${text}</div>`;
    }, duration);
  }
  return asyncElement.innerHTML += `<div>${text}</div>`;
}

setText('Pierwsza linia');
setText('Druga linia', 10000);
setText('Trzecia linia', 20000);
