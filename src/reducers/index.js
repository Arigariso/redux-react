import { combineReducers } from "redux";

const initialState = {
  convidados: []
}

function convidadosReducer(state = initialState, action) {

    if (action.type === "ADICIONAR") {
      return { convidados: [ ...state.convidados, { ...action.value }] };
    }
    else {
      return state;
    }
  }

  function nomeReducer(state = { nome: "Quem vai casar?" }, action) {

    if (action.type === "ALTERAR") {
      return { nome: action.value };
    }
    else {
      return state;
    }
  }

  const reducers = combineReducers({convidadosReducer, nomeReducer});


  export default reducers;