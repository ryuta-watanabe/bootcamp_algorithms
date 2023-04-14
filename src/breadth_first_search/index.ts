export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number
): number => {
  const queue = [startUser];
  const checked = new Set<number>();
  let distance = 0;

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const user = queue.shift() as number;

      if (user === targetUser) return distance;
      checked.add(user);

      for (const friend of relationships[user]) {
        if (!checked.has(friend)) queue.push(friend);
      }
    }

    distance++;
  }

  return -1;
};
