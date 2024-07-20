// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Componentes/Home";
import TicTacToe from "./Componentes/TicTacToe";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = { name: "Jugador X" };
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Home />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;