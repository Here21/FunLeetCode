var exist = function(board, word) {
    var pathRecord = initPath(board);
    console.log('board', board);
    for(let y = 0; y < board.length; y++) {
      for(let x = 0; x < board[y].length; x++) {
        // console.log(x, y, word.charAt(0), board[y][x]);
        if(word.charAt(0) === board[y][x] && search(board, word, x, y, 0)) {
          return true;
        }
      }
    }
    return false;

    function search(board, word, x, y, index) {
      if (word.length === index) {
        return true;
      }
      if (y < 0 || y >= board.length || x < 0 || x >= board[y].length || board[y][x] !== word.charAt(index) || pathRecord[y][x]) {
        return false;
      }

      // 先让这个点在这个路径上被占用，如果找到next，则该点在该路径上被走过。
      pathRecord[y][x] = true;
      
      // 自增变量应该单独作为变量保存，否则自增会持续增长而不是回到初始状态
      // if(search(board, word, ++x, y, ++index) || search(board, word, --x, y, ++index) || search(board, word, x, ++y, ++index)|| search(board, word, x, --y, ++index)) {
      //   return true;
      // }

      if(search(board, word, x + 1, y, index + 1) || search(board, word, x - 1, y, index + 1) || search(board, word, x, y + 1, index + 1)|| search(board, word, x, y - 1, index + 1)) {
        return true;
      }
      // 该路径没有找到next，所以重置该点给其他路径使用。
      pathRecord[y][x] = false;
      return false;
    };

    function initPath(board) {
      var arr = JSON.parse(JSON.stringify(board));
      for(let y = 0; y < board.length; y++) {
        for(let x = 0; x < board[y].length; x++) {
          arr[y][x] = false;
        }
      }
      return arr;
    }
};

var board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
];

console.log(exist(board, "ABCCED"));
