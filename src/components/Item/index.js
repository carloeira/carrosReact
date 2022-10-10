import { useState } from "react";


export default function Item(props) {
  const [quantidade, setQuantidade] = useState(1);

const add = () => {
  setQuantidade(quantidade+1)
}

const remove = () => {
  if (quantidade === 0) {
    return;
  }
  setQuantidade(quantidade-1)
}

  return (
    <div>
      {props.nome}
      <button onClick={remove}>-</button>
      {quantidade}
      <button onClick={add}>+</button>
    </div>
  );
}

