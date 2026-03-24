import Card from "./components/Card";
import "./App.css";

//importando as imagens de exemplo
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/img6.png";
import img7 from "../public/img7.png";
import img8 from "../public/img8.png";
import img9 from "../public/img9.png";
import img10 from "../public/img10.png";
import img11 from "../public/img11.png";
import img12 from "../public/img12.png";
import img13 from "../public/img13.png";
import img14 from "../public/img14.png";
import img15 from "../public/img15.png";
import img16 from "../public/img16.png";
import img17 from "../public/img17.jpg";
import img18 from "../public/img18.jpg";
import img19 from "../public/img19.jpg";
import img20 from "../public/img20.jpg";
import img21 from "../public/img21.jpg";
import img22 from "../public/img22.jpg";
import img23 from "../public/img23.jpg";
import img24 from "../public/img24.jpg";
import img25 from "../public/img25.jpg";
import img26 from "../public/img26.jpg";
import teclado from "../public/teclado.png";
import notFound from "../public/notFound.png";
import computador from "../public/computador.png";
import codigo2 from "../public/codigo2.png";
import codigo from "../public/codigo.png";

//inserindo os dados
const card = [
  {
    id: 1,
    titulo: "o que é React",
    explicacao:
      "React é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook (Meta) em 2013, focada na criação de interfaces de usuário (UI) interativas e eficientes para aplicações web e móveis.",
    exemplo: img1,
    dica: "React não é framework, é biblioteca.",
  },
  {
    id: 2,
    titulo: " O que é vite ",
    explicacao:
      "Ele otimiza o desenvolvimento ao utilizar módulos ES nativos no navegador, oferecendo recarga instantânea de arquivos (Hot Module Replacement - HMR) e builds de produção muito ágeis usando.",
    exemplo: img2,
    dica: "Pense em componentes como peças de LEGO.",
  },
  {
    id: 3,
    titulo: "Criando um projeto React com Vite",
    explicacao: "É necessário configurar o Vite a partir do prompt de comando.",
    exemplo: img3,
    dica: "Vite inicia o projeto muito mais rápido que CRA.",
  },
  {
    id: 4,
    titulo: "Estrutura  de pastas do projeto react ",
    explicacao: "Confira sempre o funcionamento das pastas.",
    exemplo: img4,
    dica: "Sempre rode npm install antes de iniciar o projeto.",
  },
  {
    id: 5,
    titulo: "Arquivo main.jsx",
    explicacao:
      "Ele serve para conectar o componente raiz da aplicação (App.jsx) ao DOM real do navegador, renderizando a interface dentro de um elemento HTML específico.",
    exemplo: img5,
    dica: "Use npm run dev para rodar o projeto no Vite.",
  },
  {
    id: 6,
    titulo: "arquivo app.jsx",
    explicacao:
      "É o componente raiz ou principal na maioria das aplicações React. Ele serve como o ponto de entrada de alto nível onde a estrutura da sua interface de usuário (UI) começa a ser montada e organizada.",
    exemplo: img6,
    dica: "main.jsx é o ponto de entrada da aplicação.",
  },
  {
    id: 7,
    titulo: " o que é jsx ",
    explicacao:
      "É uma extensão de sintaxe para JavaScript, usada principalmente com o React para descrever interfaces de usuário (UI) de forma semelhante ao HTML. Ela facilita a criação de componentes, permitindo escrever estrutura e lógica no mesmo arquivo, sendo depois compilada para JavaScript puro.",
    exemplo: img7,
    dica: "App.jsx é o componente principal.",
  },
  {
    id: 8,
    titulo: "diferença entre HTML e JSX ",
    explicacao:
      "HTML é uma linguagem de marcação interpretada diretamente pelo navegador para definir a estrutura de páginas web. Já o JSX (JavaScript XML) é uma extensão de sintaxe do JavaScript, usada no React para criar componentes, que parece com HTML, mas é convertido em JavaScript puro antes de rodar no navegador.",
    exemplo: img8,
    dica: "Crie uma pasta components para organizar melhor.",
  },
  {
    id: 9,
    titulo: "expressões dentro do jsx {}",
    explicacao:
      "No React permitem que você incorpore lógica JavaScript diretamente na estrutura de marcação (que se parece com HTML). Tudo o que estiver dentro das chaves é avaliado e seu resultado é renderizado no local.",
    exemplo: img9,
    dica: "Separe arquivos por responsabilidade.",
  },
  {
    id: 10,
    titulo: "fragment (<> </>)",
    explicacao:
      "Serve para agrupar uma lista de elementos filhos sem adicionar um nó extra (como uma div) ao DOM final.",
    exemplo: img10,
    dica: "JSX parece HTML, mas é JavaScript.",
  },
  {
    id: 11,
    titulo: "Classes CSS no JSX (className)",
    explicacao:
      "O className no JSX serve para aplicar classes CSS a elementos React, funcionando como o atributo class no HTML tradicional. Como class é uma palavra reservada no JavaScript, o React utiliza className para evitar conflitos de sintaxe.",
    exemplo: img11,
    dica: "Use {} para colocar JS dentro do JSX.",
  },
  {
    id: 12,
    titulo: "O que são componentes",
    explicacao:
      "São blocos de construção fundamentais, independentes e reutilizáveis. Eles funcionam como funções JavaScript que retornam JSX (uma sintaxe que parece HTML), permitindo modularizar a aplicação em partes menores, como botões, formulários ou cabeçalhos.",
    exemplo: img12,
    dica: " class vira className no JSX.",
  },
  {
    id: 13,
    titulo: "Criando um componente funcional ",
    explicacao:
      "Um componente funcional no React é uma função JavaScript simples que aceita propriedades como entrada e retorna elementos JSX para renderizar a interface. Eles são componentes sem estado (stateless) por padrão, mais leves e concisos que componentes de classe.",
    exemplo: img13,
    dica: "Use fragment <> </> para evitar divs desnecessárias.",
  },
  {
    id: 14,
    titulo: "Reutilização de componentes ",
    explicacao:
      "É a prática de utilizar partes de código, módulos, UI (interfaces de usuário) ou arquiteturas pré-existentes para criar novos sistemas, em vez de reescrevê-los. Isso aumenta a produtividade, reduz custos, garante consistência e acelera o tempo de desenvolvimento.",
    exemplo: img14,
    dica: "Componentes devem começar com letra maiúscula.",
  },
  {
    id: 15,
    titulo: "Organização de componentes em pastas ",
    explicacao:
      "Deve seguir uma estrutura lógica e semântica, facilitando a manutenção e escala do projeto, agrupando arquivos relacionados (estilos, testes, lógica) dentro da pasta do próprio componente.",
    exemplo: img15,
    dica: "Cada  componente deve ter uma única responsabilidade.",
  },
  {
    id: 16,
    titulo: "O que são props ",
    explicacao:
      "São mecanismos que passam dados de um componente pai para um filho. Funcionam como argumentos de funções, tornando os componentes flexíveis, reutilizáveis, personalizáveis (textos, estilos ou funções) e somente leitura (imutáveis).",
    exemplo: img16,
    dica: "Reutilize componentes para evitar repetição de código.",
  },
  {
    id: 17,
    titulo: "Passando props para componentes ",
    explicacao:
      "Passar props (propriedades) no React consiste em enviar dados do componente pai para o filho, tornando-os reutilizáveis. Define-se um atributo na tag do componente no pai e lê-se esse valor através do objeto props no parâmetro da função do componente filho.",
    exemplo: img17,
    dica: "Props são somente leitura (imutáveis).",
  },
  {
    id: 18,
    titulo: "Props com valores padrão ",
    explicacao:
      "Passar props com valores padrão (default props) no React é feito utilizando desestruturação no parâmetro do componente ou definindo a propriedade default Props. Isso garante que o componente tenha um valor inicial caso a prop não seja passada na chamada.",
    exemplo: img18,
    dica: "Use desestruturação para deixar o código mais limpo.",
  },
  {
    id: 19,
    titulo: "Desestruturação de props",
    explicacao:
      "A desestruturação de props no React é uma técnica JS que extrai propriedades de objetos diretamente nos parâmetros do componente, tornando o código mais limpo, legível e eliminando a necessidade de repetir props.",
    exemplo: img19,
    dica: "Defina valores padrão para evitar erros.",
  },
  {
    id: 20,
    titulo: "O que é useState",
    explicacao:
      "O useState é um Hook do React essencial para componentes funcionais, que gerencia estados locais que, quando atualizados, causam a re-renderização da tela. Ele retorna um array com o valor atual e uma função para atualizá-lo, ideal para contadores, formulários e toggles. ",
    exemplo: img20,
    dica: " useState guarda dados que mudam na tela.",
  },
  {
    id: 21,
    titulo: "Atualizando estado",
    explicacao:
      "Utilize a função de atualização (setEstado) fornecida, passando o novo valor diretamente ou através de uma função callback para estados dependentes do anterior.",
    exemplo: img21,
    dica: "Nunca altere o state diretamente (sempre use setter).",
  },
  {
    id: 22,
    titulo: "Estado em formulários",
    explicacao:
      "Permite controlar os valores dos inputs de forma dinâmica, nos quais os dados digitados são armazenados e atualizados em tempo real, facilitando a manipulação, validação e envio das informações no React.",
    exemplo: img22,
    dica: "State atualiza a interface automaticamente.",
  },
  {
    id: 23,
    titulo: " Estado com objetos ou arrays",
    explicacao:
      "Exige seguir o princípio da imutabilidade. Isso significa que você nunca deve alterar o objeto ou array original diretamente, mas sim criar uma cópia atualizada dele.",
    exemplo: img23,
    dica: "Para objetos/arrays, use spread ... ao atualizar.",
  },
  {
    id: 24,
    titulo: "Renderização condicional",
    explicacao:
      "Permite exibir diferentes elementos na tela dependendo de uma condição. É como um porteiro digital: só entra quem atende ao critério. Muito usada com if, operador ternário (? :) ou &&.",
    exemplo: img24,
    dica: "Use && (simples) ou ? : (duas opções).",
  },
  {
    id: 25,
    titulo: "Listas com map()",
    explicacao:
      "O map() percorre um array e transforma cada item em um elemento JSX. É tipo uma linha de montagem que pega dados e entrega componentes prontos na tela.",
    exemplo: img25,
    dica: "Use para criar listas dinâmicas.",
  },
  {
    id: 26,
    titulo: "A propriedade key nas listas",
    explicacao:
      "A key é um identificador único para cada elemento da lista. Ela ajuda o React a entender o que mudou, foi adicionado ou removido — tipo etiquetas em caixas de mudança.",
    exemplo: img26,
    dica: "Use um identificador único (evite índice).",
  },
];

function App() {
  return (
    <div className="container">

      <div className="imagensRodape">
     <img src={teclado} alt="Teclado" />
     <img src={notFound} alt="NotFound" />
     <img src={computador} alt="NotFound" />
     <img src={codigo2} alt="NotFound" />
     <img src={codigo} alt="NotFound" />
      </div>

      <div className="title">

       <h1>React</h1>
       <h1>+</h1>
       <h1>Vite</h1> 
       
      </div>

<div className="container2">

      <h1>Cards de estudos</h1>

      <p className="subtitulo">
        Cards de estudos para revisão de conteúdos sobre React, com explicações
        e exemplos práticos.
      </p>

      <div className="card">
        {card.map((card) => (
          <Card
            id={card.id}
            titulo={card.titulo}
            explicacao={card.explicacao}
            exemplo={card.exemplo}
            dica={card.dica}
          />
        ))}
      </div>
</div>

    </div>
  );
}

export default App;
