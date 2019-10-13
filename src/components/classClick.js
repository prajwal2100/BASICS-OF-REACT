//rce
import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler(){
         console.log('clicked on CLICK ME')
     }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler} >Click Me</button>
            </div>
        )
    }
}

export default ClassClick
