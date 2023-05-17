
import styled from "styled-components";





export const Corpo = styled.body`
background-color:#121214;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;


`

export const Cabecalho = styled.header`
display:flex;
justify-content:space-around;
align-items:center;
width:95%;
border-bottom: solid 1px #343B41 ;



h1{
    color:#FF427F;
}

button{
    border:none;
    height:30px;
    width:50px;
    border-radius:4px;
    color:white;
    background-color:#868E96;
    font-family:"inter";
    margin-top:10px;
    margin-bottom:15px;
    cursor: pointer;

    transition: all 0.9s;
    :hover{
        background-color:#FF427F;
        scale:1.1;
    }
}
`

export const Conteudo = styled.main`

width:95%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
margin-top:50px;



h3{
    color:white;
    
}
p{
    color:white;
    transition:all 0.9s;
    :hover{
        scale:1.1;

    }
    
}

button{
    border: solid 2px white;
    font-weight: 800;
    background: none;
    color:white;
    font-size: 18px;
    cursor: pointer;
    margin-left:70px;
}



ul{
    background-color:#343B41;
    border:white solid 2px;
    border-radius:5px;
    width:80%;
    
}

ul>li{
    width:100%;
    display: flex ;
    justify-content:space-around;
    align-items:center;
    background-color:#121214;
    height:40px;
    
    
}

ul>li>{
font-weight:100;
color :#868E96;
}

ul>li>h4{
    color:white;
    font-weight:600;
}

ul>li>img{
    cursor:pointer;

}

ul>li>div{
    display:flex;
    justify-content: space-around;
}

ul>li>div>p{
   margin-right:16px;
}

ul>li>div>img:hover{
    width:15px;
    height:15px;
    border:solid 2px white;
    cursor: pointer;
    
}
`


export const Div1 = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:95%;
margin-bottom:20px;
padding-bottom:5%;
border-bottom: solid 1px #343B41 ;

h2{
    color:white;
    font-size:25px;
}

p{
    font-weight:100;
    color:#868E96;

}

`

export const Div2 = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:95%;
margin-bottom:20px;

h2{
    color:white;
    
}
p{  
    height:22px;
    color:white;
    cursor: pointer;
    font-weight:800;
    border:solid white 2px;
    width:19px;
    text-align:center;
    align-items:center;
    font-size:20px;

    
}

`