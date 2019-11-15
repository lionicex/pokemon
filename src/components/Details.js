import React from 'react';
import '../css/detail.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Details = ({ name, url, id, type, height, abilities }) => (

  <div className='container'>
    <div className='containerDetail'>

      <div className="close">
        <Link to="/pokemon" className='link'>
          <ion-icon name="close" className='iconClose'></ion-icon>
        </Link>
      </div>

      <div className='imageContent'>
        <img className='image' src={url} />
      </div>

      <div className='titleContent'>
        <h2>{name}</h2>
      </div>

      <div className='dataContent'>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Abilities:</strong> {abilities}</p>
      </div>

    </div>
  </div>

);

Details.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  abilities: PropTypes.string.isRequired
};

export default Details;
