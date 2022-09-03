import { PLAYER_X, PLAYER_O } from '../../App.constants';

export const flipPlayer = (text) => (text === PLAYER_X ? PLAYER_O : PLAYER_X);

export const hasWon = (board) => {
  const winningStates = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningStates.length; i += 1) {
    const [a, b, c] = winningStates[i];

    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
};
