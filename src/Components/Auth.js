import axios from 'axios';


const API_ENDPOINT = 'https://green-api.com/api/v2/auth/login/';

function handleLogin(idInstance, apiTokenInstance) {
  const loginData = {
    id: idInstance,
    apiToken: apiTokenInstance
  };

  axios.post(API_ENDPOINT, loginData)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location.href = '/chat'; // перенаправляем на страницу чата после успешной авторизации
    })
    .catch(error => {
      console.log(error);
    });
}