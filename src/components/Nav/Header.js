import { useState, useEffect } from "react";
import logo from "../../Assets/images/icons/logo-sm.png";
import search from "../../Assets/images/icons/search-icon-sm.png";
import cart from "../../Assets/images/icons/cart-sm.png";
import Navlink from "./NavLin.js";

function Header(props) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    

    return (
        <div>
            <div className="top-bar-wrapper fixed-top">
                <div className="container ">
                    <nav className="navbar nav-n navbar-toggleable-sm navbar-expand-md">
                        <button
                            className="navbar-toggler "
                            type="button"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                            aria-controls="navbar-collapse"
                            aria-expanded={!isNavCollapsed ? true : false}
                            aria-label="Toggle navigation"
                            onClick={handleNavCollapse}
                        >
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto margin-left:45px; " href="/">
                            <img src={logo} />
                        </a>

                        <a
                            className="nav-link cart-link  js-scroll-trigger cart2"
                            href="/cart/"
                        >
                            <img src={cart} />
                        </a>

                        <div
                            id="collapse"
                            className={`${isNavCollapsed ? "collapse" : ""
                                } navbar-collapse`}
                            id="navbar-collapse "   
                        >
                            <ul className="nav-n navbar-nav w-100 nav-fill  ">
                                <Navlink linkName="Mac" linkUrl="Mac"  />
                                <Navlink linkName="ipad" linkUrl="ipad" />
                                <Navlink linkName="iphone" linkUrl="iphone"/>
                                <Navlink linkName="watch" linkUrl="watch" />
                                <Navlink linkName="tv" linkUrl="tv"/>
                                <Navlink linkName="Music" linkUrl="Music" />
                                <Navlink linkName="Support" linkUrl="Support" />
                                <Navlink Image={<img src={search} />}/>
                                <Navlink Image={<img src={cart} />}/>
                                

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <section className="searchbox">
                <form>
                    <input type="text" name="searchbox" />
                    <button
                        id="submitButton"
                        className="btn btn-primary"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Header;
