import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'
function Home() {
  return (
    <>

            <Container>
        <section className={styles.home}> 
          <div className={styles.apresentacao}>
            <p>
              Music Technology <br />
              <span>Movidos por amor a</span> <br />
              Música e Tecnologia
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Conheça-nos melhor
            </Link>
          </div>
          
        </section>
      </Container>

     
    </>

  )

}
export default Home;