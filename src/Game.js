import React from "react";
import "./Game.css";

const CELL_SIZE = 20;
const WIDTH = 1200; 
const HEIGHT = 700;

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      cells: [],
      interval: 100,
      isRunning: false
    }

    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();
  }

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  }

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  runIteration = () => {
    // create a new board for the next gen
    let newBoard = this.makeEmptyBoard();

    // loop through y (rows)
    for (let y = 0; y < this.rows; y++) {
      // loop through x (cols)
      for (let x = 0; x < this.cols; x++) {
        // calculate how many neighbors (x, y) has
        let neighbors = this.calculateNeighbors(this.board, x, y);

        // check gol's rules
        if (this.board[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }

    // set the board to the new board we created earlier
    this.board = newBoard;

    this.setState({ cells: this.makeCells() });

    this.timeoutHandler = window.setTimeout(() => { 
      this.runIteration();
    }, this.state.interval);  
  }

  handleRandom = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = (Math.random() >= 0.5);
      }
    }

    this.setState({ cells: this.makeCells() });
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
        neighbors++;
      }
    }

    return neighbors;
  }

  handleClear = () => {
    // create empty board
    this.board = this.makeEmptyBoard();
    // with dead cells
    this.setState({ cells: this.makeCells() });
  }

  handleIntervalChange = (event) => {
    this.setState({ interval: event.target.value });
  }

  // Create an empty board (set all cells to false)
  makeEmptyBoard = () => {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }

    return board;  
  }

  // Create cells from this.board  
  makeCells = () => {
    let cells = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }

    return cells;  
  } 

  getElementOffset = () => {
    const rect = this.boardRef.getBoundingClientRect();
    const doc = document.documentElement;
    return {
      x: (rect.left + window.pageXOffset) - doc.clientLeft,
      y: (rect.top + window.pageYOffset) - doc.clientTop
    }
  }

  handleClick = (event) => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / CELL_SIZE);
    const y = Math.floor(offsetY / CELL_SIZE);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({ cells: this.makeCells() });
  }

  render() {
    const { cells } = this.state;
    return (
      <div className="container">
        <h1 className="title">Conway's Game of Life</h1>
        <div 
          className="Board" 
          style={{width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}} 
          onClick={this.handleClick} 
          ref={(n) => { this.boardRef = n; }}>
          {cells.map(cell => (<Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/> ))}
        </div>

        <div className="controls">
          Update every <input value={this.state.interval} onChange={this.handleIntervalChange} /> ms
          {this.state.isRunning ?
              <button className="button" onClick={this.stopGame}>Stop</button> :
              <button className="button" onClick={this.runGame}>Run</button>
          }
          <button className="button" onClick={this.handleRandom}>Random</button>
          <button className="button" onClick={this.handleClear}>Clear</button>
        </div>
      </div>
    )
  }
}

class Cell extends React.Component {
  render() {
    const { x, y } = this.props;
    return (
      <div className="Cell" style={{left: `${CELL_SIZE * x + 1}px`, top: `${CELL_SIZE * y + 1}px`, width: `${CELL_SIZE - 1}px`, height: `${CELL_SIZE - 1}px`}} />
    );  
  }
}

export default Game;