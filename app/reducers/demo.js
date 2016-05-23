import { DEMO_TEST } from '../constants/ActionTypes';

const initialState = [
  {
    text: 'DEMO'
  }
];

export default function demo(state = initialState, action = {}) {
  switch (action.type) {
    case DEMO_TEST:
      return [
        {
          test: action.text
        }
      ];
    default:
      return state;
  }
}