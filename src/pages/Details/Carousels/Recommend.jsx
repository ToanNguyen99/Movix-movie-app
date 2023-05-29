
/* eslint-disable react/prop-types */
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel'

const Recommend = ({mediaType, id}) => {
    // eslint-disable-next-line no-unused-vars
    const {data, loading, error} = useFetch(`/${mediaType}/${id}/recommendations`);


  return (
    <Carousel title="Recommendations" data={data?.results} loading={loading} endpoint={mediaType}/>
  )
}

export default Recommend