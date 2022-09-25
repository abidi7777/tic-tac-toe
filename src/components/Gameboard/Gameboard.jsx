/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import {
  GRID_SIZE, EMPTY_STRING, PLAYER_X, PLAYER_O,
} from '../../App.constants';
import { flipPlayer, hasWon } from './Gameboard.utils';
import Cell from '../Cell';
import PropertyControlledComponent from '../PropertyControlledComponent';

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
  const {
    board, movesCount, winner, player,
  } = gameboardState;

  return (
    <div>
      <div>
        <PropertyControlledComponent shouldShow={Boolean(!winner && movesCount < 9)}>
          <p className="gameboard-info">
            Player
            {' '}
            <span>{player}</span>
            &apos;s turn
          </p>
        </PropertyControlledComponent>
        <PropertyControlledComponent shouldShow={Boolean(winner)}>
          <p className="gameboard-info">
            Player
            {' '}
            <span>{winner}</span>
            {' '}
            has won!
          </p>
        </PropertyControlledComponent>
        <PropertyControlledComponent shouldShow={Boolean(!winner && movesCount === 9)}>
          <p className="gameboard-info">It&apos;s a Tie!</p>
        </PropertyControlledComponent>
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
