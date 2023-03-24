import styled,{ keyframes } from "styled-components";

const animationDashboard = keyframes`
  to{
    opacity: 1;
  }
`;



export const Form = styled.form`
 animation: ${animationDashboard} 1s forwards;
 opacity:0;
display:flex ;
align-items:center;
flex-direction:column;
border:2px solid grey;
border-radius: 4px;
width:300px;
height:250px;
background-color:#343B41;
position:absolute;
margin-top:120px;




header{
    background-color:#868E96;
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:100%;
   margin-bottom:15px;
   height:40px;
}
div{
   display:flex;
    flex-direction:column;
   justify-content:center;
   width:100%;
   margin-left:40px;
   
}
h1{
    color: white;
    font-size:14px;
    margin-right:40px;
    padding-left:15px;
}

p{
    cursor: pointer;
    border-radius:8px;
    text-align:center;
    width:20px;
    height:20px;
    transition:all 0.9s;
    padding-right:15px;
    :hover{
        scale:1.1;
    }
}

label{
    color:white;
    width:150px;
    
    
}

input{
     background-color:#868E96;
    width:250px;
    margin-bottom:15px;
    height:30px;
    transition: all 0.5s;
    :hover{
        scale:1.05;
    }
    
}

select{
    background-color:#868E96;
    width:258px;
    margin-bottom:15px;
    height:30px
}

button{
    width:250px;
    background-color:#FF577F;
    border: none;
    height:30px;
    color:white;
    font-size:16px;
    font-weight:600;
    border-radius:5px;
    margin-right:70px;
    margin-top:10px;
    transition:all 0.9s;
    :hover{
        scale:1.1;
    }
}
span{
    margin-bottom: 5px;
    box-sizing:border-box;
    color:red
}

`



