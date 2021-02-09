import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import cartao from '../src/assets/cartao.jpg';
import '../src/style.css'
import Banner from '../src/components/menu/index';

function App() {
  const [inputNome, setInputNome] = React.useState("");
  const [inputConvidados, setInputConvidados] = React.useState("");
  
  const stateNome = useSelector((state) => state.nomeReducer.nome);
  const convidados = useSelector((state) => state.convidadosReducer.convidados);
  
  
  const dispatch = useDispatch();

  function adicionarConvidados(event) {
    event.preventDefault();

    const objConvidados = {
      nome: inputConvidados
    }
 
    dispatch( {type: "ADICIONAR", value: objConvidados});
  }

  function alterarNome(event) {
    setInputNome(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }
   
  return (
       
    <div className="container"> 

     <div className="banner">
        <Banner />
      </div>    
      
      <div className="box_logo">
        <h1>Vou Casar!!!</h1>
        <img src={cartao} id="cartao"/>
        <p>Vai Casar?Então o que está esperando?<br/>
         Comece já a personalizar seu convite de casamento!<br/>
         Aqui você escolhe a fonte do nome dos noivos<br/>
         para imprimir no convite. E tem mais, <br/>
         também pode criar a lista  de convidados!<br/>
         Vamos começar?
        </p>
      </div>

    <div className="box_tipologia">
      <h3>Digite o nome dos noivos <br/>
      e escolha tipologia do seu convite!</h3><br/><br/>
      <form>
          <input placeholder="Quem vai casar?"
           value={inputNome}
           onChange={alterarNome}/>
        <h1 id="font1">{stateNome}</h1>

        <label id="nome">Font: Arial</label><br/><br/>
        <h1 id="font2">{stateNome}</h1>

        <label id="nome">Font: Cursive</label><br/><br/>
        <h1 id="font3">{stateNome}</h1>
        <label id="nome">Font: Font: Fantasy</label><br/><br/>
        
       </form>
    </div>
    
    <div className="box_convidados">

      <h3>Insira o nome dos seus convidados:</h3>
      <form onSubmit={adicionarConvidados}>
        <input 
        placeholder="digite um convidado..."         
        value={inputConvidados}
        onChange={(event) => setInputConvidados(event.target.value)}/>
        <button>
          enviar
        </button>
  
        {convidados.map((convidados, index) => {
       return (
        <li key={index}>{convidados.nome}</li>
       )
     })  
    }  
      </form>
     </div> 

    

    </div>

    

  );

}


   

export default App;

