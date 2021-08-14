const Graph = require("./graph");
const Queue = require("./queue");

function carcasSearchDFSBased(graph, vertexFrom, checkedVertexies, T) {
  if (!checkedVertexies) {
    checkedVertexies = graph.getAllVertexies();
    T = new Set();
  };

  if (!vertexFrom) {
    return false;
  };

  checkedVertexies[vertexFrom - 1] = false;
  for (let u of graph.getVertexNeighbours(vertexFrom)) {
    if (checkedVertexies[u - 1]) {
      T.add([vertexFrom, u])
      carcasSearchDFSBased(graph, u, checkedVertexies, T);
    };
  };

  return T;
};

function carcasSearchBFSBased(graph, v) {
  const queue = new Queue();
  const T = new Set();
  queue.put(v);

  const allVertexies = graph.getAllVertexies();
  allVertexies[v - 1] = false;

  while (queue.length) {
    let currentVertex = queue.pick();

    for (neighbour of graph.getVertexNeighbours(currentVertex)) {
      if (allVertexies[neighbour - 1]) {
        T.add([currentVertex, neighbour])
        allVertexies[neighbour - 1] = false;
        queue.put(neighbour);
      };
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

// const graph = new Graph(obj);
// console.log(carcasSearchDFSBased(graph, 1));
// console.log();
// console.log(carcasSearchBFSBased(graph, 1));

module.exports = {
  'carcasSearchDFSBased': carcasSearchDFSBased,
  'carcasSearchBFSBased': carcasSearchBFSBased,
};
