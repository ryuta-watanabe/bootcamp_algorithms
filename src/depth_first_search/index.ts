export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

// スタックを使う方法と再帰関数を使う方法がある
export const depthFirstSearch = (
  root: FileSystemNode,
  target: string
): boolean => {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop() as FileSystemNode;

    if (node.name === target && !node.isDirectory) return true;
    if (node.isDirectory) {
      for (const child of node.children) {
        stack.push(child);
      }
    }
  }

  return false;
};
