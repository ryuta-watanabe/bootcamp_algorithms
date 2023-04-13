export const binarySearch = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) {
      left = mid + 1;
    }
    if (array[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};
