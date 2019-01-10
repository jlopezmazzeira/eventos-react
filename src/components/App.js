import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Eventos from './Eventos';

class App extends Component {
  token = 'D45Y24W5GPJBPPRHHO7P';

  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount(){
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
          .then(respuesta => {
            return respuesta.json()
          })
          .then(categorias => {
              this.setState({
                categorias: categorias.categories
              });
          });
  }

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categorias=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es_ES`;

    await fetch(url)
          .then(respuesta => {
            return respuesta.json()
          })
          .then(eventos => {
              this.setState({
                eventos: eventos.events
              });
          });
  }

  render() {
    return (
      <div className="App">
        <Header titulo="Eventos" />
          <div className="uk-container">
            <Formulario
              categorias={this.state.categorias}
              obtenerEventos={this.obtenerEventos}
            />
            <Eventos  eventos={this.state.eventos}/>
          </div>
      </div>
    );
  }
}

export default App;
