
import SVGLogo from '../static/logo.svg'

const Logo = function() {
    return (
        <div className="logo-svg">
            <img src={SVGLogo} alt="In/Site Logo"/>
            {/* <LogoSVGComponent></LogoSVGComponent> */}
        </div>   
    )
}

export default Logo;