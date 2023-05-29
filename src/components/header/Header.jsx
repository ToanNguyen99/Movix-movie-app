import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";

import ContentWrapper from "../ContentWrapper";
import logo from "../../assets/img/movix-logo.svg";
import "./style.scss";


const Header = () => {
    const [show, setShow] = useState("top");
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      window.scroll(0, 0)
    }, [location])
    
    const handleNavbar = () => {
      
      if (window.scrollY > 200 ) {
        if (window.scrollY > scrollY && !mobileMenu) {
          setShow("hide")
        } else {
          setShow("show")
        }
      } else {
        setShow("top")
      }
      setScrollY(window.scrollY)
    }

    useEffect(() => {
      window.addEventListener("scroll", handleNavbar);

      return () => window.removeEventListener("scroll", handleNavbar)
    }, [scrollY])


    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMenuMobile = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const setQueryHandle = (e) => {
        e.preventDefault();
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1500);
        }
    };

    const handleNavigationMenu = (type) => {
        navigate(`/explore/${type}`);
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => {
                            handleNavigationMenu("movie");
                        }}
                    >
                        Movies
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => {
                            handleNavigationMenu("tv");
                        }}
                    >
                        TV Shows
                    </li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMenuMobile} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search Video"
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={setQueryHandle}
                            />
                            <VscChromeClose className="btnClose" onClick={() => setShowSearch(false)} />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
