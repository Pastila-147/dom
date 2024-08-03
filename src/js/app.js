import GameBoard from './GameBoard';

const container = document.querySelector('.game-board-container');
const gameBoard = new GameBoard(container);
gameBoard.drawField();
gameBoard.moveGoblin();