/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import {
  GRID_SIZE, EMPTY_STRING, PLAYER_X, PLAYER_O,
} from '../../App.constants';
import { flipPlayer, hasWon } from './Gameboard.utils';
import Cell from '../Cell';

export default function Gameboard() {
  const [gameboardState, setGameboardState] = useState({
    board: Array(GRID_SIZE).fill(EMPTY_STRING),
    player: Math.random() > 0.5 ? PLAYER_X : PLAYER_O,
    movesCount: 0,
    winner: EMPTY_STRING,
  });
  const onCellClickHandler = (cellIdx) => {
    const { board, player, movesCount } = gameboardState;
    const newBoard = board.slice();
    newBoard[cellIdx] = player;

    setGameboardState({
      ...gameboardState,
      board: newBoard,
      player: flipPlayer(player),
      movesCount: movesCount + 1,
      winner: hasWon(newBoard) ? player : EMPTY_STRING,
    });
  };
  const { board, winner, player } = gameboardState;

  return (
    <div>
      <div>
        <h3 className="player-turn-info">
          Player
          {' '}
          <span>{player}</span>
          &apos;s turn
        </h3>
      </div>
      <div className="gameboard">
        {
        board.map((text, idx) => (
          <Cell
            text={text}
            key={idx}
            onClick={winner ? undefined : () => onCellClickHandler(idx)}
          />
        ))
      }
      </div>
    </div>
  );
}
