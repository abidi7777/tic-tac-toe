import PropTypes from 'prop-types';
import React from 'react';

import { noop } from '../../App.constants';

export default function Cell({ text, onClick }) {
  const onKeyDownHandler = (e) => {
    if (e.key === ' ') { onClick(); }
  };

  return (
    <div
      role="button"
      className="cell"
      tabIndex={0}
      onKeyDown={text ? undefined : onKeyDownHandler}
      onClick={text ? undefined : onClick}
    >
      {text}
    </div>
  );
}

Cell.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Cell.defaultProps = {
  text: null,
  onClick: noop,
};
