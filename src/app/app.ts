import $ from 'jquery';
import 'styles/app.scss';
import './vendor';

class Answer {
  public id: number;
  public text: string;
  public weight: number;
  public parentId: number;
  public nextQuestionId: number;
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.weight = json['weight'] || 1;
    this.parentId = json['parentId'] || 0;
    this.nextQuestionId = json['nextQuestionId'] || 0;
  }
}


class Question {
  public id: number;
  public text: string;
  public weight: number;
  public type: string;
  public answers: Answer[];
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.weight = json['weight'] || 1;
    this.answers = json['answers'] || [];
    this.type = json['type'] || 'textarea';

  }
}


class App {
  public testJson: any;
  constructor() {
    console.log('App is ready');
    this.init();
  }

  public init() {
    document.querySelector('#test').addEventListener('click', () => {
      console.log('click to test');
    });
    this.testJson = this.testBuilder();
  }

  testBuilder() {

    const firstAnswer = new Answer({
      id: 1,
      text: 'first answer',
      weight: 1,
      parentId: 1,
      nextQuestionId: 2
    });
    const secondAnswer = new Answer({
      id: 1,
      text: 'first answer',
      weight: 2,
      parentId: 1,
      nextQuestionId: 3
    });


    const firstQuestion = new Question({
      id: 1,
      text: 'first question',
      weight: 1,
      answers: [firstAnswer, secondAnswer]
    });

    const secondQuestion = new Question({
      id: 2,
      text: 'second question',
      weight: 1,
      answers: []
    });

    const thirdQuestion = new Question({
      id: 1,
      text: 'third question',
      weight: 1,
      answers: []
    });

    return [
      firstQuestion,
      secondQuestion,
      thirdQuestion
    ]
  }

}

const app = new App();

let str = JSON.stringify(app.testJson, undefined, 4);
console.log(str)
document.querySelector('#jsonMonitor').innerHTML = str;
