const graph = require("./graph");

function carcasSearchDFSBased(G, vertexFrom, checkedVertexies, T) {
  if (!checkedVertexies) {
    checkedVertexies = G.getAllVertexies();
    T = new Set();
  };

  if (!vertexFrom) {
    return false;
  };

  checkedVertexies[vertexFrom - 1] = false;
  for (let u of G.getVertexNeighbours(vertexFrom)) {
    if (checkedVertexies[u - 1]) {
      T.add([vertexFrom, u])
      carcasSearchDFSBased(G, u, checkedVertexies, T);
    };
  };

  return T;
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

// const G = new graph(obj);
// const val = carcasSearchDFSBased(G, 1);
// console.log(val);

module.exports = {
  'carcasSearchDFSBased': carcasSearchDFSBased,
};
