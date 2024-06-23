import Personagem from '../Personagem'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const border = {borderColor: props.corPrimaria}
    
    return (
        //Renderização condicional no React: 
        (props.personagens && props.personagens.length > 0) ?<section className='time' style={css}>
            <h3 style={border}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagens.map(personagem => <Personagem 
                    corDeFundo={props.corPrimaria}
                    key={personagem.nome}
                    nome={personagem.nome} 
                    cargo={personagem.cargo} 
                    imagem={personagem.imagem}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time