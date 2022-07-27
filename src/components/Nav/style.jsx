import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    font-family: "Mochiy Pop One";
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`
export const Superfishal = styled.h2`
    color: papayawhip;
    margin-left: 10px;
`
export const NavLinks = styled.ul `
margin-right: 10px;
    display: flex;
    gap: 25px;
    list-style: none;
`
export const NavLink = styled(Link)`
    color: papayawhip;
    text-decoration: none;
`