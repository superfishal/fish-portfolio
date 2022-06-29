import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`
export const Superfishal = styled.h2`
    color: blue;
`
export const NavLinks = styled.ul `
    display: flex;
    gap: 25px;
    list-style: none;
`
export const NavLink = styled(Link)`
    color:red;
    text-decoration: none;
`