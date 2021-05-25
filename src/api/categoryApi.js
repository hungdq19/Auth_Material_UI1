import axiosClient from './axiosClient';
const categoiesApi = {
   getAll() {
      const url = '/categories';
      return axiosClient.get(url);
   },
};
export default categoiesApi;
