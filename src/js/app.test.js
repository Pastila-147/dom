import GameBoard from '../js/GameBoard';

const container = document.createElement('div');
container.id = 'game-board-container';
const gameBoard = new GameBoard(container);

test('Draw field', () => {
  gameBoard.drawField();
  expect(container.querySelectorAll('.cell').length).toBe(16);
});

test('getRandomCell method with index', () => {
  gameBoard.drawField();
  const currentIndex = -1;
  const newIndex = gameBoard.getRandomCell(currentIndex);
  expect(newIndex).toBeGreaterThanOrEqual(0);
  expect(newIndex).toBeLessThan(16);
});