import React from 'react'
// import { ReactComponent as GithubLogoComponent } from '../static/github.svg'

import GithubLogo from '../static/github.svg'

const Footer = function() {
    return (
        <div className="footer">
            <a className="github-social" href="https://github.com/arnavkomaragiri/In-Site"> 
                <img src={GithubLogo} alt="github icon"></img>
                {/* <GithubLogoComponent id="github-social-icon"></GithubLogoComponent> */}
            </a>
        </div>
    );
}

export default Footer;