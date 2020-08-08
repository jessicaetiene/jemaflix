import config from '../config';

const URL_CATEGORIAS = `${config.URL_BASE}/categorias`;

function getAllWithVideos() {
  const URL_CATEGORIAS_VIDEOS = `${URL_CATEGORIAS}/?_embed=videos`;
  return fetch(URL_CATEGORIAS_VIDEOS).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os daos');
  });
}

function getAll() {
  return fetch(URL_CATEGORIAS).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os daos');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
