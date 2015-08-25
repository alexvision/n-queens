/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var b = new Board({n: n});

  var innerFunc = function(board, depth) {
    // debugger;
    if (!board.hasAnyRooksConflicts() && depth === n) {
      solution.push(board);
      return;
    }
    for (var i = 0; i < n; i++) {
      b.togglePiece(depth, i);
      if (!b.hasAnyRooksConflicts()) {
        innerFunc(board, depth + 1)    
      } else {
        b.togglePiece(depth, i);
      }
    }
  }
  
  innerFunc(b, 0);
  //console.log(solution.length);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution[0].rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var currentBoard = new Board({n: n});
  var solutionFinder = function(depth){
    //base case
    if(depth === n){
      solutionCount++
      return;
    }
    //recursive case
    for(var i = 0; i < n; i++){
      //try a new position
      currentBoard.togglePiece(depth, i);
      //if it works, try the children
      if(!currentBoard.hasAnyRooksConflicts()){
        solutionFinder(depth + 1);
      }
      //else untoggle the change, and kill the tree
      currentBoard.togglePiece(depth, i);
    }

  }

  solutionFinder(0);


  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  //return solutionCount;
};
