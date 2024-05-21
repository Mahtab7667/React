import React, {Component} from 'react'


export default class ClassBasedEx5RandomNumGen extends Component {
    constructor(){
        super()

        this.state ={
            count:0
        }

        this.handleRandomNumGen=()=>{
            this.setState({count: Math.floor(Math.random()*100)})
               }
    }
    

    render(){
        return(
            <div style={{height:'100vh',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div>count: {this.state.count}</div>
                <button onClick={this.handleRandomNumGen}>Click to get a Random Number</button>
            </div>
        )
    }
}