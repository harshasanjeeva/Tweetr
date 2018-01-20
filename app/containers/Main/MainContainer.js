import React from 'react'
import  Navigation from 'components'
import {container, innerContainer}  from './styles.css'
import createReactClass from 'create-react-class'


const MainContainer = createReactClass({
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={true} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default MainContainer