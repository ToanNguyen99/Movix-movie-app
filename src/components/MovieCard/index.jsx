/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import PosterFallBack from '../../assets/img/no-poster.png'
import CircleRating from '../CircleRating'
import Genres from '../Genres'
import Img from '../lazyLoadImage/img';
import './style.scss'

const MovieCard = ({ data, fromSearch, mediaType}) => {
    const { poster_path, media_type, id, vote_average, genre_ids, title, name, release_date } = data;


    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = poster_path ? url.poster + poster_path : PosterFallBack;

   
  return (
    <div className='movieCard' onClick={() => navigate(`/${media_type || mediaType}/${id}`)}>
        <div className="posterBlock">
            <Img className="posterImg" src={posterUrl}/>
            {!fromSearch && 
                <React.Fragment>
                    <CircleRating rating={vote_average.toFixed(1)}/>
                    <Genres data={genre_ids.slice(0, 2)}/>
                </React.Fragment>
            }
        </div>
        <div className="textBlock">
            <span className="title">{title || name}</span>
            <span className="date">
                {dayjs(release_date).format("MMM D, YYYY")}
            </span>
        </div>
    </div>
  )
}

export default MovieCard