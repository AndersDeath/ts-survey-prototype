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
    document.querySelector('#test').addEventListener('click', () => {
      console.log('click to test');
    });
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


function openQuestion() {}

function radioQuestion(question) {

  let div = `<div class="card" style="width: 200px;">
  <p>${question.text}</p>`;

  question.answers.forEach((e) => {
    div += `<span class="form-check">
    <input name="question${question.id}" id="${e.id}" type="radio" class="form-check-input">
    <label for="${e.id}" class="form-check-label">${e.text}</label>
  </span>`
  });
  div += `</div>`;

  const el = document.createElement('span');
  el.innerHTML = div;
  return el.firstElementChild
}
const app = new App();


document.querySelector('#application').appendChild(radioQuestion(app.testJson[0]));

// let str = JSON.stringify(app.testJson, undefined, 4);
// document.querySelector('#jsonMonitor').innerHTML = str;
