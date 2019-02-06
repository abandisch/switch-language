import * as React from 'react'
import { connect } from 'react-redux'

export default () => Component => {
  function Language (props) {
    const { language, ...passThroughProps } = props
    return <Component language={language} {...passThroughProps} />
  }

  const displayName = Component.displayName || Component.name || 'Component'
  Language.displayName = `Language(${displayName})`

  const mapStateToProps = (state) => ({
    language: state.language
  })

  return connect(mapStateToProps)(Language)
}
