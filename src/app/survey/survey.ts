import { Question, Result, Answer, QUESTION_TYPES } from './survey.model';

/**
 * Suervey Entity class
 */
export class Survey {
  /**
   * Questions array
   */
  questions: Question[] = [];

  /**
   * Class constructor
   * @param questions questions array
   */
  constructor(questions: any){
    if(!questions.length) {
      throw new Error('Questions array is empty');
    }
    this.questions = (() => {
      let res = [];
      questions?.forEach((e) => {
        res.push(new Question(e));
      })
      return res;
    })() || [];
  }

  /**
   * Get first question
   * @returns first Question
   */
  public getFirst(): Question {
    return this.questions[0];
  }

  /**
   * Find question by id
   * @param id questionId
   * @returns question
   */
  public findById(id: number): Question | null {
    for (let index = 0; index < this.questions.length; index++) {
      if(this.questions[index].id === id) {
        return this.questions[index];
      }
    }
    return null;
  }

  /**
   * Find answer by id
   * @param answerId answerId
   * @returns answer
   */

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

  /**
   * Update answer
   * TODO: need to implement
   * @param answer answer that should be updates
   */
  public updateAnswer(answer) {
    console.log(answer);
  }

  /**
   * Update question
   * TODO: need to implement
   * @param answer Question that should be updates
   */
  public updateQuestion(question) {
    console.log(question);
  }

  /**
   * Find the next question by answer Id
   * @param answerId answerId
   * @returns question
   */
  public nextByAnswer(answerId: number) {
    const answer = this.findAnswerById(answerId);
    return this.findById(answer.nextId);
  }

  /**
   * Find the next question by question Id
   * @param questionId
   * @returns question
   */
  public nextByQuestion(questionId: number) {
    return this.findById(questionId);
  }

  /**
   * Return count of questions in the survey
   * @returns number
   */
  public count(): number {
    return this.questions.length;
  }

  /**
   * Get results of the survey !IMPORTANT! this method doesn't work and should be rewrited
   * TODO: rewrite it
   * @returns an array
   */
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

  /**
   * Get qeustions list
   * @returns questions array
   */
  public get() {
    return this.questions;
  }
}

/**
 * Builder for empty question
 * @param type question type
 * @returns new Question
 */
 export const createEmptyQuestion = (type: QUESTION_TYPES) => {
  return new Question({
    id: 0,
    text: '',
    nextId: null,
    parentId: null,
    type: type
  });
}


/**
 * Process next question in a survey
 * @param survey Current survey instance
 * @param currentQuestion Current question
 * @returns next Quesion of error
 */
export const processNextQuestion = (survey: Survey, currentQuestion: Question): Question => {
  let nextId = currentQuestion.nextId;
  if(currentQuestion.type === QUESTION_TYPES.RADIO) {
    currentQuestion.answerGroup.forEach((e: Answer) => {
      if(e.checked) {
        nextId = e.nextId;
      }
    })
  }
  if(nextId) {
    const parentId = currentQuestion.id;
    currentQuestion = survey.findById(nextId);
    currentQuestion.parentId = parentId;
    if(currentQuestion.answerGroup) {
      currentQuestion.answerGroup.map((e: Answer) => {
        e.parentId = parentId;
        return e;
      });
    }
    return currentQuestion;
  } else {
    alert('no more questions');
    console.log(survey.getResults());
  }
}

/**
 * Process previouse question in a survey
 * @param survey Current survey instance
 * @param currentQuestion Current question
 * @returns previouse qursion or error
 */

export const processPreviouseQuestion = (survey: Survey, currentQuestion: Question): Question => {
  let prevoiousId = currentQuestion.parentId;
  if(currentQuestion.type === QUESTION_TYPES.RADIO) {
    currentQuestion.answerGroup.forEach((e: Answer) => {
      if(e.checked) {
        prevoiousId = e.parentId;
      }
    })
  }

  if(prevoiousId) {
    currentQuestion = survey.findById(prevoiousId);
    return currentQuestion;
  } else {
    alert('no more questions');
    console.log(survey.getResults());
  }
}

/**
 * Very simple check of chain ingregrity. It checks only if next questoin exists.
 * @param survey current Suervey instance
 * @returns boolean
 */
export const chainIntegrityCheck = (survey: Survey): boolean => {
  let check = true
  survey.questions.forEach((question: Question) => {
    if(question.answerGroup.length) {
      question.answerGroup.forEach((e: Answer) => {
        if(e.nextId !== null && !survey.findById(e.nextId)) {
          check = false;
        }
      });
    } else {
      if(question.nextId !== null && !survey.findById(question.nextId)) {
        check = false;
      }
    }

  });

  return check;
}
