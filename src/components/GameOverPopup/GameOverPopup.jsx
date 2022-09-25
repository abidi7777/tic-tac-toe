import PropTypes from 'prop-types';
import React from 'react';

export default function GameOverPopup({ text }) {
  return <div className="game-over-popup">{text}</div>;
}

GameOverPopup.propTypes = {
  text: PropTypes.string.isRequired,
};
