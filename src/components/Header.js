import { Nav, DisneyLogo, LoginButton, NavMenu, NavItem } from "./CustomStyle";

function Header(props) {
    return (
        <Nav>
            <DisneyLogo>
                <img src="/images/logo.svg" alt="" />
            </DisneyLogo>
            <NavMenu>
                <NavItem href="/home">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </NavItem>
                <NavItem href="/search">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </NavItem>
                <NavItem href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </NavItem>
                <NavItem href="/originals">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </NavItem>
                <NavItem href="/movies">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </NavItem>
                <NavItem href="/series">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </NavItem>
            </NavMenu>
            <LoginButton>LOGIN</LoginButton>
        </Nav>
    );
}

export default Header;
