import { Question, Answer } from './survey/data';


export function testBuilder(): Question[] {

  const firstAnswer = new Answer({
    id: 5,
    text: 'first answer',
    sort: 1,
    parentId: 1,
    nextQuestionId: 2
  });
  const secondAnswer = new Answer({
    id: 6,
    text: 'second answer',
    sort: 2,
    parentId: 1,
    nextQuestionId: 3
  });


  const firstQuestion = new Question({
    id: 1,
    text: 'first question',
    sort: 1,
    answers: [firstAnswer, secondAnswer],
    type: 'radio'
  });

  const secondQuestion = new Question({
    id: 2,
    text: 'second question',
    sort: 1,
    answers: []
  });

  const thirdQuestion = new Question({
    id: 3,
    text: 'third question',
    sort: 1,
    answers: []
  });

  return [
    firstQuestion,
    secondQuestion,
    thirdQuestion
  ]
}
