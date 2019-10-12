
// CLASS COMPONRNT
import React ,{Component} from 'react';

export class Welcome extends Component{
    render(){
        return(
            <div>
                <h1> hello {this.props.name} aka {this.props.heroname} </h1>
            </div>
        )
    }
}

