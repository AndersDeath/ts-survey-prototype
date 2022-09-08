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
  questions: Question[] = [];
  constructor(questions: Question[]){
    this.questions = questions;
  }

  public getFirst(): Question {
    return this.questions[0];
  }

  public findById(id: number): Question | null {
    for (let index = 0; index < this.questions.length; index++) {
      if(this.questions[index].id === id) {
        return this.questions[index];
      }
    }
    return null;
  }

  public findAnswerById(answerId: number): Answer | null {
    for (let index = 0; index < this.questions.length; index++) {
      for (let q = 0; q < this.questions[index].answers.length; q++) {
       if (this.questions[index].answers[q].id === answerId) {
        return this.questions[index].answers[q];
       }
      }
    }
    return null;
  }

  public nextByAnswer(answerId: number) {
    // console.log(questionId);
    // console.log(answerId)
    // const question = this.findById(questionId);
    const answer = this.findAnswerById(answerId);
    console.log(answer)
    // console.log(answer.nextQuestionId);
    // console.log(this.findById(answer.nextQuestionId))
    return this.findById(answer.nextQuestionId);
  }

  public count() {
    return this.questions.length;
  }
}


function testBuilder(): Question[] {

  const firstAnswer = new Answer({
    id: 5,
    text: 'first answer',
    sort: 1,
    parentId: 1,
    nextQuestionId: 2
  });
  const secondAnswer = new Answer({
    id: 6,
    text: 'second answer',
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
    id: 3,
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
