/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper";
import SwithTabs from "../../../components/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel";

const TopRated = () => {
    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${endPoint}/top_rated/`);
    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwithTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
        </div>
    );
};

export default TopRated;