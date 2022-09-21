import { Question, Result, Answer, QUESTION_TYPES } from './survey.model';
export class Survey {
  questions: Question[] = [];
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
    return this.findById(answer.nextId);
  }

  public nextByQuestion(answerId: number) {
    return this.findById(answerId);
  }

  public count() {
    return this.questions.length;
  }


  public getResults() {
    const results = [];
    this.questions.forEach((e: Question) => {
      if(e.type === QUESTION_TYPES.TEXTAREA) {
        results.push({
          text: e.text,
          answer: e.textAnswer
        });
      }
      if(e.type === QUESTION_TYPES.RADIO ) {
        results.push({
          text: e.text,
          answer: (() => {
            let temp: Answer[] = e.answerGroup.filter((a: Answer) => {
              return a.checked;
            });
            return temp[0].text
          })()
        });
      }
      if(e.type === QUESTION_TYPES.CHECKBOX) {
        results.push({
          text: e.text,
          answer: (() => {
            const temp = [];
            e.answerGroup.forEach((a: Answer) => {
              if(a.checked) {
                temp.push(a.text);
              }
            });
            return temp;
          })()
        });
      }
    });
    return results;
  }

  public get() {
    return this.questions;
  }
}
