(function () {
  if (typeof Minesweeper === "undefined") {
    window.Minesweeper = {};
  }

  var Square = Minesweeper.Square = function () {
    this.flagged = false;
    this.revealed = false;
    this.bomb = false;
  };
})();
