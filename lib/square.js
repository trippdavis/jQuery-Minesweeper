(function () {
  if (typeof Minesweeper === "undefined") {
    window.Minesweeper = {};
  }

  var Square = Minesweeper.Square = function (board, row, col) {
    this.board = board;
    this.row = row;
    this.col = col;
    this.flagged = false;
    this.revealed = false;
    this.bomb = false;
  };

  Square.prototype.reveal = function () {
    this.revealed = true;
    var rowSquares = $('[data-row="' + this.row + '"]');
    var $square = $(rowSquares[this.col]);
    $square.removeClass("unrevealed-square");
    if (this.bomb) {
      $square.addClass("revealed-bomb");
      this.board.lost();
    } else {
      var bombCount = this.neighborBombs();
      if (bombCount > 0) {
        $square.html("<div class='neighbor-bomb-count'>" + bombCount + "</div>");
      } else {
        this.revealNeighbors();
      }
      $square.addClass("revealed-safe");
      this.board.squaresToReveal--;
      if (this.board.squaresToReveal === 0) {
        this.board.won();
      }
    }
  };

  Square.prototype.neighbors = function () {
    var adjSquares = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    var neighbors = [];
    for (var i = 0; i < adjSquares.length; i++) {
      var row = this.row + adjSquares[i][0];
      var col = this.col + adjSquares[i][1];
      if (row >= 0 && row < this.board.rows && col >= 0 && col < this.board.cols) {
        neighbors.push(this.board.squares[row][col]);
      }
    }
    return neighbors;
  };

  Square.prototype.revealNeighbors = function () {
    var neighbors = this.neighbors();
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if (!neighbor.revealed && !neighbor.flagged) {
        neighbors[i].reveal();
      }
    }
  };

  Square.prototype.neighborBombs = function () {
    var count = 0;
    var neighbors = this.neighbors();
    for (var i = 0; i < neighbors.length; i++) {
      if (neighbors[i].bomb) {
        count++;
      }
    }
    return count;
  };

  Square.prototype.flag = function () {
    var rowSquares = $('[data-row="' + this.row + '"]');
    var $square = $(rowSquares[this.col]);
    $square.toggleClass("flagged");
    if (this.flagged) {
      this.flagged = false;
      $square.empty();
    } else {
      this.flagged = true;
      $square.html("<div class='flag'>F</div>");
    }
  };
})();
