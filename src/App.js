import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Administração',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Comércio',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Ciência',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Turismo',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Cultura',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Pequenos Negócios',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Logística',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TOM NOOK',
      cargo: 'CEO na Nook Inc',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEN4a4APlLv8u4giQvXxgLejNtbjy1PcdkSQ&s',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ISABELLE',
      cargo: 'Administradora na Nook Inc',
      imagem: 'https://play.nintendo.com/images/profile-animalcrossing-isabelle.7bf2a8f2.aead314d58b63e27.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TIMMY',
      cargo: 'Gerente de Loja na Nook Inc',
      imagem: 'https://play.nintendo.com/images/character-circle-timmy-tommy.52194f48.b0bd0dfe58b63e27.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TOMMY',
      cargo: 'Assistente de Loja na Nook Inc',
      imagem: 'https://play.nintendo.com/images/character-circle-timmy-tommy.52194f48.b0bd0dfe58b63e27.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SABLE ABLE',
      cargo: 'Costureira na Able Sisters',
      imagem: 'https://pbs.twimg.com/media/EKABwwkWkAEZMyL.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MABEL ABLE',
      cargo: 'Gerente de Loja na Able Sisters',
      imagem: 'https://pbs.twimg.com/media/EYoaMvOXQAA7xsJ.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LABEL ABLE',
      cargo: 'Designer de Moda na Labelle',
      imagem: 'https://pbs.twimg.com/media/FgbbdoyXgAAQrsD.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KICKS',
      cargo: 'Vendedor Independente',
      imagem: 'https://pbs.twimg.com/media/GAM4EybW0AAWlfQ.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BLATHERS',
      cargo: 'Diretor de Museu',
      imagem: 'https://play.nintendo.com/images/character-blathers-2x.0d30e304.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CELESTE',
      cargo: 'Astrônoma',
      imagem: 'https://pbs.twimg.com/media/EhUU4-FWkAA4IHK.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FLICK',
      cargo: 'Entomólogo e Artista',
      imagem: '	https://assetsio.gnwcdn.com/animal-crossing-flick.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'C.J.',
      cargo: 'Biólogo Marinho e Blogueiro',
      imagem: 'https://acnhcdn.com/latest/NpcPoster/NpcSpBey.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "KAPP'N",
      cargo: 'Guia Turístico',
      imagem: 'https://i1.sndcdn.com/artworks-yb5gdQjQJZpziHvA-JeFw4g-t500x500.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JOLLY REDD',
      cargo: 'Contrabandista',
      imagem: 'https://pbs.twimg.com/media/GNfjs7RWMAAV-Uk?format=png&name=360x360',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GULLIVER',
      cargo: 'Marinheiro',
      imagem: 'https://pbs.twimg.com/media/EY5VQdtX0AARW9V.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GULLIVARRR',
      cargo: 'Pirata',
      imagem: 'https://img.gamewith.jp/img/0c5cbc3379341832a667417724a8e068.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'HARVEY',
      cargo: 'Fotógrafo na Photopia',
      imagem: 'https://acnhcdn.com/latest/NpcPoster/NpcSpSpn.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'HARRIET',
      cargo: 'Estilista de Cabelo',
      imagem: 'https://stat.ameba.jp/user_images/20240330/01/pisara-island/5d/21/j/o0458045815419046694.jpg?cpd=800',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KATRINA',
      cargo: 'Cartomante',
      imagem: '	https://acnhcdn.com/latest/NpcPoster/NpcSpBpt.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'K.K. SLIDER',
      cargo: 'Cantor e Compositor',
      imagem: 'https://d.newsweek.com/en/full/1583752/kk-slider-animal-crossing-new-horizons.jpg?w=1600&h=1600&l=51&t=45&q=88&f=866b1f2d7f8a6f0d149f77acbd4439f1',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BREWSTER',
      cargo: 'Barista no The Roost',
      imagem: 'https://acnhcdn.com/latest/NpcPoster/NpcSpPge.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DAISY MAE',
      cargo: "Trader na Sow Joan's Stalk Market",
      imagem: 'https://acnhcdn.com/latest/NpcPoster/NpcSpBoc.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEIF',
      cargo: 'Horticultor',
      imagem: 'https://blog.go2games.com/wp-content/uploads/2021/12/EBd7gc4WwAAyD6D.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SAHARA',
      cargo: 'Vendedora Ambulante',
      imagem: 'https://pbs.twimg.com/media/FD2fsjJWUAY3SmB.jpg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito =!colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador} 
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
