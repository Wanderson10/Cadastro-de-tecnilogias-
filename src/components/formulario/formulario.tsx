import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerForm } from "./style";
import { Corpo } from "./style";
import { DivApart ,Html} from "./style";
import { IDataRegistration } from "../contexct/contexct";
import { useSimulationContext } from "../contexct/contexct";
import { ButtomLeave } from "./style";
import { useNavigate } from "react-router-dom";




function Formulario() {

const navigate = useNavigate();
  
 const {onSubmitFunction} = useSimulationContext()

  const shemma = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Digite sua senha")
      .min(8, " A senha deve possuir no minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas não concidem"),
    contact: yup.string().required("telefone obrigatorio"),
    course_module: yup.string().required("selecione Modulo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegistration>({ resolver: yupResolver(shemma) });

  function MYlink(){
    return  navigate(`/landingpage`, { replace: true });
  }

  console.log(errors);

 

  return (
    <Html>
    <Corpo>
      <DivApart>
        {" "}
        <h1>Kenzie Hub</h1>{" "}
        <ButtomLeave onClick={()=>MYlink()}>Voltar</ButtomLeave>
      </DivApart>
      <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <div>
          <label htmlFor="nome">Nome {errors.name && <span>{errors.name.message}</span>}</label>
          <input {...register("name")} type="text"></input>
          <p>{errors.name && errors.name.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email"></input>
          <p>{errors.email && errors.email.message}</p>
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input {...register("password")} type="password"></input>
          <p>{errors.password && errors.password.message}</p>
        </div>

        <div>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input {...register("confirmPassword")} type="password"></input>
          <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
        </div>

        <div>
          <label htmlFor="descricao">Bio</label>
          <input {...register("bio")} placeholder="Fale sobre você."></input>
        </div>

        <div>
          <label htmlFor="contato">Contato</label>
          <input {...register("contact")} type="tel"></input>
          <p>{errors.contact && errors.contact.message}</p>
        </div>

        <div>
          <label>Selecionar modulo</label>

          <select {...register("course_module")} className="tipoValor">
            <option value="Modulo1-introdução ao front end">Modulo1-introdução ao front end</option>
            <option value="Modulo2-(Frontend avançado)">Modulo2-(Frontend avançado)</option>
            <option value="Modulo3-introdução ao backend">Modulo3-introdução ao backend</option>
            <option value="Modulo4-(backend avançado)">Modulo4-(backend avançado)</option>
      

          </select>
          {errors.course_module && errors.course_module.message}

          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </div>
      </ContainerForm>
    </Corpo>
    </Html>
  );
}

export default Formulario;
