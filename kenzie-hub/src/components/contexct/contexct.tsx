import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";


interface listProviderProps {
  children: ReactNode
}
export interface ILoginContext {

  onSubmitFunction: (data: IDataRegistration) => void,
  submitFunction: (data: Ilogin) => void,
  setMostrarForm: (data: boolean) => void,
  mostrarForm: boolean,
  submitTecnology: (data: ICreateTech) => void,
  userTec: IUser | undefined,
  meuToken: string,
  minhasTecnologias: ITechResponse[] | undefined | [],
  deletar: (id: string) => void
  logout: () => void




}
export const ContexctPages = createContext({} as ILoginContext);


export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

interface ITech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}
interface ITechResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;


}

export interface ICreateTech {
  title: string;
  status: string;
}

export interface IdeleteTech {
  id: string
}

export interface IDataRegistration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface Ilogin {
  email: string,
  password: string
}
export const ProviderPages = ({ children }: listProviderProps) => {

  const [mostrarForm, setMostrarForm] = useState(false);
  const [meuToken, setMeuToken] = useState<string>('');
  const [minhasTecnologias, setMinhasTecnologias] = useState([]);
  const [userTec, setUserTec] = useState<IUser | undefined>();
  function mostrarConsoles() {
    return console.log(userTec)
  }

  function getData() {

    const token = localStorage.getItem("UserToken")

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api.get("/profile").then((response) => {
        console.log(response)
        setUserTec(response.data)
        setMinhasTecnologias(response.data.techs)
        navigate("/dashboard", { replace: true });

      }).catch((error) => {
        console.log(token)
        navigate("/login", { replace: true });

      })

    }

  }

  


  const navigate = useNavigate();


  useEffect(() => {
    getData();
  }, []);

  //Cadastro usuario

  const onSubmitFunction = (data: IDataRegistration) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        console.log(data)
        toast.success("Usuario Cadastrado Com Sucesso!");

        navigate(`/login`, { replace: true });
      })

      .catch((erro) => {
        console.log(erro);
        if (erro.response.data.message === "Email already exists") {
          return toast.error("Email ja cadastrado, Faça login!");
        }
      });
  };

  //Login usuario

  const submitFunction = (data: Ilogin) => {
    console.log(data);

    api
      .post("/sessions", data)
      .then((response) => {

        const { user: userLogado, token } = response.data;


        localStorage.setItem("UserToken", token)


        setMinhasTecnologias(userLogado.techs)
        setUserTec(response.data.user)
        setMeuToken(response.data.token)
        console.log(userTec)
        getData()
        navigate(`/dashboard`, { replace: true });

        toast.success("Login feito com sucesso!", { autoClose: 1500 });
        mostrarConsoles()


      })

      .catch((error) => {
        console.log(error);
        console.log("deu errado man")

        if (error.response.status === 401) {
          return toast.error("email ou senha invalidos");
        }

        toast.error("Ops! Algo deu errado.");
      });
  };

  //Cadastrar nova Tecnologia
  const submitTecnology = (data: ICreateTech) => {

    api.post<ICreateTech>("/users/techs/", data,)

      .then((response) => {
        console.log(meuToken)
        getData();
        setMostrarForm(false);
      })

      .catch((error) => console.log(error, meuToken));
  };

  //deletar tecnologia
  function deletar(id: string) {
    api
      .delete(`/users/techs/${id}/`)
      .then((response) => {
        console.log(minhasTecnologias);
        getData()
      })
      .catch((error) => console.log(error));

  }

  function logout() {
    localStorage.removeItem("UserToken");
    toast.info("Logout realizado", { autoClose: 3000 });
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1000);
  }

  return (
    <ContexctPages.Provider
      value={{
        onSubmitFunction,
        submitFunction,
        setMostrarForm,
        mostrarForm,
        submitTecnology,
        userTec,
        meuToken,
        minhasTecnologias,
        deletar,
        logout
      }}
    >{children}
    </ContexctPages.Provider>
  );
};

export function useSimulationContext(): ILoginContext {
  const contexct = useContext(ContexctPages)
  return contexct
}


