import { Question, Result, Answer } from './survey.model';
export class Survey {
  questions: Question[] = [];
  results: Answer[] = [];
  constructor(questions: any){
    this.questions = (() => {
      let res = [];
      questions?.forEach((e) => {
        res.push(new Question(e));
      })
      return res;
    })() || [];
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
      for (let q = 0; q < this.questions[index].answerGroup.length; q++) {
       if (this.questions[index].answerGroup[q].id === answerId) {
        return this.questions[index].answerGroup[q];
       }
      }
    }
    return null;
  }

  public updateAnswer(answer) {
    console.log(answer);
  }

  public updateQuestion(question) {
    console.log(question);
  }

  public nextByAnswer(answerId: number) {
    const answer = this.findAnswerById(answerId);
    return this.findById(answer.nextQuestionId);
  }

  public nextByQuestion(answerId: number) {
    return this.findById(answerId);
  }

  public count() {
    return this.questions.length;
  }

  public addResult(result: Answer) {
    this.results.push(result);
  }

  public getResults() {
    return this.results;
  }

  public get() {
    return this.questions;
  }
}
