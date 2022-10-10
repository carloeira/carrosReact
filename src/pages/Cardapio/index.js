import React from "react";
import Item from "./components/Item";

const API_URL = 'http://192.168.2.145:8000';

export default function Cardapio() {
  const [cardapio, setCardapio] = React.useState([]);
  
  React.useEffect(() => {
    fetch(API_URL + '/items')
      .then(response => response.json())
      .then(dados => setCardapio(dados));
  }, []);

  return (
    <div>
      Faça seu pedido:
      <hr/>    
      {cardapio.map(cadaUm => <Item key={cadaUm.id} nome={cadaUm.nome}/>)}
    </div>
  );
}
