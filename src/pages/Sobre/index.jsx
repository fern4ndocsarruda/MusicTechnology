import { Link } from 'react-router-dom'
import styles from './Sobre.module.css'
import gibson from './imagens/gibson.png'
import fender from './imagens/fender.png'
import marshall from './imagens/marshall.jpg'
import vox from './imagens/vox.png'
import wampler from './imagens/wampler.gif'
import strymon from './imagens/strymon.gif'
import martin from './imagens/martin.png'
import avatar from './imagens/avatar.jfif'


function Sobre() {
    return (
        <>
        <section className={styles.sobre}>
        <div className={styles.bio}>
            <img src={avatar} className={styles.avatar}/>
        <div className={styles.texto}>
          
            
                <h2>Sobre</h2>
                <p>
                    <span> Music Technology </span>
                    <strong>Música e Tecnologia</strong>
                </p>
                <p>
                Empresa com focada no atendimento das necessidades de guitarristas e violonistas, especializada em guitarras, violões, amplificadores e efeitos em geral. Apaixonados por timbres e possibilidades diferentes para resolver problemas comuns. Somos grande entusiastas de soluções tecnológicas para problemas do dia a dia que afetam os músicos. Estamos prontos para solucionar problemas e criar soluções úteis de forma dinâmica e acertiva.
                </p>
                <p> Oferecemos os seguintes serviços:</p>
                <p></p>
                
                <ul>
                <li>Luteria</li>
               
                <li>Aulas de Música e Áudio</li>
                <li>Montagem de Home Studio</li>
                <li>Curso de pedais e efeitos</li>
                <li>Montagem de setup de pedais e efeitos</li>
                </ul>
            <br/>
            <br/>

            <Link to="/servicos" className={`${styles.btn} ${styles.btn_red}`}>
              Descrição de serviços
            </Link>

               
            
            </div>
            </div>
            <div className={styles.techs}>
                
            </div>
            <div className={styles.icones}>
                <img src={gibson} alt = 'logo da Gibson'/>
                <img src={fender} alt = 'logo da Fender'/>
                <img src={marshall} alt = 'logo da Marshall'/>
                <img src={vox} alt = 'logo da Vox'/>
                <img src={wampler} alt = 'logo da Wampler'/>
                <img src={strymon} alt = 'Logo da Strymon'/>
                <img src={martin} alt = 'Logo da Martin'/>
            
            </div>

            
            </section>
        </>
    )
}
export default Sobre