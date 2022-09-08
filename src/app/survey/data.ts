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
    this.nextQuestionId = json['nextQuestionId'] || 0;
  }
}


export class Question {
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

export class Result {
  text: string;
  answers: string[];

  constructor(json) {
    this.text = json['text'] || 'no text';
    this.answers = json['answers'] || [];
  }
}
