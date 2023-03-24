
import './App.css';
import { ContainerRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import { GlobalStyle } from './app.style';

function App() {
  return (
    <>
  <GlobalStyle></GlobalStyle>   
 <ContainerRoutes></ContainerRoutes>
 <ToastContainer></ToastContainer>
 </>
  );
}

export default App;
