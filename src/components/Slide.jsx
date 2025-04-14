function Slide({ slide }) {
    return (
      <div className="slide">
        <h2>{slide.titulo}</h2>
        <p>{slide.conteudo}</p>
      </div>
    );
  }
  
  export default Slide;
      