// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
      this.age = attributes.age;
      this.name = attributes.name;
      this.location = attributes.location;
    }
    speak() {
      return `Hello, my name is ${this.name} and I am from ${this.location}`;
    }
  }

class Student extends Person {
    constructor(attributes) {
      super(attributes);
      this.previousBackground = attributes.previousBackground;
      this.className = attributes.className;
      this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        console.log(` ${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${attributes.name} has submitted a PR for ${subject}`);
      }
    sprintChallenge(subject) {
        console.log(`${attributes.name} has begun a sorint challenge on ${subject}`);
      }
  }

class Instructor extends Person {
    constructor(attributes) {
      super(attributes);
      this.specialty = attributes.specialty;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade(student, subject) {
        console.log(`${attributes.name} recieves a perfect score on ${subject}`);
      }
  }

class ProjectManagers extends Instructor {
    constructor(attributes) {
      super(attributes);
      this.gradClassName = attributes.gradClassName;
      this.favInstructor = attributes.favInstructor;
    }
    standUp(slack) {
        console.log(`${name} announces to ${slack}, @slack standy times!`);
    }
    debugsCode(object, subject) {
        console.log(`${name} debugs ${attributes.name} 's code on ${subject}`);
      }
  }

  const Brit = new Instructor ({
      name: 'Brit',
      age: 32,
      location: 'Canada',
      favLanguage: 'JavaScript',
      specialty: 'Front-end',
      catchPhrase: `Bad News Bear :(`
  });
  const Jeremy = new Student ({
    name: 'Jeremy',
    age: 23,
    location: 'Durham, NC',
    previousBackground: 'History',
    className: 'WEB23',
    favSubjects: ['Back-end dev', 'Python', 'JavaScript']
});
const Stephanie = new Student ({
    name: 'Stephanie',
    age: 23,
    location: 'Durham, NC',
    previousBackground: 'Interior Design',
    className: 'WEB23',
    favSubjects: ['Design Software', 'Paint types', 'Flooring Types']
});
const Kim = new Student ({
    name: 'Kim',
    age: 17,
    location: 'Frederick, MD',
    previousBackground: 'none',
    className: 'WEB23',
    favSubjects: ['Sports', 'Math', 'Science']
});

const Sophie = new Student ({
    name: 'Sophie',
    age: 14,
    location: 'Durham, NC',
    previousBackground: 'none',
    className: 'WEB23',
    favSubjects: ['Sports', 'Language', 'History']
});

const Carlos = new ProjectManager ({
    name: 'Carlos',
    age: 24,
    location: 'Chicago',
    previousBackground: 'UX/UI',
    className: 'WEB23',
    favSubjects: ['Sports', 'Reading', 'Math']
});
   




