import * as types from '../constants/ActionTypes'

export function demoTest(text = 'test') {
  return { type: types.DEMO_TEST, text };
}
export function locales(lng = 'en') {
  return { type: types.LOCALES, lng };
}