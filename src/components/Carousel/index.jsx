/* eslint-disable react/prop-types */
import { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../ContentWrapper";
import Img from "../lazyLoadImage/img";
import PosterFallBack from "../../assets/img/no-poster.png";
import "./style.scss";
import CircleRating from "../CircleRating";
import Genres from "../Genres";

const Carousel = ({ data, loading, endpoint, title }) => {
    const navigate = useNavigate();
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);

    const navigation = (action) => {
        const container = carouselContainer.current;

        const scrollAmout =
            action === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);
        container.scrollTo({
            left: scrollAmout,
            behavior: "smooth",
        });
    };

    const loadingSkeletonItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")} />
                <BsFillArrowRightCircleFill className="carouselRightNav arrow" onClick={() => navigation("right")} />

                {!loading ? (
                    <div ref={carouselContainer} className="carouselItems">
                        {data?.map((item) => {
                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallBack;
                            return (
                                <div key={item.id} className="carouselItem" onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <CircleRating rating={item.vote_average.toFixed(1)} />
                                        <Genres data={item.genre_ids.slice(0, 2)} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">{item.title || item.name}</span>
                                        <span className="date">{dayjs(item.release_date).format("MMM D, YYYY")}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {loadingSkeletonItem()}
                        {loadingSkeletonItem()}
                        {loadingSkeletonItem()}
                        {loadingSkeletonItem()}
                        {loadingSkeletonItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
