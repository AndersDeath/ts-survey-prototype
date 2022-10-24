
export interface AnswerModel {
  id: number;
  text: string;
  sort?: number;
  parentId: number;
  nextId: number;
  checked?: boolean;
}


export interface QuestionModel {
  id: number;
  text: string;
  sort?: number;
  answerGroup?: AnswerModel[];
  type: string;
  nextId: number;
  parentId: number;
  textAnswer?: string;
  numberAnswer?: number;
  base64Answer?: string;
  scoreInterval?: number[];
  required?: boolean;
}
/**
 * Question types
 */
export enum QUESTION_TYPES {
  TEXTAREA = "TEXTAREA",
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT',
  SCORE = 'SCORE',
  TEXT_PANEL = 'TEXT_PANEL',
  FILE_UPLOAD = 'FILE_UPLOAD'
}

/**
 * Answer Entity
 */
export class Answer {
  /**
   * Identificator, should be unique
   */
  public id: number;
  /**
   * Answer text
   */
  public text: string;
  /**
   * Sort identificator
   */
  public sort: number;
  /**
   * Parent question identificator
   */
  public parentId: number;
  /**
   * Next question identificator
   */
  public nextId: number;
  /**
   * If this answer checked or selected
   */
  public checked: boolean;
  /**
   *  Class constructor
   * @param json some data
   */
  constructor(json: AnswerModel) {
    this.id = json.id || 0;
    this.text = json.text || 'no text';
    this.sort = json.sort || 1;
    this.parentId = json['parentId'] || 0;
    this.nextId = json['nextId'] || null;
    this.checked = json['checked'] || false;
  }
}

/**
 * Question entity
 */
export class Question {
  /**
   * Question identificator, should be unique
   */
  public id: number;
  /**
   * Question text, it could be html text
   */
  public text: string;
  /**
   * Sort identificator
   */
  public sort: number;
  /**
   * Type if question
   */
  public type: string; // TODO: change this type from string to QUESTION_TYPE enum
  /**
   * Answer group, it should be filled if we set up radio, checkbox or select question type
   */
  public answerGroup: Answer[];
  /**
   * It's type of answer is filling when user answers to free text quesion, like textarea
   */
  public textAnswer: string;
  /**
   * Next question identificator, it is for questions that do not have answerGroup
   */
  public nextId: number;
  /**
   * Parent question identificator
   */
  public parentId: number;
  /**
   *  It's type of answer is filling when user answers to score question type
   */
  public numberAnswer: number;
  /**
   *  It's type of answer is filling when user uploads a photo
   */
  public base64Answer: string;
  /**
   * When you set up score answer, you should set array with lower and highter scores
   */
  public scoreInterval: number[];
  /**
   * is this question required or not
   */
  public required: boolean;

  constructor(json: QuestionModel) {
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
    this.type = json['type'] || QUESTION_TYPES.TEXTAREA;
    this.nextId = json['nextId'] || null;
    this.parentId = json['parentId'] || null;
    this.textAnswer = json['textAnswer'] || '';
    this.numberAnswer = json['numberAnswer'] || null;
    this.base64Answer = json['base64Answer'] || '';
    this.scoreInterval = json['scoreInterval'] || [];
    this.required = json['required'] || false;
  }
}

/**
 * This is class for results !IMPORTANT! It is not used. It should be rewrited
 */
export class Result {
  text: string;
  answers: string[];

  constructor(json) {
    this.text = json['text'] || 'no text';
    this.answers = json['answers'] || [];
  }
}
