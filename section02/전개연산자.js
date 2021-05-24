const log = console.log;

const a = [1, 2];
log(...a);
// a[Symbol.iterator] = null;
log(...a, ...[3, 4]);

const arr = [5, 6, 7, 8];
log(...a, ...arr);