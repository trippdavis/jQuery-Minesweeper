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
    $grid.append("<h2 id='bomb-count'>" + bombs + " bombs left</h2>")
    for (var i = 0; i < rows; i++) {
      var $row = $("<div class='row'></div>");
      $grid.append($row);
      for (var j = 0; j < cols; j++) {
        $row.append("<div class='square unrevealed-square' data-row='" + i + "' data-col='" + j + "'></div>");
      }
    }

    $(".unrevealed-square").mousedown(function (event) {
      var $square = $(event.currentTarget);
      if (event.which === 1) {
        if (!$square.hasClass("flagged")) {
          this.board.reveal($square.data("row"), $square.data("col"));
        }
      } else {
        if ($square.hasClass("unrevealed-square")) {
          this.board.flag($square.data("row"), $square.data("col"));
        }
      }
    }.bind(this));
  };
})();
