/* eslint-disable react/prop-types */
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel'

const Similar = ({mediaType, id}) => {
    // eslint-disable-next-line no-unused-vars
    const {data, loading, error} = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"

  return (
    <Carousel title={title} data={data?.results} loading={loading} endpoint={mediaType}/>
  )
}

export default Similar