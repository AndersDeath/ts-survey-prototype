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
    return window.crypto.randomUUID()
  }
}

function createInput(type: string, text: string, id: number = 0, name: string = '') {
  const input = document.createElement('input');
  if(name) {
    input.setAttribute('name', name);
  }
  if(id) {
    input.setAttribute('id', id.toString());
  }
  input.setAttribute('type', type);
  const label = document.createElement('label');
  label.setAttribute('for', id.toString());
  label.innerHTML = text;
  const span = document.createElement('span');
  span.classList.add('form-check');

  input.classList.add('form-check-input')
  label.classList.add('form-check-label')
  span.appendChild(input);
  span.appendChild(label);

  return span;

}

function radioQuestion(question: Question) {
  console.log(question);
  const div = document.createElement('div');
  div.classList.add('card');
  div.style.width='200px';
  const p = document.createElement('p');
  p.innerHTML = question.text;
  div.appendChild(p)
  const answers = [];
  question.answers.forEach((e) => {
    div.appendChild(createInput('radio', e.text, e.id, 'question' + question.id));
  });
  return div;
}

function openQuestion() {

}
const app = new App();


document.querySelector('#application').appendChild(radioQuestion(app.testJson[0]));

// let str = JSON.stringify(app.testJson, undefined, 4);
// document.querySelector('#jsonMonitor').innerHTML = str;
