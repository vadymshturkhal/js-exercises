const Graph = require('./graph');

function dfs(G, vertexFrom, vertexTo) {
  if (!vertexFrom) {
    return;
  };

  const stack = [];
  stack.push(vertexFrom);

  const toCheck = G.getAllVertexies();

  while (stack.length > 0) {
    let currentVertex = stack[stack.length - 1];
    toCheck[currentVertex - 1] = false;

    if (currentVertex === vertexTo) {
      return true;
    }

    const neigbours = G.getVertexNeighbours(currentVertex);

    if (neigbours.length < 1) {
      stack.pop();
    };

    for (let i = 0; i < neigbours.length; i++) {
      if (toCheck[neigbours[i] - 1]) {
        stack.push(neigbours[i]);
        break;
      };

      if (i + 1 === neigbours.length) {
        stack.pop();
      };
    };
  };

  return false;
};

function dfsRecur(G, vertexFrom, vertexTo, checkedVertexies) {
  if (!checkedVertexies) {
    checkedVertexies = G.getAllVertexies();
  };

  if (!vertexFrom) {
    return false;
  };

  let flag = false;
  checkedVertexies[vertexFrom - 1] = false;
  for (let u of G.getVertexNeighbours(vertexFrom)) {
    if (u === vertexTo) {
      flag = true;
      break;
    }

    if (checkedVertexies[u - 1]) {
      flag = dfsRecur(G, u, vertexTo, checkedVertexies)
      if (flag) {
        break;
      };
    };
  };

  return flag;
};

// Usage

// obj = {
//   1: [2, 4, 12],
//   2: [1, 4],
//   3: [7],
//   4: [1, 2, 6, 7, 12],
//   5: [6, 8, 9],
//   6: [4, 5, 7, 9, 13],
//   7: [3, 4, 6],
//   8: [5, 9],
//   9: [5, 6, 8],
//   10: [11, 12],
//   11: [10, 12],
//   12: [1, 4, 10, 11],
//   13: [6],
// };

// const G = new Graph(obj);

// const val = dfs(G, 1, 11);
// console.log(val);

// const valRec = dfsRecur(G, 1, 11);
// console.log(valRec);

module.exports = {
  'dfs': dfs,
  'dfsRecur': dfsRecur,
};
