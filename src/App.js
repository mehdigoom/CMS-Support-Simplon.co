import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {




    
    super(props);
  
    this.state = {
titre : "Bienvenue Dans le support Dood",
message : "j'ai besoin d'aide !",
prossse : false,
hidenhome:""

    };

    
  };
 
  render() {
    
    return (
    <div className="App">
      <header className="App-header">
   <h1>{this.state.titre}</h1>
   <button>{this.state.message}</button>

      </header>
      <body>
      
      </body>
   
    </div>
     );
    }
  }
export default App;

