import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/fb.png" alt='Logo do Facebook'/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/tw.png" alt='Logo do Twitter'/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/ig.png" alt='Logo do Instagram'/>
                </a>
            </div>
            <img src="/imagens/logo.png" alt="Logo do Organo"/>
            <p>Desenvolvido por Dhara Castilho</p>
        </footer>
    )
}

export default Rodape