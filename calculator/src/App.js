import React from 'react';
import './App.css';

class App extends React.Component{
  
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
                           marginBottom : "30px"}}> { }
            </div>
            
            {/* First Row  */}
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>+</li>
            </ul>

            {/* Second Row  */}
            <ul>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>-</li>
            </ul>

            {/* Third Row  */}
            <ul>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>*</li>
            </ul>
            
            {/* Forth Row  */}
            <ul>
              <li>C</li>
              <li>0</li>
              <li>=</li>
              <li>/</li>
            </ul>
        </div>
      </div>
    );
  }  
}

export default App;
