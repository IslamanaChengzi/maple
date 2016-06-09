import { MAPLE } from '../constants/ActionTypes';

const initialState = {
  name: 'maple'
};

export default function frame_name(state = initialState, action = {}) {
  switch (action.type) {
    case MAPLE:
      return {
        name: action.name
      };
    default:
      return state;
  }
}