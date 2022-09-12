export class Answer {
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
    this.nextQuestionId = json['nextQuestionId'] || null;
  }
}


export class Question {
  public id: number;
  public text: string;
  public sort: number;
  public type: string;
  public answerGroup: Answer[];
  public textAnswer: string;
  public nextQuestionId: number;
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.sort = json['sort'] || 1;
    this.answerGroup = json['answerGroup'] || [];
    this.type = json['type'] || 'textarea';
    this.nextQuestionId = json['nextQuestionId'] || null;
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
