import Card from './components/Card';
import './App.css'

//importando as imagens de exemplo
import exemplo1 from "../public/teste.png";

//inserindo os dados
const cursos= [
  {id:1, titulo:"", explicacao:"", exemplo: exemplo1},
  {id:2, titulo:'', exelicacao:"", exemplo: ''},
  {id:3, titulo:'', explicacae:"", exemplo: ''},
  {id:4, titulo:'', explicacao:"", exemplo: ''},
  {id:5, titulo:'', explicacao:"", exemplo: ''},
  {id:6, titulo:'', explicacao:"", exemplo: ''},
  {id:7, titulo:'', explicacao:"", exemplo: ''},
  {id:8, titulo:'', explicacao:"", exemplo: ''},
  {id:9, titulo:'', explicacao:"", exemplo: ''},
  {id:10, titulo:'', explicacao:"", exemplo: ''},
  {id:11, titulo:'', explicacao:"", exemplo: ''},
  {id:12, titulo:'', explicacao:"", exemplo: ''},
  {id:13, titulo:'', explicacao:"", exemplo: ''},
  {id:14, titulo:'', explicacao:"", exemplo: ''},
  {id:15, titulo:'', explicacao:"", exemplo: ''},
  {id:16, titulo:'', explicacao:"", exemplo: ''},
  {id:17, titulo:'', explicacao:"", exemplo: ''},
  {id:18, titulo:'', explicacao:"", exemplo: ''},
  {id:19, titulo:'', explicacao:"", exemplo: ''},
  {id:20, titulo:'', explicacao:"", exemplo: ''},
  {id:21, titulo:'', explicacao:"", exemplo: ''},
  {id:22, titulo:'', explicacao:"", exemplo: ''},
  {id:23, titulo:'', explicacao:"", exemplo: ''},
  {id:24, titulo:'', explicacao:"", exemplo: ''},
  {id:25, titulo:'', explicacao:"", exemplo: ''},
  {id:26, titulo:'', explicacao:"", exemplo: ''},
  {id:27, titulo:'', explicacao:"", exemplo: ''},
  {id:28, titulo:'', explicacao:"", exemplo: ''},
  {id:29, titulo:'', explicacao:"", exemplo: ''},
  {id:30, titulo:'', explicacao:"", exemplo: ''},
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
          />

        ))}
      </div>
    </div>
  )}

  export default App
