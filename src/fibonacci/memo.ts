const memo = Array(1000);
export const fibonacciMemo = (n: number): number => {
  if (n <= 1) return n;

  // メモ配列内に結果がないときは、その数を配列に格納する
  if (memo[n] === undefined) {
    memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  }

  // メモ配列が定義されていたら、それをそのまま返す
  return memo[n];
};
