import React, { Component } from 'react'
import Language from './Language'
import { connect } from 'react-redux'
import logo from './logo.svg'
import languages from './languages'
import './App.css'

class App extends Component {
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
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({ someProp: 'fake prop' })

export default Language()(connect(mapStateToProps)(App))
