(function () {
  if (typeof Minesweeper === "undefined") {
    Minesweeper = {};
  }

  Game = Minesweeper.Game = function (rows, cols, bombs) {
    var $grid = $("#grid");
    for (var i = 0; i < rows; i++) {
      var $row = $("<div class='row'></div>");
      $grid.append($row);
      for (var j = 0; j < cols; j++) {
        $row.append("<div class='space'></div>");
      }
    }
  };

})();
