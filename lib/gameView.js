(function () {
  if (typeof Minesweeper === "undefined") {
    window.Minesweeper = {};
  }

  var GameView = Minesweeper.GameView = function (rows, cols, bombs) {
    this.createBoard(rows, cols, bombs);
  };

  GameView.prototype.createBoard = function (rows, cols, bombs) {
    this.board = new Minesweeper.Board(rows, cols, bombs);
    var $grid = $("#grid");
    for (var i = 0; i < rows; i++) {
      var $row = $("<div class='row'></div>");
      $grid.append($row);
      for (var j = 0; j < cols; j++) {
        $row.append("<div class='square' data-row='" + i + "' data-col='" + j + "'></div>");
      }
    }
  };

})();
