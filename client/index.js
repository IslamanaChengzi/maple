import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../app/store/configureStore'
import App from '../app/containers/App'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('maple')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)