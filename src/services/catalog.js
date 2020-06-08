import axios from 'axios';

const getCatalog = async () => {
  const response = await axios.get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog');
  return response;
    
};

export { getCatalog };
