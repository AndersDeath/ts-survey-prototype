import $ from 'jquery';
import 'styles/app.scss';
import './vendor';


class Answer {
  public id: number;
  public text: string;
  public sort: number;
  public parentId: number;
  public nextQuestionId: number;
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.sort = json['sort'] || 1;
    this.parentId = json['parentId'] || 0;
    this.nextQuestionId = json['nextQuestionId'] || 0;
  }
}


class Question {
  public id: number;
  public text: string;
  public sort: number;
  public type: string;
  public answers: Answer[];
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.sort = json['sort'] || 1;
    this.answers = json['answers'] || [];
    this.type = json['type'] || 'textarea';

  }
}

class Survey {
  questions: Question[] = []
  constructor(questions: Question[]){
    this.questions = questions;
  }

  public getFirst(): Question {
    return this.questions[0];
  }

  public findById(id: number): Question {
    return this.questions.find((e: Question) => {
      return e.id = id;
    })
  }

  public count() {
    return this.questions.length;
  }
}


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
    this.testJson = this.testBuilder();
    this.magic(new Survey(this.testBuilder()));
  }

  private magic(survey: Survey) {
    console.log(survey);
    console.log(survey.getFirst());
    console.log(survey.findById(3));
  }

  private testBuilder(): Question[] {

    const firstAnswer = new Answer({
      id: 1,
      text: 'first answer',
      sort: 1,
      parentId: 1,
      nextQuestionId: 2
    });
    const secondAnswer = new Answer({
      id: 1,
      text: 'first answer',
      sort: 2,
      parentId: 1,
      nextQuestionId: 3
    });


    const firstQuestion = new Question({
      id: 1,
      text: 'first question',
      sort: 1,
      answers: [firstAnswer, secondAnswer],
      type: 'radio'
    });

    const secondQuestion = new Question({
      id: 2,
      text: 'second question',
      sort: 1,
      answers: []
    });

    const thirdQuestion = new Question({
      id: 1,
      text: 'third question',
      sort: 1,
      answers: []
    });

    return [
      firstQuestion,
      secondQuestion,
      thirdQuestion
    ]
  }

  getId() {
    return window.crypto.randomUUID()
  }
}

const app = new App();

let str = JSON.stringify(app.testJson, undefined, 4);
console.log(str)
document.querySelector('#jsonMonitor').innerHTML = str;
