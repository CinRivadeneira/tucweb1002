import { positions } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height:70px;
background-color: #f6c355; 
`
;

export const Wrapper = styled.div`
widht:100%;
max-width: 1300px;
height:100%;
display: flex;
flex-wrap;
justify-content: space-between;
margin: auto;
`;

export const LogoContainer = styled.div`
img{
    max-height: 60px;
    cursor: pointer;
    transition: all 0.7s;
    margin-top: 6px;
    margin-left: 30px;
}

img:hover {
    transform: scale(1.2);
}
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

@media screen and (max-width:960px){
    position: absolute;
    background-color: rgb(0,0,0); 
    opacity: 0.8;
    top: 70px;
    rigth: 80px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
}
`;

export const MenuItem = styled.li`
    height: 100%;
`;

export const MenuItemLink = styled.a` 
display: flex;
text-decoration: none;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
color: #f6c355;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 22px;
cursor: pointer;
transition: 0.5s all ease;

&:hover {
    color: rgb(240, 245, 250);
}

div{
    with:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;

svg{
    margin-right: 15px;
    }
}
}
    
@media screen and (min-width:960px){

color: rgb(4,4,97);

div{
        svg{
            display: none;
        }
    }
}
`;

export const MobileIcon = styled.div`
display: flex;
align-items: center;
cursor: pointer;
margin-right: 30px;

svg{
    font-Size: 2em;
}

@media screen and (min-width:960px){

svg{
    display:none;
}

`;



