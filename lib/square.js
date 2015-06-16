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
    var rowSquares = $('[data-row="' + this.row + '"]');
    var $square = $(rowSquares[this.col]);
    $square.removeClass("unrevealed-square");
    if (this.bomb) {
      $square.addClass("revealed-bomb");
    } else {
      $square.addClass("revealed-safe");
    }
  };
})();
