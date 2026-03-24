import Card from './components/Card';
import './App.css'

//importando as imagens de exemplo
import img1 from "../public/img1.png";
import img2 from "../public/img1.png";
import img3 from "../public/img1.png";
import img4 from "../public/img1.png";
import img5 from "../public/img1.png";
import img6 from "../public/img1.png";
import img7 from "../public/img1.png";
import img8 from "../public/img1.png";
import img9 from "../public/img1.png";
import img10 from "../public/img1.png";
import img11 from "../public/img1.png";
import img12 from "../public/img1.png";
import img13 from "../public/img1.png";
import img14 from "../public/img1.png";
import img15 from "../public/img1.png";



//inserindo os dados
const cursos= [
  {id:1, titulo:"o que é React", explicacao:"React é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook (Meta) em 2013, focada na criação de interfaces de usuário (UI) interativas e eficientes para aplicações web e móveis", exemplo: img1, dica: 'React não é framework, é biblioteca'},
  {id:2, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:3, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:4, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:5, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:6, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:7, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:8, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:9, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:10, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:11, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:12, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:13, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:14, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:15, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:16, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:17, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:18, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:19, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:20, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:21, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:22, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:23, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:24, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:25, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:26, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:27, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:28, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:29, titulo:'', explicacao:"", exemplo: '', dica: ''},
  {id:30, titulo:'', explicacao:"", exemplo: '', dica: ''},
]

function App() {
  return (
    <div className= "container">
      <h1>Cards de estudos</h1>
      <p className="subtitulo">
        Cards de estudos para revisão de conteúdos sobre React, com explicações e exemplos práticos.
      </p>




      <div className= "card">
        {cursos.map((card) => (
          <Card
          id= {card.id}
          titulo= {card.titulo}
          explicacao= {card.explicacao}
          exemplo= {card.exemplo}
          dica= {card.dica}
          />

        ))}
      </div>
    </div>
  )}

  export default App
