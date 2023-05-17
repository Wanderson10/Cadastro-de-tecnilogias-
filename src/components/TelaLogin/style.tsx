
import styled, { keyframes } from "styled-components";

const animationDashboard = keyframes`
  to{
    opacity: 1;
  }
`;
export const Html = styled.html`
height:100vh;
`

export const Corpo = styled.body`

  animation: ${animationDashboard} 1s forwards;
  opacity: 0;

  
height:100%;
width:100%;

h1{
color:#FF427F;
font-size:30px;
}
background-color:#121214;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media screen and (min-width: 425px) {
    height:100%;
    width:100%
    
}
`


   
export const Formlogin = styled.form`
@media screen and (min-width: 425px) {
    height:300px;
    
}


background-color:#343B41 ;
width:50%;
height:400px;
display:flex;
flex-direction: column;
justify-content: center;

div{
    display: flex;
    align-items:center;
    flex-direction:column;
}

h2{  
    font-size:25px;
    color:white;
    font-family :"inter";
    font-weight: 200;
    margin-bottom:20px;
    
}

label{
    color :white;
    font-size: 12px;
}

input{
    width: 90%;transition: all 0.2s;
    :hover{
        transform: scale(1.1);
    }

}

p{
    font-size:10px;
    color:#868E96;

}

a{ 
    border:none;
    height:30px;
    width:90%;
    border-radius:4px;
    color:white;
    background-color:#868E96;
    font-family:"inter";
    margin-top:10px;
    margin-bottom:15px;
    cursor:pointer;
    transition: all 0.8s;
    text-align:center;
    text-decoration:none;
    padding-top:10px;
    :hover{
        transform: scale(1.1);
    }
    @media screen and (min-width: 425px) {
    width:250px;
}
}
@media screen and (min-width: 425px) {
    width:300px;
    input{
    width:250px;
   
}
    
}

`
export const Botton1 = styled.button`
    border:none;
    height:30px;
    width:90%;
    border-radius:4px;
    color:white;
    background-color:#FF427F;
    font-family:"inter";
    margin-top:10px;
    margin-bottom:15px;
    cursor:pointer;
    transition: all 0.9s;
    :hover{
        transform: scale(1.1);
    }
    @media screen and (min-width: 425px) {
    width:250px;
    
}
`

export const Botton2 = styled.button`
    border:none;
    height:30px;
    width:90%;
    border-radius:4px;
    color:white;
    background-color:#868E96;
    font-family:"inter";
    margin-top:10px;
    margin-bottom:15px;
    cursor:pointer;
    transition: all 0.8s;
    :hover{
        transform: scale(1.1);
    }
    @media screen and (min-width: 425px) {
    width:250px;
    
}
`

export const Alerta = styled.h5`
color:red;
font-size:12px;
margin:0;

`
