import React, {Component} from 'react'


export default class ClassBasedEx1 extends Component {
    constructor(){
        super()

        this.state ={
            count:0
        }

        this.handleInc=()=>{
            this.setState({count: this.state.count+1})
               }
    }
    

    render(){
        return(
            <div style={{height:'100vh',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div>count: {this.state.count}</div>
                <button onClick={this.handleInc}>increment</button>
            </div>
        )
    }
}