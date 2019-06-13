import React from 'react';
import logo from './logo.svg';
import './App.css';
import FAQ from './etapes/FAQ.js'

class App extends React.Component {
  constructor(props) {




    
    super(props);
  
    this.state = {
titre : "Bienvenue Dans le support Dood",
message : "j'ai besoin d'aide !",
prossse : false,
step:0,
FAQ: <FAQ/>,
rendre:""
    };
  
 
  
  };
 

  handleClick() {
    if(this.state.prossse){
      this.setState({
        message : "retour",
    prossse: false,
    step :0,
    rendre: this.state.FAQ


    })
   
    }else{
      this.setState({
        message : "j'ai besoin d'aide !",
      prossse: true,
      step:1,
      rendre: "" 
    })
    
    }  
  }




  render() {
   
    return (
    <div className="App">
      <header className="App-header">
   <h1>{this.state.titre}</h1>
   <button onClick={this.handleClick.bind(this)}>{this.state.message}</button>
  
   {this.state.rendre}
      </header>
     
   
    </div>
     );
    }
  }
export default App;

