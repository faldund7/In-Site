import react from 'react';
import '../css/logo.css';

const Logo = function() {
    return (
        <div class="logo-svg">
            <img src="/InSite-Logo.svg"/>
            <text className="text-wrapper">truth matters</text>
        </div>   
    )
}

export default Logo;