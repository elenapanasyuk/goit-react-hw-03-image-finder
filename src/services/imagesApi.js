const API_KEY = '19039117-820a9ced6542bb27a724ef11a';
const BASE_URL = 'https://pixabay.com/api';

function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=6&key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`нет картинок по запросу ${query}`));
  });
}

const api = {
  fetchImages,
};

export default api;
