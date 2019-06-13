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
cache:"",
spin:"App-header"
   };
  };
 

  Traitement(btn) {
  

    if(this.state.step === 1){
      this.setState({
        Question:"Qu'elle est le soucis ?",
        Messageuser:"Verifier que tout est bien brancher. Que l'imprimante est correctement configurer",
        BTN1:"Mon imprimante ne demarre pas.",
        BTN2:"Mon imprimannte imprime pas ou mal",
        BTN3:"Mon imprimante force sur les moteurs."
      })
    
    }

//FIN STEP 1


    if(this.state.step === 2){
    if(btn === 1){
      this.setState({
        Question:"D'accord, essayons de voir esemble.",
        Messageuser:"Esssayer avec un autre cable d'alimentation Si cela me fonctionne pas essayer de voir si le boutton est bien sur 'ON' deriere la machine.",
        BTN1:"J'ai resolu mon probleme !",
        BTN2:"Cela ne fonctionne pas.",
        BTN3:"Sa marche mais j'ai un autre probleme."
      })
    }

    if(btn === 2){
      this.setState({
        Question:"Dite nous en plus.",
        Messageuser:"Verifier que le plateu ne soit pas trop proche de la buse. Verifier que votre machine a du finament.",
        BTN1:"Elle imprime dans le vide.",
        BTN2:"L'impression ce lance pas (erreur est afficher)",
        BTN3:"Les impression son moche."
      })
    }


    if(btn === 3){
      this.setState({
        Question:"Cela est courent dans l'impression 3D.",
        Messageuser:"Verifier que le plateu ne soit pas trop proche de la buse. Verifier que tout les fin de course touche tout les axes",
        BTN1:"J'ai resolu mon probleme !",
        BTN2:"Cela ne fonctionne pas.",
        BTN3:"Sa marche mais j'ai un autre probleme."
      })
    }


    }
//FIN STEP 2


    if(this.state.step === 3){
      

      if(btn === 1){
        this.setState({
          Question:"super ! A bientot !",
          Messageuser:"Merci a bientot !",
          BTN1:"",
          BTN2:"",
          BTN3:"",
          spin:"lds-ring"
        })
      }
  
      if(btn === 2){
        this.setState({
          Question:"Ok, on vous redirige ver un tecnicien",
          Messageuser:"Veuillez attendre un peut ...",
          BTN1:"",
          BTN2:"",
          BTN3:"",
          spin:"lds-ring"
        })
      }
  
  
      if(btn === 3){
        this.setState({
          
            Question:"Ok, on vous redirige ver un tecnicien",
            Messageuser:"Veuillez attendre un peut ...",
            BTN1:"",
            BTN2:"",
            BTN3:"",
            spin:"lds-ring"
         
        })
      }



    }

// fin step 3

    if(this.state.step === 4){
      
    }
    
    
    
    
    
    
    
    if(this.state.step === 5){
      
    }
    }


  handleClick1() {
    let cache = this.state.step+1
    this.setState({
      step:cache,
    })
    console.log("Etape :"+cache+"/5")
    this.Traitement(1)
  }




  handleClick2() {
    let cache = this.state.step+1
    this.setState({
      step:cache,
    })
    
    console.log("Etape :"+cache+"/5")
    this.Traitement(2)
  }



  handleClick3() {
    let cache = this.state.step+1
    this.setState({
      step:cache,
    })
    this.Traitement(3)
    console.log("Etape :"+cache+"/5")
  }






  render() {
   
    return (
    <div className="App">
      <header>
        
   <h1>{this.state.Question}</h1>
{this.state.Messageuser}
      </header>
   
<button onClick={this.handleClick1.bind(this)}>{this.state.BTN1}</button>
<button onClick={this.handleClick2.bind(this)}>{this.state.BTN2}</button>
<button onClick={this.handleClick3.bind(this)}>{this.state.BTN3}</button>

<center><div className="{this.staite.spin}"><div></div><div></div><div></div><div></div></div></center>
   
    </div>
     );
    }
  }
export default App;

