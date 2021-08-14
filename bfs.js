const Queue = require('./queue');
const Graph = require('./graph');

function bfs(graph, v, to) {
  const queue = new Queue();
  queue.put(v);

  const allVertexies = graph.getAllVertexies();
  allVertexies[v - 1] = false;

  const prevVertex = new Array(allVertexies.length + 1);

  while (queue.length) {
    let p = queue.pick();

    for (neighbour of graph.getVertexNeighbours(p)) {
      if (allVertexies[neighbour - 1]) {
        if (neighbour === to) {
          prevVertex[neighbour] = p;
          return true;
        };

        queue.put(neighbour);
        allVertexies[neighbour - 1] = false;
        prevVertex[neighbour] = p;
      };
    };
  };

  return false;
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

// const val = bfs(G, 1, 11);
// console.log(val);

module.exports = {
  'bfs': bfs
};
