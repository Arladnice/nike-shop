import { strapiApi } from '@/src/utils/api';

export async function getStaticProps(_context) {
  const response = await strapiApi.request.get('/tests/1');
  console.log('response', response.data);

  return {
    props: {
      data: response.data.data
    }
  };
}

const Home = ({ data }) => <h1 className='underline'>{data.attributes.name}</h1>;

export default Home;
