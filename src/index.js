import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

require('./app.scss')
require('./api/PDK')

ReactDOM.render(<App />, document.getElementById('root'))
