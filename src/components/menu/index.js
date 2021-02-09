import React from 'react';
import { useSelector } from 'react-redux';

  function Banner() {
    const stateNome = useSelector((state) =>
        state.nomeReducer.nome
    )

    return (
        <div className="noivos">
        {stateNome} <br/>           
        </div>
    )
  }

  export default Banner;
    


    