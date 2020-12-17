import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Please add search query');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchbutton}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

// function Searchbar({ value, handleSubmit, handleChange }) {
//   return (
//     <header className={s.header}>
//       <form className={s.form} onSubmit={handleSubmit}>
//         <button type="submit" className={s.searchbutton}>
//           <span className={s.label}>Search</span>
//         </button>

//         <input
//           className={s.input}
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//           value={value}
//           onChange={handleChange}
//         />
//       </form>
//     </header>
//   );
// }

// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   handleNameChange: PropTypes.func.isRequired,
// };

export default Searchbar;
