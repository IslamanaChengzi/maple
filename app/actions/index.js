import * as types from '../constants/ActionTypes'

export function maple(name = 'maple') {
  return { type: types.MAPLE, name };
}
export function locales(lng = 'en') {
  return { type: types.LOCALES, lng };
}