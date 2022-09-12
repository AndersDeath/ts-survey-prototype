import { Survey } from './survey/survey';
import { Question, Answer } from './survey/data';
import $ from 'jquery';
import 'styles/app.scss';
import './vendor';
import { testBuilder } from './testBuilder';

class App {
  public testJson: any;
  public stack: Question[] = [];
  constructor() {
    console.log('App is ready');
    this.init();
  }

  public init() {
    this.testJson = testBuilder();
    // console.log(testBuilder())
    this.magic(new Survey(testBuilder()));
  }

  private magic(survey: Survey) {
    // console.log(survey);
    // console.log(survey.getFirst());
    // console.log(survey.findById(3));
    const next = survey.nextByAnswer(6);
    const next2 = survey.nextByQuestion(2);
    // console.log(next);
    // console.log(next2);
  }

  getId() {
    return window.crypto.randomUUID();
  }
}

function stringToDom(str: string) {
  const el = document.createElement('span');
  el.innerHTML = str;
  return el.firstElementChild;
}

function card(str: string) {
  return  `<div class="card" style="width: 200px;">${str}</div>`;
}

function openQuestion(question) {
  const div = `<label for="${question.id}">${question.text}</label>
  <textarea class="form-control" id="question${question.id}" rows="3"></textarea>`;
  return stringToDom(card(div));
}

function radioQuestion(question) {

  let div = `<p>${question.text}</p>`;

  question.answerGroup.forEach((e) => {
    div += `<span class="form-check">
    <input name="question${question.id}" value="${e.text}" id="${e.id}" type="radio" class="form-check-input">
    <label for="${e.id}" class="form-check-label">${e.text}</label>
  </span>`
  });
  return stringToDom(card(div));
}
const app = new App();

const firstQuestion = app.testJson[1];

function buildQuestion(question) {
  let output = {
    element: null,
    question
  }
  switch (question.type) {
    case 'textarea':
      output.element = openQuestion(question)
      break;
    case 'radio':
      output.element = radioQuestion(question)
    break;
  }
  return output;
}

const el = buildQuestion(firstQuestion);

const button = stringToDom(`<button>ok</button>`);
button.addEventListener('click', (event)=> {
  if(el.question.type === 'radio') {
    const elements = document.querySelectorAll('[name="question' + el.question.id + '"]');
    let checkedRadio = Array.from(elements).find((radio) => radio['checked']);
    console.log(checkedRadio['id']);
  }
  if(el.question.type === 'textarea') {
    const element = document.querySelector('#question' + el.question.id);
    console.log(element['value'])
  }

});
document.querySelector('#application').appendChild(el.element);
document.querySelector('#application').appendChild(button);



// let str = JSON.stringify(app.testJson, undefined, 4);
// document.querySelector('#jsonMonitor').innerHTML = str;
