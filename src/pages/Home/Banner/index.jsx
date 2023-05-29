import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import Img from "../../../components/LazyLoadImage/Img";
import ContentWrapper from "../../../components/ContentWrapper";

const Banner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
        setBackground(bg);
    }, [data]);
    const setQueryHandle = (e) => {

        e.preventDefault();
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} alt={"banner"} />
                </div>
            )}
            <div className="opacity-layer"></div>
            <ContentWrapper >
              <div className="wrapper">
                  <div className="heroBannerContent">
                      <span className="title">Welcome.</span>
                      <span className="subTitle">Milions of movies, TV shows and people to discover. Explore now.</span>
                      <div className="searchInput">
                          <input
                              type="text"
                              placeholder="Search Video"
                              onChange={(e) => setQuery(e.target.value)}
                              onKeyUp={setQueryHandle}
                          />
                          <button type="submit" >Search</button>
                      </div>
                  </div>
              </div>

            </ContentWrapper>

        </div>
    );
};

export default Banner;
