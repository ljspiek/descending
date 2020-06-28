function descendingOrder(n) {
  n = [...n.toString()];
  return Number(n.sort().reverse().join(""));
}

console.log(descendingOrder(86928341));
