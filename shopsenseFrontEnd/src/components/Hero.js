import "./Hero.css";
import { Link} from "react-router-dom";
function Hero(){
    return(
        <>
        <div className="hero">
            <div className="hero-txt">
                <h1>WeCare</h1>
            
                <p>Shop without limit.See with your heart </p>
                <a href="/">
                <Link to="/signin">
                    <button className="first-page-button">
                    Getting started 
                    </button>
                    </Link>
                </a>
           </div>
        </div>
        </>
    )
}
export default Hero;
