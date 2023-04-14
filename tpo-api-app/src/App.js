import "./css/App.css";

import Header from "./shared/mainNavegacion/MainHeader";


import Footer from "./shared/mainNavegacion/Footer";

function App() {
  return (
    <div className="App">
      <header>
        {/* <div className='hd-flex'>
          <h1>HOLA</h1>
          <div class="ft-img">
            <figure><img src="img/Logo.png" alt="logo-imagen"/></figure>
          </div>
        </div> */}
        <Header></Header>
      </header>

      <main></main>

      <Footer />
    </div>
  );
}

export default App;
