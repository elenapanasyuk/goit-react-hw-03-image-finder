import { Component } from 'react';
import api from './services/imagesApi';

class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: '',
    page: 1,
    error: null,
    isloading: false,
    showModal: false,
  };
  render() {
    return (
      <div>
        {/* <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}
export default App;
