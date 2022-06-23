import React from 'react'
 
const Tabs = ({
  description,
  status,
  company
}) => {
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
        <p>{description}</p>
        <div className="details__block">
            {company && company.map((name, index)=>{
              if (index >= 2) {
                return
              }
              return(
                <div
                  className="details__feature"
                  key={index}
                >                 
                  <p>{
                    index === 1 
                    ? 'Produtor'
                    : 'Empresa'
                  } </p>
                  <span>{name.name}</span>
                </div>
                )
            })}
          <div className="details__feature">
            <p>Status</p> <span>{status}</span>
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
