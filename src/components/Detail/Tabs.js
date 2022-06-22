import React from 'react'
 
const Tabs = () => {

  function openTab(tabName) {
    let i;
    let x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  return (
    <>
      <div className="detail__tabContainer">
        <div
          className="detail__tabMenu--one"
          onClick={() => openTab('tabOne')}
        >
          <p>Overview</p>
        </div>
        <div
          className="detail__tabMenu--two"
          onClick={() => openTab('tabTwo')}
        >
          <p>Traillers</p>
        </div>
        <div
          className="detail__tabMenu--three"
          onClick={() => openTab('tabThree')}
        >
          <p>Links</p>
        </div>
        <div
          className="detail__tabMenu--Four"
          onClick={() => openTab('tabFour')}
        >
          <p>Detalhes</p>
        </div>
      </div>

      <div id="tabOne" className="tabs">
        <p>Professor Albus Dumbledore knows the powerful, dark wizard Gellert 
          Grindelwald is moving to seize control of the wizarding world. Unable 
          to stop him alone, he entrusts magizoologist Newt Scamander to lead an 
          intrepid team of wizards and witches. They soon encounter an array of old 
          and new beasts as they clash with Grindelwald's growing legion of followers.</p>
        <div className="details__block">
          <div className="details__feature">
            <p>Estrelando: </p> <span>werwerw</span>
          </div>
          <div className="details__feature">
            <p>Criado por: </p> <span>werwer</span>
          </div>
          <div className="details__feature">
            <p>Genero: </p> <span>werewr</span>
          </div>
        </div>
      </div>
      
      <div id="tabTwo" className="tabs" style={{display:'none'}}>
        <h2>Tab dois</h2>
        <p>Conteudo para a segunda aba</p>
      </div>
      
      <div id="tabThree" className="tabs" style={{display:'none'}}>
        <h2>Tab tres</h2>
        <p>Conteudo para a terceira aba</p>
      </div>

      <div id="tabFour" className="tabs" style={{display:'none'}}>
        <h2>Tab quatro</h2>
        <p>Conteudo para a quarta aba</p>
      </div>
    </>
  );
}
 
export default Tabs;
