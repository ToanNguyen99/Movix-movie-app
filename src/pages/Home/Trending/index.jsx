import { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper";
import SwithTabs from "../../../components/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel";

const Trending = () => {
    const [timeWindow, setTimeWindow] = useState("day");

    const { data, loading } = useFetch(`/trending/all/${timeWindow}`);
    const onTabChange = (tab) => {
        setTimeWindow(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwithTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    );
};

export default Trending;
