import styled from "styled-components";
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 36px;
    z-index: 3;
`;
const DisneyLogo = styled.a`
    min-width: 40px;
    max-width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;

const LoginButton = styled.a`
    width: 100px;
    text-align: center;
    border: 1.5px solid #f6f6f6;
    padding: 8px 10px;
    border-radius: 4px;
    letter-spacing: 2.5px;
    transition: all 350ms ease-in-out;
    &:hover {
        background-color: #f6f6f6;
        color: #090b13;
        border-color: transparent;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavItem = styled.a`
    display: flex;
    padding: 2px 0px;
    margin-left: 15px;
    align-items: center;
    img {
        height: 20px;
        min-width: 20px;
        z-index: 3;
    }
    span {
        color: rgb(245, 245, 245);
        font-size: 13.5px;
        letter-spacing: 1.5px;
        white-space: nowrap;
        position: relative;
        margin: 0 7px;
        color: white;
        &:before {
            content: "";
            background-color: rgb(245, 245, 245);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            opacity: 0;
            left: 0;
            height: 2px;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94) 0s;
            visibility: hidden;
        }
    }
    &:hover {
        span:before {
            transform: scaleX(1);
            opacity: 1;
            visibility: visible;
            /* width: 100%; */
        }
    }
`;

export { Nav, DisneyLogo, LoginButton, NavMenu, NavItem };
