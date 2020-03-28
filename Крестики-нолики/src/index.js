import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    return(
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );
}

function Winner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i=0;i< lines.length; i++){
          const [a,b,c]=lines[i];
          if (squares[a] && squares [a] === squares[b] && squares [b] === squares[c] && squares [c]){
              return squares[a];
          }
      }
      return null;
}


class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            x: true,
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice(); 
        if (squares[i] == null && !Winner(this.state.squares)){
            squares[i]=this.state.x ? 'X' : 'O'; 
            this.setState({squares: squares, x: !this.state.x}) 
        }
    }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} 
    onClick={()=> this.handleClick(i)}/>;
  }

  render() {
    let status;
    if (Winner(this.state.squares)){
        status = 'Победитель: ' + Winner(this.state.squares);
    } else {
        status = 'Сейчас ходит: ' + (this.state.x ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="bruh" onClick={() => this.setState({squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ], x: true})}>Заного</button> 
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <div>Цель игры: расположить подряд три крестика или нолика</div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
