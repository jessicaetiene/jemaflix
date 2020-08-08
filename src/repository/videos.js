import config from '../config';

const URL__VIDEOS = `${config.URL_BASE}/videos`;

function create(objetoDoVideo) {
  return fetch(URL__VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os daos');
  });
}
export default {
  create,

};
