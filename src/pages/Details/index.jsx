import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./style.scss";
import DetailsBanner from "./DetailsBanner";
import Cast from "./Cast";
import VideosSection from "./VideosSection";
import Similar from "./Carousels/Similar";
import Recommend from "./Carousels/Recommend";

const Details = () => {
    const { mediaType, id } = useParams();

    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)

    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
    console.log(data)
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
            <Cast data={credits?.cast} loading={creditsLoading}/>
            <VideosSection data={data} loading={loading}/>
            <Similar mediaType={mediaType} id={id}/>
            <Recommend mediaType={mediaType} id={id}/>
        </div>
    );
};

export default Details;
