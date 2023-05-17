
import { Formlogin } from "./style";
import { Corpo } from "./style";
import { Botton1 } from "./style";

import { Alerta } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { Html } from "./style";

import { Ilogin, useSimulationContext } from "../contexct/contexct";


function TelaLogin() {

   
  const {submitFunction}= useSimulationContext()
 

  const shemma = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Ilogin>({ resolver: yupResolver(shemma) });



  return (
    <Html>
    <Corpo>
      <h1>Kenzie Hub</h1>
      <Formlogin className="Login" onSubmit={handleSubmit(submitFunction)}>
        <div><h2>Login</h2></div>
        <div className="caixaLogin">
          <label  >Email</label>
          <input  {...register("email")}></input>
          {errors.email && <Alerta>{errors.email.message}</Alerta>}
          
        </div>

        <div className="caixaLogin">
          <label>Senha</label>
          <input type={"password"} {...register("password")}></input>
          {errors.password && <Alerta>{errors.password.message}</Alerta>}
        </div>

        <div className="caixaBotoes">
          <Botton1 type="submit">Entrar</Botton1>
          <p>Ainda não possui conta?</p>
      <Link to={'/registration'}>Cadastre-se</Link>
        </div>
      </Formlogin>
    </Corpo>
    </Html>
  );
}

export default TelaLogin 
