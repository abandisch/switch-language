import React, { Component } from 'react'
import Language from './Language'
import { connect } from 'react-redux'
import logo from './logo.svg'
import languages from './languages'
import { setLanguage } from './redux/actions'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.onSwitchLanguage = this.onSwitchLanguage.bind(this)
  }

  onSwitchLanguage (langCode) {
    const { onSetLanguage } = this.props
    onSetLanguage(langCode)
  }

  render () {
    const { language: langCode } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>The selected language is: {langCode.toUpperCase()}</p>
          <p>
            <strong>hello</strong>: {languages[langCode].hello}<br />
            <strong>goodbye</strong>: {languages[langCode].goodbye}<br />
            <strong>hotel</strong>: {languages[langCode].hotel}<br />
          </p>
          <div>
            <button
              style={{ padding: 10, fontSize: 16, marginRight: 10 }}
              onClick={() => this.onSwitchLanguage('it')}
            >Switch to Italian</button>

            <button
              style={{ padding: 10, fontSize: 16 }}
              onClick={() => this.onSwitchLanguage('en')}
            >Switch to English</button>
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({ someProp: 'fake prop' })
const mapDispatchToProps = dispatch => ({ onSetLanguage: (langCode) => dispatch(setLanguage(langCode)) })

export default Language()(connect(mapStateToProps, mapDispatchToProps)(App))
