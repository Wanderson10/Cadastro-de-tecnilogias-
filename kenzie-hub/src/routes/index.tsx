import { Routes, Route, Navigate } from "react-router-dom";
import Formulario from "../components/formulario/formulario";
import TelaLogin from "../components/TelaLogin/login";
import TelaPosLogin from "../components/posLogin/telaPoslogin";
export function ContainerRoutes() {
    return (
      <Routes>
        <Route path="landingpage" element={<TelaLogin/>} />
        <Route path="registration" element={<Formulario/>} />
        <Route path="dashboard" element={<TelaPosLogin/>}/>
        <Route path="*" element={<Navigate replace to={"landingpage"} />} />
      </Routes>
    );
  }