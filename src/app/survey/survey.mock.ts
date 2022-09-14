import { Question, Answer } from './survey.model';


export function surveyMock(): Question[] {

  const firstQuestion = () => {

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

    return new Question({
      id: 1,
      text: 'first question',
      sort: 1,
      answerGroup: [firstAnswer, secondAnswer],
      type: 'radio',
      nextQuestionId: 2
    });
  }

  const secondQuestion = () => {
    return new Question({
      id: 2,
      text: 'second question',
      sort: 1,
      type: 'textarea',
      nextQuestionId: 3
    });
  }

  const thirdQuestion = () => {
    return new Question({
      id: 3,
      text: 'third question',
      sort: 1,
      type: 'textarea',
      nextQuestionId: 4
    });
  }
  const fourthQuestion = () => {

    const thirdAnswer = new Answer({
      id: 7,
      text: 'third answer',
      sort: 2,
      parentId: 1,
      nextQuestionId: 5
    });

    const fourthAnswer = new Answer({
      id: 7,
      text: 'fourth answer',
      sort: 2,
      parentId: 1,
      nextQuestionId: 5
    });

    return new Question({
      id: 4,
      text: 'fourth question',
      sort: 1,
      type: 'radio',
      answerGroup: [thirdAnswer, fourthAnswer],
    });
  }


  const multipleAnswerQuestion = () => {

    const answer1 = new Answer({
      id: 10,
      text: 'Multiple answers question ANSWER 1',
      sort: 1,
      parentId: 5,
      nextQuestionId: null
    });

    const answer2 = new Answer({
      id: 11,
      text: 'Multiple answers question ANSWER 2',
      sort: 2,
      parentId: 5,
      nextQuestionId: null
    });


    const answer3 = new Answer({
      id: 12,
      text: 'Multiple answers question ANSWER 3',
      sort: 3,
      parentId: 5,
      nextQuestionId: null
    });

    const answer4 = new Answer({
      id: 13,
      text: 'Multiple answers question ANSWER 4',
      sort: 4,
      parentId: 5,
      nextQuestionId: null
    });

    return new Question({
      id: 5,
      text: 'Multiple answers question',
      sort: 1,
      type: 'checkbox',
      answerGroup: [
        answer1,
        answer2,
        answer3,
        answer4
      ],
    });
  }

  return [
    firstQuestion(),
    secondQuestion(),
    thirdQuestion(),
    fourthQuestion(),
    multipleAnswerQuestion()
  ]
}


export function surveyMockString() {
  return JSON.stringify(surveyMock(), null, 2);
}
