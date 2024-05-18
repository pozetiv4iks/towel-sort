module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
      return [];
    }
  
    const result = [];
    let forward = true;
  
    for (let i = 0; i < matrix.length; i++) {
      if (forward) {
        result.push(...matrix[i]);
      } else {
        result.push(...matrix[i].reverse());
      }
      forward = !forward;
    }
  
    return result;
  };
