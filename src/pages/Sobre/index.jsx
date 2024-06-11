import { Link } from 'react-router-dom';
import styles from './Sobre.module.css';

function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                    <div className={styles.texto}>
                        <h2>Sobre</h2>
                        <p>
                            <span>Music Technology</span>
                        </p>
                            <p><b>Empresa focada no atendimento das necessidades de guitarristas e violonistas.</b></p>
                            <p><b>Somos especializados em guitarras, violões, amplificadores e efeitos em geral.</b></p>
                            <p><b>Apaixonados por timbres e soluções tecnológicas.</b></p>
                        <p><b>Oferecemos os seguintes serviços:</b></p>
                        <ul>
                            <li><b>Luteria</b></li>
                            <li><b>Aulas de Música</b></li>
                            <li><b>Montagem de Home Studio</b></li>
                            <li><b>Curso de pedais e efeitos</b></li>
                            <li><b>Consultoria de Boas Compras</b></li>
                            <li><b>Venda e Troca de Instrumentos</b></li>
                            <li><b>Compra de Instrumentos Usados</b></li>
                            <li><b>Montagem de setup de pedais e efeitos</b></li>
                        </ul> <br/>
                        <Link to="/servicos" className={`${styles.btn} ${styles.btn_red}`}>
                            Descrição de serviços
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sobre;
