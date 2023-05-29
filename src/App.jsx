import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
// import pages
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";

function App() {
    const dispatch = useDispatch();
    const url = useSelector((state) => state.home);
    console.log(url);

    useEffect(() => {
        fetchApiConfig();
        genresCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };

    const genresCall = async () => {
      let promises = [];
      let endPoint = ["tv", "movie"];
      let allGenres = {};

      endPoint.forEach(( url ) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
      })

      const data = await Promise.all(promises)

      data.map(({genres}) => {
        return genres.map((item) => (allGenres[item.id]) = item)
      })

      dispatch(getGenres(allGenres))

    };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
