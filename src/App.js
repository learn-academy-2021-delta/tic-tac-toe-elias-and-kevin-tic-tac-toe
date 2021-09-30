import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Game from "./components/Game"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      userInputOne:null,
      userInputTwo:null
    }
  }
    componentDidMount(){
       let userOne=Math.floor(Math.random() *this.state.squares.length)
        let userTwo=Math.floor(Math.random() *this.state.squares.length)
        this.setState({
          userInputOne:userOne,
          userInputTwo:userTwo
          })
    }
   
  

  handleGame = (index) => {
    
    const { squares,userInputOne,userInputTwo} = this.state
    if(userInputOne===index){
      squares[index] = "❌"
      this.setState({squares: squares})
    }else if(userInputTwo===index){
      squares[index] = "🎈"
      this.setState({squares: squares})
    }
      
    }
    
  render(){
    
    return(
      <>
      <Game/>
        <h1>Tic-Tac-Toe</h1>
        <div className ="gameboard">
          {this.state.squares.map((value, index) => {
            return (
            <Square  
              value={value}
              index={index}
              key={index}
              handleGame={this.handleGame} 
            />
            )
          })}
        </div>
      </>
    )
  }
}
export default App






