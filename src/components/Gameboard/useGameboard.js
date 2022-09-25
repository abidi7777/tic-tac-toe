import { useState } from 'react';

import { EMPTY_STRING } from '../../App.constants';
import { flipPlayer, getInitialState, hasWon } from './Gameboard.utils';

export default function useGameboard() {
  const [gameboardState, setGameboardState] = useState(getInitialState());
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
  const resetGame = () => setGameboardState(getInitialState());

  return { gameboardState, resetGame, onCellClickHandler };
}
