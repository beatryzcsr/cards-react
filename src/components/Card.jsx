import styles from "./Card.module.css";

const cores = [
    "#fff", "#fff", 
    "#fff", "#fff", 
    "#fff", "#fff",
    "#fff", "#fff", 
    "#fff", "#fff", 
    "#fff", "#fff",
    "#fff", "#fff", 
    "#fff", "#fff", 
    "#fff", "#fff",
    "#fff", "#fff", 
    "#fff", "#fff", 
    "#fff", "#fff",
    "#fff", "#fff", 
];

function Card({ id, titulo, explicacao, exemplo, dica }) {

    const corDaBarra = cores[id % cores.length];

    return (
        
    <div className="card-tudo">
        <div className={styles.card}>
            
            <div className="top">
                <div className={styles.titulo}>{titulo}</div>
                <div className={styles.explicacao}>{explicacao}</div>
            </div>

            <div className={styles.barra} style={{ backgroundColor: corDaBarra }}/>

            <div className="bottom">
                <div className={styles.exemplo}> <p>Exemplo:</p>  <img src={exemplo} /> </div>
                <div className={styles.dica}>Dica: {dica}</div>
            </div>

        </div>
    </div>
    );
}

export default Card;
