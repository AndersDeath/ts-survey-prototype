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

function createInput(type: string, name: string = '', id: string = '') {
  const input = document.createElement('input');
  if(name) {
    input.setAttribute('name', name);
  }
  if(id) {
    input.setAttribute('id', id);
  }
  input.setAttribute('type', type);
  return input;

}

function radioQuestion(question: Question) {
  console.log(question);
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML = question.text;
  div.appendChild(p)
  const answers = [];
  question.answers.forEach((e) => {
    div.appendChild(createInput('radio'));
  });
  return div;
}

function openQuestion() {

}
const app = new App();


document.querySelector('#application').appendChild(radioQuestion(app.testJson[0]));

let str = JSON.stringify(app.testJson, undefined, 4);
document.querySelector('#jsonMonitor').innerHTML = str;
