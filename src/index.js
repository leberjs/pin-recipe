import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

require('./app.scss')
require('./utils/pinSDK')

ReactDOM.render(<App />, document.getElementById('root'))
