import './css/App.css';
import portafolio from './components/portafolio.jsx';
import contacto from './components/contacto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


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
        
      </header>

      <main>

      </main>

      <footer>
        <div>
          <div class="ft1-p1">Desarrollo del Portafolio Von Elm Lucas y Juan Ignacio Mendieta.</div>
          <p class="ft1-p2">Todos los derechos reservados.</p>
        </div>
        <div class="ft-img">
          <figure><img src="img/Logo.png" alt="logo-imagen"/></figure>
        </div>
      </footer>
    </div>
  );
}

export default App;
