/*  
 * Danilo Zekovic
 * 4/1/2015
 * To create and test the graph and the shortest path
 */

load("graph2.js");

g = new Graph(6);
g.addEdge(0,1);
g.addEdge(0,3);
g.addEdge(1,2);
g.addEdge(3,4);
g.addEdge(2,4);
g.addEdge(4,5);
g.addEdge(5,2);
g.showGraph();

g.bfs(2);
var vertex = 3;  // destination
var source = 2;  // starting point
var paths = g.pathTo(source, vertex);
g.showPath(paths);
print('\n');

