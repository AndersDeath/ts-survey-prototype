export enum QUESTION_TYPES {
  TEXTAREA = "TEXTAREA",
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT',
  SCORE = 'SCORE',
  TEXT_PANEL = 'TEXT_PANEL',
  FILE_UPLOAD = 'FILE_UPLOAD'
}

export class Answer {
  public id: number;
  public text: string;
  public sort: number;
  public parentId: number;
  public nextId: number;
  public checked: boolean;
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.sort = json['sort'] || 1;
    this.parentId = json['parentId'] || 0;
    this.nextId = json['nextId'] || null;
    this.checked = json['checked'] || false;
  }
}

export class Question {
  public id: number;
  public text: string;
  public sort: number;
  public type: string;
  public answerGroup: Answer[];
  public textAnswer: string;
  public nextId: number;
  public parentId: number;
  public numberAnswer: number;
  public base64Answer: string;
  public scoreInterval: number[];
  public required: boolean;

  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.sort = json['sort'] || 1;
    this.answerGroup = (() => {
      let res = [];
      json['answerGroup']?.forEach((e) => {
        res.push(new Answer(e));
      })
      return res;
    })() || [];
    this.type = json['type'] || 'textarea';
    this.nextId = json['nextId'] || null;
    this.parentId = json['parentId'] || null;
    this.textAnswer = json['textAnswer'] || '';
    this.numberAnswer = json['numberAnswer'] || null;
    this.base64Answer = json['base64Answer'] || '';
    this.scoreInterval = json['scoreInterval'] || [];
    this.required = json['required'] || false;
  }
}

export class Result {
  text: string;
  answers: string[];

  constructor(json) {
    this.text = json['text'] || 'no text';
    this.answers = json['answers'] || [];
  }
}
