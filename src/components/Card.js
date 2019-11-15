import React from 'react';
import '../css/card.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ name, url }) => (

  <Link className='link' to={'/pokemon/' + name}>
    <div className='containerCard'>
      <div className='imageContent'>
        <img className='image' src={url} />
      </div>
      <div className='titleContent'>
        <h2>{name}</h2>
      </div>
    </div>
  </Link>

);
Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
