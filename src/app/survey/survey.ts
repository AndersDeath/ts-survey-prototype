import { Question, Result, Answer } from './data';
export class Survey {
  questions: Question[] = [];
  results: Result[] = [];
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
    const answer = this.findAnswerById(answerId);
    return this.findById(answer.nextQuestionId);
  }

  public nextByQuestion(answerId: number) {
    return this.findById(answerId);
  }

  public count() {
    return this.questions.length;
  }

  public addResult(result: Result) {
    this.results.push(result);
  }

  public getResults() {
    return this.results;
  }
}
