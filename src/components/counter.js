import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
        this.setState({
            count: this.state.count + 1 
        } , ()=> {
            console.log('call back value', this.state.count)
        })
    }


    render() {
        return (
            <div>
                <p>Count - {this.state.count} </p>
                <button onClick ={ () => this.increment() } > Click me </button>
            </div>
        )
    }
}

export default Counter
