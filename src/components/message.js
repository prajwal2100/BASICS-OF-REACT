import React,{Component} from 'react';
 
export class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'welcome visitor'
        }
     }

    changemessage(){
        this.setState({
            message:'HEY THERE!'
        }) 
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick = { () => this.changemessage()} > CLick me</button>
            </div>
        )
    }
}