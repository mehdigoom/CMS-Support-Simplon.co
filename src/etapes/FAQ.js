import React from 'react';
import logo from '../logo.svg';
import '../App.css';


class App extends React.Component {
  constructor(props) {




    
    super(props);
  
    this.state = {
Question:"",
Model:"",
NoSerie:"",
Messageuser:"Nous allons vous aidez. Dite nous le model de votre Dood.",
BTN1:"Dood DOM Pro V1",
BTN2:"Dood DOM pro V2",
BTN3:"Dood S",
step : 1,
cache:""  
   };
  };
 

  handleClick1() {
    let cache = this.state.step+1
    this.setState({
      step:cache,
    })
    console.log("Etape :"+cache+"/5")
  }




  handleClick2() {
    let cache = this.state.step+1
    this.setState({
      step:cache,
    })
    console.log("Etape :"+cache+"/5")
  }



  handleClick3() {
    let cache = this.state.step+1
    this.setState({
      step:cache,
    })
    console.log("Etape :"+cache+"/5")
  }


Traitement(){
if(this.state.step === 2){
  this.setState({
    Question:"Qu'elle est le soucis ?",
    Messageuser:"Verifier que tout est bien brancher. Que l'imprimante est correctement configurer",
    BTN1:"Mon imprimante est BIEN brancher mais ne demarre pas.",
    BTN2:"Mon imprimannte imprime pas ou mal",
    BTN3:"Mon imprimante force sur les moteurs."
  })

}
if(this.state.step === 3){
  
}
if(this.state.step === 4){
  
}
if(this.state.step === 5){
  
}
if(this.state.step === 6){
  
}
}




  render() {
   
    return (
    <div className="App">
      <header>
        {this.state.Messageuser}
   <h1>{this.state.Question}</h1>

      </header>
   
<button onClick={this.handleClick1.bind(this)}>{this.state.BTN1}</button>
<button onClick={this.handleClick2.bind(this)}>{this.state.BTN2}</button>
<button onClick={this.handleClick3.bind(this)}>{this.state.BTN3}</button>

     
   
    </div>
     );
    }
  }
export default App;

