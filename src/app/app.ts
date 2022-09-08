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
    console.log(testBuilder())
    this.magic(new Survey(testBuilder()));
  }

  private magic(survey: Survey) {
    // console.log(survey);
    // console.log(survey.getFirst());
    // console.log(survey.findById(3));
    const next = survey.nextByAnswer(6);
    console.log(next);
  }



  getId() {
    return window.crypto.randomUUID()
  }
}

const app = new App();

let str = JSON.stringify(app.testJson, undefined, 4);
console.log(str)
document.querySelector('#jsonMonitor').innerHTML = str;
