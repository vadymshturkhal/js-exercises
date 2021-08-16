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
        if (!Array.isArray(neighbour)) {
          neighbours.set(neighbour, 1);
        } else {
          const [n, weight] = neighbour;
          neighbours.set(n, weight);
        }
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

  getEdgeWeight(edge) {
    const [v, u] = edge;
    if (this._graph.has(v) && this._graph.get(v).has(u)) {
      return this._graph.get(v).get(u);
    };
  };

  deleteVertex(v) {
    this._graph.delete(v);
  };

  reverse() {
    const reversedGraph = new Map();
    
    for (let v of this.getAllVertexies()) {
      for (let n of this._graph.get(v).keys()) {
        reversedGraph.has(n) ? reversedGraph.get(n).set(v, 0) : reversedGraph.set(n, new Map().set(v, 0));
      };
    };

    this._graph = reversedGraph;
  };

  changeAllVertexies(newVertexies) {
    if (newVertexies.length !== this.getAllVertexies().length) {
      return false;
    };

    const changedGraph = new Map();

    for (let i = 0; i < newVertexies.length; i++) {
      const vertexies = new Map();
      
      if (!this._graph.has(i + 1)) {
        continue;
      };

      for (let value of this._graph.get(i + 1)) {
        vertexies.set(newVertexies[value[0] - 1], 0);
      }
      
      changedGraph.set(newVertexies[i], vertexies);
    };

    this._graph = changedGraph;

    return true;
  };
};

// Usage

// Add edges without weight
// obj = {
//   1: [2, 3, 4],
//   2: [3, 5, 6],
//   3: [1, 2, 6],
//   4: [1],
//   5: [2],
//   6: [2, 3],
// };

// // // Add edges with weight
// const objWithWeight = {
//   1: [[7, 3]],
//   2: [[5, 1]],
//   3: [[9, 1]],
//   4: [[1, 2]],
//   5: [[8, 4]],
//   6: [[3, 4], [8, 5]],
//   7: [[4, 3], [9, 9]],
//   8: [[2, 1]],
//   9: [[6, 14]],
// };

// const G = new Graph(obj);
// console.log(G);

// const G2 = new Graph(objWithWeight);
// console.log(G2);

module.exports = Graph;
