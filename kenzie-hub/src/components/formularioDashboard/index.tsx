import { Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICreateTech, useSimulationContext } from "../contexct/contexct";






function FormularioUsuario(){
  
  const {setMostrarForm,submitTecnology}= useSimulationContext()

 
  
  const formSchemma = yup.object().shape({
   title: yup.string().required("Nome obrigatorio")

  });

  const {register, handleSubmit,formState:{errors}} = useForm<ICreateTech>({
   resolver: yupResolver(formSchemma)
  });


  console.log(errors)

  return (
     <Form onSubmit={handleSubmit(submitTecnology)}>
      <header>
        <h1  >Cadastrar Tecnologia</h1>
        <p onClick={()=>setMostrarForm(false)}>X</p>
      </header>

      <div>
        <label>nome</label>
        <input {...register("title")}></input>
      {errors.title && <span>{errors.title.message}</span>}
      </div>

     

      <div>
        <label>Selecionar status</label>
        <select {...register("status")}>
        <option>iniciante</option>

        <option>intermediario</option>

        <option>avançado</option>

        
      </select>

      
      </div>


    <button   type="submit">Cadastrar Tecnologia</button>
      

      
    </Form>
  );
}


export default FormularioUsuario;
