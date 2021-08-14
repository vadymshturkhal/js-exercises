const { bfs } = require("./bfs");
const graph = require("./graph");

function countConnectedComponentBFS(graph) {
  if (!graph) {
    return 0;
  };

  const checkedVertexies = graph.getAllVertexies();

  let counter = 0
  for (let vertex of graph.getAllVertexies()) {
    if (checkedVertexies[vertex - 1]) {
      checkedVertexies[vertex - 1] = false;
      counter++;
      bfs(graph, vertex, undefined, checkedVertexies);
    };
  };

  return counter;
};

// Usage

// obj = {
//   1: [3, 5],
//   2: [4],
//   3: [1, 5],
//   4: [2],
//   5: [1, 3, 7, 9],
//   6: [8, 10],
//   7: [5],
//   8: [6, 10],
//   9: [5],
//   10: [6, 8],
// };

// const G = new graph(obj);
// const val = countConnectedComponentBFS(G);
// console.log(val);

module.exports = countConnectedComponentBFS;
