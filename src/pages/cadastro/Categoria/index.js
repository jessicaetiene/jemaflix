import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infodoEvento) {
    console.log(infodoEvento.target);
    setValue(
      infodoEvento.target.getAttribute('name'),
      infodoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = 'https://jemaflix.herokuapp.com/categorias';
    fetch(URL).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Europa',
    //       descricao: 'Roteiro de viagens para a Europa',
    //       cor: '#cbd1fdf',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Ásia',
    //       descricao: 'Roteiro de viagens para a Ásia',
    //       cor: '#cbd1fdf',
    //     },

    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handlerSubmit(infodoEvento) {
        infodoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,

        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
