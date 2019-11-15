import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from "react-redux";
import { showPokemons, showNext } from "../store/actions/pokemonActions";
import '../css/list.css';


export class ListContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showPokemons(this.props.url);
  }

  render() {
    return (
      <div>
        <section className='containerList'>

          {Object.keys(this.props.pokemons).map(index => (
            <Card
              key={index}
              name={this.props.pokemons[index].name}
              url={"http://pokestadium.com/sprites/xy/" + this.props.pokemons[index].name + ".gif"}
            />
            
          ))}

        </section>
        <div className='buttonContent'>
          {
            this.props.prev === null ? ''
              : <button className='button' onClick={() => { this.props.showPokemons(this.props.prev); }}>Prev</button>
          }
          <button className='button' onClick={() => { this.props.showPokemons(this.props.next); }}>Next</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  next: state.pokemons.next,
  prev: state.pokemons.prev,
  url: state.pokemons.url
});

export default connect(mapStateToProps, { showPokemons, showNext })(ListContainer);


