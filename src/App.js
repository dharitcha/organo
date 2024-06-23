import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  
  const times = [
    {
      nome: 'Administradores',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Lojistas',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Cientistas',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Exploradores',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Místicos',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Visitantes',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Empreendedores',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [personagens, setPersonagem] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagem([...personagens, personagem])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
