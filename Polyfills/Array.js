//#label includes
//#require Object.js::is
if (!Array.prototype.includes) {
    Array.prototype.includes = function (elem) {
        var fromIndex = arguments.length > 1 ? arguments[1] : 0;
        var length = this.length;
        if (length === 0) {
            return false;
        }

        var k = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);
        while (k < length) {
            if (Object.is(elem, this[k])) {
                return true;
            }
            k += 1;
        }
        return false;
    };
}
//#endlabel includes
