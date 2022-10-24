import { Question, Answer, QUESTION_TYPES } from './survey.model';


export function oldSurveyMock(): Question[] {

  const firstQuestion = () => {

    const firstAnswer = new Answer({
      id: 5,
      text: 'first answer',
      sort: 1,
      parentId: 1,
      nextId: 2
    });

    const secondAnswer = new Answer({
      id: 6,
      text: 'second answer',
      sort: 2,
      parentId: 1,
      nextId: 3
    });

    return new Question({
      id: 1,
      text: 'first question',
      sort: 1,
      answerGroup: [firstAnswer, secondAnswer],
      type: QUESTION_TYPES.RADIO,
      nextId: 2,
      parentId: 3
    });
  }

  const secondQuestion = () => {
    return new Question({
      id: 2,
      text: 'second question',
      sort: 1,
      type: QUESTION_TYPES.TEXTAREA,
      nextId: 3,
      parentId: 1
    });
  }

  const thirdQuestion = () => {
    return new Question({
      id: 3,
      text: 'third question',
      sort: 1,
      type: QUESTION_TYPES.TEXTAREA,
      nextId: 4,
      parentId: 2
    });
  }

  const fourthQuestion = () => {

    const thirdAnswer = new Answer({
      id: 7,
      text: 'third answer',
      sort: 2,
      parentId: 3,
      nextId: 5
    });

    const fourthAnswer = new Answer({
      id: 8,
      text: 'fourth answer',
      sort: 2,
      parentId: 3,
      nextId: 5
    });

    return new Question({
      id: 4,
      text: 'fourth question',
      sort: 1,
      type: QUESTION_TYPES.RADIO,
      answerGroup: [thirdAnswer, fourthAnswer],
      parentId: 3,
      nextId: null
    });
  }

  const multipleAnswerQuestion = () => {

    const answer1 = new Answer({
      id: 10,
      text: 'Multiple answers question ANSWER 1',
      sort: 1,
      parentId: 5,
      nextId: null
    });

    const answer2 = new Answer({
      id: 11,
      text: 'Multiple answers question ANSWER 2',
      sort: 2,
      parentId: 5,
      nextId: null
    });


    const answer3 = new Answer({
      id: 12,
      text: 'Multiple answers question ANSWER 3',
      sort: 3,
      parentId: 5,
      nextId: null
    });

    const answer4 = new Answer({
      id: 13,
      text: 'Multiple answers question ANSWER 4',
      sort: 4,
      parentId: 5,
      nextId: null
    });

    return new Question({
      id: 5,
      text: 'Multiple answers question',
      sort: 1,
      type: QUESTION_TYPES.CHECKBOX,
      parentId: 4,
      nextId: null,
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
  ];
}

export function surveyMock(): Question[] {


  // -------- SELECT
  const countryQuestion = () => {


    const englandAnswer = new Answer({
      id: 1,
      text: 'Great Britain',
      sort: 1,
      parentId: null,
      nextId: 2
    });

    const franceAnswer = new Answer({
      id: 2,
      text: 'France',
      sort: 2,
      parentId: null,
      nextId: 3
    });

    return new Question({
      id: 1,
      text: 'Where are you from?',
      sort: 1,
      type: QUESTION_TYPES.SELECT,
      answerGroup: [englandAnswer, franceAnswer],
      nextId: 2,
      parentId: null,
      required: true
    })
  }

  // -------- RADIO
  const haveYouSkydived = () => {
    const firstAnswer = new Answer({
      id: 1,
      text: 'Yes',
      sort: 1,
      parentId: 1,
      nextId: 3
    });

    const secondAnswer = new Answer({
      id: 2,
      text: 'No',
      sort: 2,
      parentId: 1,
      nextId: 4
    });

    return new Question({
      id: 2,
      text: 'Have you ever skydived?',
      sort: 1,
      answerGroup: [firstAnswer, secondAnswer],
      type: QUESTION_TYPES.RADIO,
      nextId: 2,
      parentId: 1,
      required: true
    });
  }

  // -------- SCORE
  const didYouLikeSkydiving = () => {
    return new Question({
      id: 3,
      text: 'Did you like it? score it from 0 to 5, where 0 is don’t like, 5 is absolutely amazing',
      sort: 1,
      type: QUESTION_TYPES.SCORE,
      nextId: 5,
      parentId: 2,
      scoreInterval: [5, 10],
      required: true
    });
  }

  // -------- RADIO
  const doYouWantToTry = () => {
    const firstAnswer = new Answer({
      id: 5,
      text: 'Yes',
      sort: 1,
      parentId: 2,
      nextId:  5
    });

    const secondAnswer = new Answer({
      id: 6,
      text: 'No',
      sort: 2,
      parentId: 2,
      nextId: 6
    });

    return new Question({
      id: 4,
      text: 'Do you want to try?',
      sort: 1,
      answerGroup: [firstAnswer, secondAnswer],
      type: QUESTION_TYPES.RADIO,
      nextId: null,
      parentId: 2,
      required: true
    });
  }

  // -------- TEXTAREA
  const whatDoYouWantToTell = () => {
    return new Question({
      id: 5,
      text: 'What do you whant to tell others who wants to skydive?',
      sort: 1,
      type: QUESTION_TYPES.TEXTAREA,
      nextId: 7,
      parentId: null,
      required: true
    });
  }

  // -------- CHECKBOX
  const whyDontYouWant = () => {
    const answer1 = new Answer({
      id: 7,
      text: "it's too scary",
      sort: 1,
      parentId: 4,
      nextId: 7
    });

    const answer2 = new Answer({
      id: 8,
      text: "it’s too dangerous",
      sort: 2,
      parentId: 4,
      nextId: 7
    });


    const answer3 = new Answer({
      id: 9,
      text: "it’s to expensive",
      sort: 3,
      parentId: 4,
      nextId: 7
    });

    return new Question({
      id: 6,
      text: 'Why  do not you want to do it? You can select several variants',
      sort: 1,
      type: QUESTION_TYPES.CHECKBOX,
      parentId: 4,
      nextId: 7,
      answerGroup: [
        answer1,
        answer2,
        answer3
      ],
      required: true
    });
  }

  // -------- TEXT_PANEL
  const thanksPanel = () => {
    return new Question({
      id: 7,
      text: `<h1>Thank you mister</h1><p>I won't forget you</p>`,
      sort: 1,
      type: QUESTION_TYPES.TEXT_PANEL,
      nextId: null,
      parentId: null
    });
  }
  return [
    countryQuestion(),
    haveYouSkydived(),
    didYouLikeSkydiving(),
    doYouWantToTry(),
    whatDoYouWantToTell(),
    whyDontYouWant(),
    thanksPanel()
  ]
}

export function radioSequenceDebugSurveyMock(): Question[] {
  // --------
  const firstYesNo = () => {
    const firstAnswer = new Answer({
      id: 1,
      text: 'Yes',
      sort: 1,
      parentId: 1,
      nextId: 2
    });

    const secondAnswer = new Answer({
      id: 2,
      text: 'No',
      sort: 2,
      parentId: 1,
      nextId: 2
    });

    return new Question({
      id: 1,
      text: 'First Yes No',
      sort: 1,
      answerGroup: [firstAnswer, secondAnswer],
      type: QUESTION_TYPES.RADIO,
      nextId: 2,
      parentId: null
    });
  }

    // --------
    const secondYesNo = () => {
      const firstAnswer = new Answer({
        id: 3,
        text: 'Yes',
        sort: 1,
        parentId: 1,
        nextId: null
      });

      const secondAnswer = new Answer({
        id: 4,
        text: 'No',
        sort: 2,
        parentId: 1,
        nextId: null
      });

      return new Question({
        id: 2,
        text: 'Second Yes No',
        sort: 1,
        answerGroup: [firstAnswer, secondAnswer],
        type: QUESTION_TYPES.RADIO,
        nextId: null,
        parentId: 1
      });
    }


  return [
    firstYesNo(),
    secondYesNo()
  ]
}

export function fileUploadSurveyMock(): Question[] {
  const fileUploadQuestion = () => {
      return new Question({
        id: 5,
        text: 'What do you whant to tell others who wants to skydive?',
        sort: 1,
        type: QUESTION_TYPES.FILE_UPLOAD,
        nextId: null,
        parentId: null
      });
  }

  return [fileUploadQuestion()];
}


// ----- string versions

export function fileUploadSurveyMockString() {
  return JSON.stringify(fileUploadSurveyMock(), null, 2);

}

export function radioSequenceDebugSurveyMocString() {
  return JSON.stringify(radioSequenceDebugSurveyMock(), null, 2);
}

export function oldSurveyMockString() {
  return JSON.stringify(oldSurveyMock(), null, 2);
}


export function surveyMockString() {
  return JSON.stringify(surveyMock(), null, 2);
}
