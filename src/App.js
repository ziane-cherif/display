import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      result: '',
      errorMessage : '' 
    };
    this.display= this.display.bind(this);
    this.handleInput= this.handleInput.bind(this);
  }

  handleInput(e){
    
    this.setState({value: e.target.value, errorMessage : ''});

  }
display(){ 
  const trad = {
    "0" : ['._.','|.|','|_|',],
    "1" : ['...','..|','..|',],
    "2" : ['._.','._|','|_.',],
    "3" : ['._.','._|','._|',],
    "4" : ['...','|_|','..|',],
    "5" : ['._.','|_.','._|',],
    "6" : ['._.','|_.','|_|',],
    "7" : ['._.','..|','..|',],
    "8" : ['._.','|_|','|_|',],
    "9" : ['._.','|_|','..|',],
  } 
const value =this.state.value;
const resultat = ['','',''];

if (value.split('').length>20){
  this.setState({result : resultat, errorMessage : 'le nombre maximum des chiffres saisi est atteint'});
}else
if(!isNaN(value)) {
  console.log(value.split('').length)
value.split('').map(c =>{
const chiffre = trad[c];
resultat[0] += chiffre[0]+ " ";
resultat[1] += chiffre[1]+ " ";
resultat[2] += chiffre[2]+ " ";
})
this.setState({result : resultat, errorMessage : ''});
}
else{
this.setState({result : resultat, errorMessage : "Vous n'avez pas saisi un nombre"});
}
}


  render() {
    return (
      <div className="App" >
      <label style={{marginRight: '15px'}}>Veuillez saisir un nombre</label>
          <input 
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
          style={{marginRight: '15px'}}
          />
        <button onClick={this.display}>Afficher</button><br/>
        {!this.state.errorMessage && (
        <div style={{backgroundColor:'black', margin:'30px 0 0 150px', width: 'auto', display:'inline-block' ,  height: '90px'}}>
        <label style={{fontFamily: "Courier New", fontSize: "18px", color:'#00FF00'}}>{this.state.result[0]}</label><br/>
        <label style={{fontFamily: "Courier New", fontSize: "18px", color:'#00FF00'}}>{this.state.result[1]}</label><br/>
        <label style={{fontFamily: "Courier New", fontSize: "18px", color:'#00FF00'}}>{this.state.result[2]}</label><br/>
          </div>
        )}
        {this.state.errorMessage && (
          <label style = {{color : 'red'}}>{this.state.errorMessage}</label>
        )}
      </div>
    );
  }
}

export default App;
