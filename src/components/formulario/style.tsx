
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

width: 100%;
  animation: ${animationDashboard} 1s forwards;
  opacity: 0;


button{
    border:none;
    background-color: #343B41 ;
    height:30px;
    width:45px;
    color:white;
    transition: all 0.8s;
    :hover{
    cursor:pointer;
    transform: scale(1.1);
}

}


background-color:#121214;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


@media screen and (min-width: 425px) {
  
  

    div{
      width:300px;
    }
}
`


export const ContainerForm = styled.form`

background-color:#343B41 ;
width:50%;
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;


@font-face {
    font-family: "inter";
    src: url(/src/fontes/Inter/static/Inter-Bold.ttf);
}
h2{  
    font-size:20px;
    color:white;
    font-family :"inter";
    font-weight: 200;
    
}

label{
    color :white;
    font-size: 12px;
}

input{
    width:75%;
    transition: all 0.5s;
    :hover{
   
    cursor:pointer;
    transform: scale(1.1);

}
}

button{
    border:none;
    height:30px;
    width:90%;
    border-radius:4px;
    color:white;
    background-color:#59323F;
    font-family:"inter";
    margin-top:10px;
    margin-bottom:15px;
    transition: all 0.2s;
    :hover{
    background-color: #FF427F;
    cursor:pointer;
    transform: scale(1.1);

}
}

p{
    margin:0;
    color:red;
}

select{
    width:80%;transition: all 0.5s;
    :hover{
   
    cursor:pointer;
    transform: scale(1.1);

}
}

div{
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    
}

@media screen and (min-width: 425px) {
  
  width:400px;

  div{
    width:300px;
  }
}

@media screen and (min-width: 300px) {
  
  width:300px;

  div{
    width:300px;
  }
}

`
export const DivApart = styled.div`
h1{
font-size:26px;
color:#FF427F;
margin-left:5px;
}
display:flex;
align-items:center;
justify-content:space-around;
width:80%;
margin-bottom:15px;
`

export const ButtomLeave =  styled.button`
background-color:#FF427F;
border-radius:5px;
color:white;
`