import React from 'react'
import RMDBLogo from "../images/reactMovie_logo.png"
import TMDBlogo from "../images/tmdb_logo.svg"
import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from "../styles/StyledHeader"

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
            <StyledTMDBLogo src={TMDBlogo} alt="tmdb-logo"/>
        </div>
    </StyledHeader>
)

export default Header