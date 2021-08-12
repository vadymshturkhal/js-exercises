class Graph {
  constructor(obj) {
    this._graph = this._createGraphFromObj(obj);
  };

  _createGraphFromObj(obj) {
    this._vertexies = [];

    const graph = new Map();

    for (let vertex in obj) {
      const neighbours = new Map();
      for (let neighbour of obj[vertex]) {
        neighbours.set(neighbour, 0);
      };

      graph.set(parseInt(vertex), neighbours);

      this._vertexies.push(parseInt(vertex));
    };

    return graph;
  };

  getAllVertexies() {
    return this._vertexies.slice();
  };

  getVertexNeighbours(vertex) {
    if (this._graph.has(vertex)) {
      return [...this._graph.get(vertex).keys()].slice();
    };
    return [];
  };

  hasEdge(edge) {
    return this._graph.has(edge[0]) ? this._graph.get(edge[0]).has(edge[1]) : false;
  };
};

// Usage

// obj = {
//   1: [2, 3, 4],
//   2: [3, 5, 6],
//   3: [1, 2, 6],
//   4: [1],
//   5: [2],
//   6: [2, 3],
// };

// const G = new Graph(obj);
// console.log(G.getVertexNeighbours(1));
// console.log(G);

module.exports = Graph;