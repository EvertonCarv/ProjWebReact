

/*function App() {
  return (
    <div>
      Olá, Everton!
    </div>
  );
}*/

import React, { Component } from "react";

/*import Routes from "./routes"; hoje*/


/*function App () {
  return(
    <div>
        <Routes />
    </div>
  );
};*/
import Main from './pages/Main/index'
import Rodape from './pages/Main/Rodape'
import Cabecalho from "./pages/Main/Cabecalho";



class App extends Component {
  render() {
    return(
      <div className="App">
         <Cabecalho />
          <Main />
          <Rodape />         
      </div>
    );
  }
}

export default App;
