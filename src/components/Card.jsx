import styles from "./Card.module.css";

const cores = [
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7",
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7",
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7",
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7",
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7", 
    "#321bc7", "#321bc7",
];

function Card({ id, titulo, explicacao, exemplo }) {

    const corDaBarra = cores[id % cores.length];

    return (

        <div className={styles.card}>

            <div className={styles.titulo}>{titulo}</div>

            <div className={styles.explicacao}>{explicacao}</div>

            <div className={styles.barra} style={{ backgroundColor: corDaBarra }}/>

            <div className={styles.exemplo}>Exemplo: <br />{exemplo}</div>

        </div>
    );
}

export default Card;
