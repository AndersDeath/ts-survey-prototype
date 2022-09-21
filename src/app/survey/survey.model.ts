export enum QUESTION_TYPES {
  TEXTAREA = "TEXTAREA",
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX'
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
