"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
class Deferred {
    _promise;
    _resolve;
    _reject;
    constructor() {
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    get promise() {
        return this._promise;
    }
    get resolve() {
        return this._resolve;
    }
    get reject() {
        return this._reject;
    }
}
exports.default = Deferred;
//# sourceMappingURL=deferred.js.map