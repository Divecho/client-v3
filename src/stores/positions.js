// Stores should be filled by api method, not other way around. no calling from stores. when there is a need to call / refresh, call the method directly

export const positions = writable([]);
