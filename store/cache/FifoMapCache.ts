import validateCacheSize from "./util/validateCacheSize";

export type FifoObjectCacheType = FifoObjectCache;

export default class FifoObjectCache {
  _cache: any;
  _cacheSize: number;
  _cacheOrdering: string[];

  constructor({ cacheSize = 50 } = {}) {
    validateCacheSize(cacheSize);
    this._cache = {};
    this._cacheOrdering = [];
    this._cacheSize = cacheSize;
  }
  set(key: any, selectorFn: any) {
    const serialezedKey = this._serialezeKey(key);
    this._cache[serialezedKey] = selectorFn;
    this._cacheOrdering.push(serialezedKey);

    if (this._cacheOrdering.length > this._cacheSize) {
      const earliest = this._cacheOrdering[0];
      this.remove(earliest);
    }
  }
  get(key: any) {
    const serialezedKey = this._serialezeKey(key);
    return this._cache[serialezedKey];
  }
  remove(key: any) {
    const serialezedKey = this._serialezeKey(key);
    const index = this._cacheOrdering.indexOf(serialezedKey);

    if (index > -1) {
      this._cacheOrdering.splice(index, 1);
    }
    delete this._cache[serialezedKey];
  }
  clear() {
    this._cache = {};
    this._cacheOrdering = [];
  }
  _serialezeKey(key: any) {
    return JSON.stringify(key);
  }
}
