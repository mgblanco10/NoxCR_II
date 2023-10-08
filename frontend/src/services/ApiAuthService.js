// import axios from './axios';
// const API_URL = process.env.REACT_APP_API_URL

// export const logoutService = () => {
//     return axios.post(`${API_URL}/logout`)
//       .then((response) => {
//         localStorage.removeItem('user');
//         const confirmationMessage = response.data;
//         return confirmationMessage;
//       })
//       .catch((error) => {
//         throw error
//       });
//   };


import axios from './axios';

const API_URL = process.env.REACT_APP_API_URL

export const logoutService = (authToken) => {
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  return axios.post(`${API_URL}/logout`, null, { headers })
    .then((response) => {
      localStorage.removeItem('authToken'); 
      return response.data; 
    })
    .catch((error) => {
      throw error;
    });
};
