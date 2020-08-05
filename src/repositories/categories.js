import config from '../config';

const URL_CATEGORIES = `${config.THE_MOST_TOP_URL}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Unable to fetch data :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Unable to fetch data :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
