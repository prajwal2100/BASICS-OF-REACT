import React, { Component } from 'react'
import ChildComponent from './childComponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName: 'parent'
         }
         this.greetparent = this.greetparent.bind(this)
     }
     
     greetparent(){
         alert("hello" + this.state.parentName)
     }
    render() {
        return (
            <div>
               <ChildComponent />  
            </div>
        )
    }
}

export default ParentComponent
