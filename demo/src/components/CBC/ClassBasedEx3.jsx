import React, {Component} from 'react'

export default class ClassBasedEx3 extends Component {
    constructor(){
        super()

        this.state ={
            count:1
        }

        this.handleMul=()=>{
            this.setState({
                count: this.state.count*2
            })
        }
    }
    

    render(){
        return(
            <div style={{height:'100vh',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div>count: {this.state.count}</div>
                <button onClick={this.handleMul}>Multiply By 2</button>
            </div>
        )
    }
}