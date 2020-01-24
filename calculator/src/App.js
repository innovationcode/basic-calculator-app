import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    equation : [],
    result : '',
  }

  handleButtonClick = (value) => {
      console.log(value);
      if(value === 'C'){ //Clear -- clear all states
          this.setState({
              equation: [],
              result: ''
          })
      } else if(value === '=') {
          //calculate retult and update state
          const answer = eval(this.state.equation.join(''));
          this.setState({
              equation : [],
              result: answer,
          })
      } else {
          //keep updating equation
          const newEquation = [...this.state.equation, value];
          this.setState({
              equation: newEquation,
              result: newEquation
          })
      }
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div>
            <div style = {{borderRadius : "5%", 
                           width :"73%", 
                           border: "2px solid red", 
                           height: "50px", 
                           marginLeft: "85px", 
                           marginBottom : "30px",
                           fontWeight: "bold",
                           fontSize: "35px"}}> { this.state.result }
            </div>
            
            {/* First Row  */}
            <ul>
              <li onClick = {() => this.handleButtonClick(1)}>1</li>
              <li onClick = {() => this.handleButtonClick(2)}>2</li>
              <li onClick = {() => this.handleButtonClick(3)}>3</li>
              <li onClick = {() => this.handleButtonClick('+')}>+</li>
            </ul>

            {/* Second Row  */}
            <ul>
              <li onClick = {() => this.handleButtonClick(4)}>4</li>
              <li onClick = {() => this.handleButtonClick(5)}>5</li>
              <li onClick = {() => this.handleButtonClick(6)}>6</li>
              <li onClick = {() => this.handleButtonClick('-')}>-</li>
            </ul>

            {/* Third Row  */}
            <ul>
              <li onClick = {() => this.handleButtonClick(7)}>7</li>
              <li onClick = {() => this.handleButtonClick(8)}>8</li>
              <li onClick = {() => this.handleButtonClick(9)}>9</li>
              <li onClick = {() => this.handleButtonClick('*')}>*</li>
            </ul>
            
            {/* Forth Row  */}
            <ul>
              <li onClick = {() => this.handleButtonClick('C')}>C</li>
              <li onClick = {() => this.handleButtonClick(0)}>0</li>
              <li onClick = {() => this.handleButtonClick('=')}>=</li>
              <li onClick = {() => this.handleButtonClick('/')}>/</li>
            </ul>
        </div>
      </div>
    );
  }  
}

export default App;
