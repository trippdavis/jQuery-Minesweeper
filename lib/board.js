(function () {
  if (typeof Minesweeper === "undefined") {
    window.Minesweeper = {};
  }

  var Board = Minesweeper.Board = function (rows, cols, numBombs) {
    this.numBombs = numBombs;
    this.rows = rows;
    this.cols = cols;
    this.squares = [];
    this.createSquares();
    this.bombLocations();
  };

  Board.prototype.createSquares = function () {
    for (var i = 0; i < this.rows; i++) {
      var row = [];
      for (var j = 0; j < this.cols; j++) {
        row.push(new Minesweeper.Square());
      }
      this.squares.push(row);
    }
  };

  Board.prototype.bombLocations = function () {
    var bombCount = 0;
    while (bombCount < this.numBombs) {
      var row = Math.floor(Math.random() * this.rows);
      var col = Math.floor(Math.random() * this.cols);
      if (!this.squares[row][col].bomb) {
        this.squares[row][col].bomb = true;
        bombCount++;
      }
    }
  };
})();
