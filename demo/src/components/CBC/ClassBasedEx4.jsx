import React, {Component} from 'react'


export default class ClassBasedEx4 extends Component {
    constructor(){
        super()

        this.state ={
            count:1000
        }

        this.handleDiv=()=>{
            this.setState({count: Math.floor(this.state.count/2)})
               }
    }
    

    render(){
        return(
            <div style={{height:'100vh',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div>count: {this.state.count}</div>
                <button onClick={this.handleDiv}>Divide By 2</button>
            </div>
        )
    }
}