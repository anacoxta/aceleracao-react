import axios from 'axios';

const getCatalog = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API}`);
  return response;
};

export { getCatalog };
