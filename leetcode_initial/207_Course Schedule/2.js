// 提交最快的结果

var canFinish = function (numNodes, prerequisites) {
  let graph = new Array(numNodes);
  for (let i = 0; i < numNodes; i++) {
      graph[i] = new Array();
  }
  var deps = new Array(numNodes).fill(0);
  prerequisites.forEach(edge => {
      graph[edge[1]].push(edge[0]);
      deps[edge[0]]++;
  });
  // console.log(graph)
  let visited = new Array(numNodes).fill(false);
  let q = new Array();
  for (let i = 0; i < numNodes; i++) {
      if (!visited[i] && !deps[i]) {
          q.push(i);
          visited[i] = true;
      }
  }
  // console.log(q)
  while (q.length) {
      const v = q.pop();
      // console.log('selected', v)
      // console.log(deps)
      for (let i = 0; i < graph[v].length; i++) {
          const node = graph[v][i];
          deps[node]--;
          // console.log('node', node, deps[node])
          if (!visited[node] && deps[node] == 0) {
              q.push(node);
              visited[node] = true;
          }
      }
  }
  for (let i = 0; i < numNodes; i++) {
      if (!visited[i])
          return false;
  }
  return true;
};
// console.log(findOrder(4, [[2,0],[1,0],[3,1],[3,2],[1,3]]))