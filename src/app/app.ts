import $ from 'jquery';
import 'styles/app.scss';
import './vendor';

class Answer {
  public id: number;
  public text: string;
  public weight: number;
  public parentId: number;
  public nextQuesionId: number;
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.weight = json['weight'] || 1;
    this.parentId = json['parentId'] || 0;
    this.nextQuesionId = json['nextQuesionId'] || 0;
  }
}


class Question {
  public id: number;
  public text: string;
  public weight: number;
  public answers: Answer[];
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.weight = json['weight'] || 1;
    this.answers = json['answer'] || [];
  }
}


class App {
  constructor() {
    console.log('App is ready');
    this.init();
  }

  public init() {
    document.querySelector('#test').addEventListener('click', () => {
      console.log('click to test');
    })
  }

}

new App();
