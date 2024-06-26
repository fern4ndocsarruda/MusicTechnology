import React from 'react';
import Card from '../../components/Card';
import styles from './Servicos.module.css';


function Servicos() {
    const services = [
        { title: "Luteria", description: "Reparo, modificação e manutenção de instrumentos musicais. Nesta modalidade oferecemos orientação para compra de instrumentos." },
        { title: "Venda e troca de instrumentos", description: "Realizamos a venda de instrumentos e equipamentos. Recebemos instrumentos como parte do pagamento, mediante a avaliação." },
        { title: "Compra de usados", description: "Avaliamos instrumentos e equipamentos usados a fim de adquiri-los. É importante frisar que a avaliação não é uma garantia de compra e que compramos abaixo do valor de mercado." },
        { title: "Montagem de setup de pedais e efeitos", description: "Montamos seu pedalboard de acordo com as suas necessidades. Começamos na concepção focada na proposta do trabalho e vamos até a finalização do projeto de acordo com as especificações e possibilidades do cliente." },
        { title: "Montagem de Home Studio", description: "Montamos seu Home Studio de acordo com as suas necessidades. Começamos na concepção focada na proposta do trabalho e vamos até a finalização do projeto de acordo com as especificações e possibilidades do cliente." },       
        { title: "Curso de pedais e efeitos", description: "Nosso curso possibilita ao aluno independência a partir do conhecimento que será adquirido. Ensinamos desde os fundamentos do áudio, passando pela concepção de cada efeito e o uso de diversos equipamentos na prática." },
        { title: "Aulas de Música", description: "Oferecemos aulas de música para todos os níveis e idades utilizando método personalizado de acordo com o nível de conhecimento, habilidade e necessidade de cada aluno." },
        { title: "Consultoria de Boas Compras", description: "Oferecemos consultoria para que a aquisição de equipamentos de terceiros seja acertiva e atenda às necessidades do cliente." },
       
        
                
    
    ];

    return (
        <>
        <div className={styles.titulo}>
            <h2>Serviços</h2>
        </div>
        
            <section className={styles.servicos}>
                
                {services.map((service, index) => (
                    <Card 
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </section>
            
        </>
    );
}

export default Servicos;
