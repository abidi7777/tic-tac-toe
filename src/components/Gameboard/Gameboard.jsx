/* eslint-disable react/no-array-index-key */
import React from 'react';
import cx from 'classnames';

import { GRID_SIZE } from '../../App.constants';
import Cell from '../Cell';
import GameOverPopup from '../GameOverPopup';
import PropertyControlledComponent from '../PropertyControlledComponent';
import useGameboard from './useGameboard';

export default function Gameboard() {
  const { gameboardState, resetGame, onCellClickHandler } = useGameboard();
  const {
    board, movesCount, winner, player,
  } = gameboardState;

  return (
    <div>
      <div className="gameboard-info">
        <div
          className={cx(
            'player-turn-info',
            {
              visible: !winner && movesCount < GRID_SIZE,
              invisible: winner || movesCount === GRID_SIZE,
            },
          )}
        >
          <h3 className={player === 'X' ? 'underline' : ''}>X</h3>
          <h3 className={player === 'O' ? 'underline' : ''}>O</h3>
        </div>
      </div>
      <div className="gameboard">
        {
          board.map((text, idx) => (
            <Cell
              text={text}
              key={idx}
              onClick={
                (winner || movesCount === GRID_SIZE)
                  ? undefined
                  : () => onCellClickHandler(idx)
              }
            />
          ))
        }
        <PropertyControlledComponent shouldShow={Boolean(winner)}>
          <GameOverPopup text={`Player ${winner} has won!`} />
        </PropertyControlledComponent>
        <PropertyControlledComponent shouldShow={Boolean(!winner && movesCount === GRID_SIZE)}>
          <GameOverPopup text="It&apos;s a Tie!" />
        </PropertyControlledComponent>
      </div>
      <div className="reset-btn-wrapper">
        <button type="button" id="reset-btn" onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}
