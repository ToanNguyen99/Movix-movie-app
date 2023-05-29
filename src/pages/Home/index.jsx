import Banner from './Banner'
import Trending from './Trending'
import Popular from './Popular'
import './style.scss'
import TopRated from './TopRated'

const Home = () => {
  return (
    <div className='homePage'>
        <Banner />
        <Trending />
        <Popular />
        <TopRated />
    </div>
  )
}

export default Home