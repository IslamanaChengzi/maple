import { LOCALES } from '../constants/ActionTypes';

const initialState = {
  lng: 'en'
};

export default function locales(state = initialState, action = {}) {
  switch (action.type) {
    case LOCALES:
      return [
        {
          lng: action.lng
        }
      ];
    default:
      return state;
  }
}
