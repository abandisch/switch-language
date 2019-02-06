import React, { Component } from 'react'
import Language from './Language'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    const { language } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>The selected language is: {language.toUpperCase()}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({ someProp: 'fake prop' })

export default Language()(connect(mapStateToProps)(App))
