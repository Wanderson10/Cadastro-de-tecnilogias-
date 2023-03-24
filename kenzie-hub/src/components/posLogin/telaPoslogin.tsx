import { Cabecalho } from "./style";
import { Corpo } from "./style";
import { Conteudo } from "./style";
import { Div1, Div2 } from "./style";
import FormularioUsuario from "../formularioDashboard";
import foto from "../img/Logo.png";
import botaoLixera from  "../img/Vector.png"
import { useSimulationContext } from "../contexct/contexct";


function TelaPosLogin() {

 



  const {
    setMostrarForm,
    mostrarForm,
    userTec,
    minhasTecnologias,
    deletar,
    logout
    
  } = useSimulationContext();

  const Tecnologias = minhasTecnologias?.map((tecnologia, index) => (
    <li>
<h4>{tecnologia?.title}</h4> <div><p>{tecnologia?.status}</p>  <img onClick={()=>deletar(tecnologia.id)} src={botaoLixera} alt="butao"/></div>
    </li>
  ));

 
 

  



  
  return (

   

 
    <Corpo>
      
      <Cabecalho>
        <img src={foto} alt="logoKenzieHub" />

        <button onClick={()=>logout()}>Sair</button>
       
      </Cabecalho>

      <Conteudo>
        <Div1>
          <h3>Ola,{userTec?.name}!</h3>{" "}
          <p>{userTec?.course_module}</p>
        </Div1>
        {mostrarForm ? <FormularioUsuario /> : null}

        <Div2>
          <h2>Tecnologias</h2> <p onClick={() => setMostrarForm(true)}>+</p>
        </Div2>

        <ul>
          {Tecnologias}
        </ul>
      </Conteudo>
    </Corpo>
  );
  }

  


export default TelaPosLogin;
