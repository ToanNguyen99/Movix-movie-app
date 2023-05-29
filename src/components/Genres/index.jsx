/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);
   
    return <div className="genres">
        {data?.map((category) => {
            if(!genres[category]?.name) return;
            return (
                <div key={category} className="genre">
                    {genres[category]?.name}
                </div>
            )
        })}
    </div>;
};

export default Genres;
