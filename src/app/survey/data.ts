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
  public answers: Answer[];
  public nextQuestionId: number;
  constructor(json) {
    this.id = json['id'] || 0;
    this.text = json['text'] || 'no text';
    this.sort = json['sort'] || 1;
    this.answers = json['answers'] || [];
    this.type = json['type'] || 'textarea';
    this.nextQuestionId = json['nextQuestionId'] || null;
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
