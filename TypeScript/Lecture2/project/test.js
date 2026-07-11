"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
console.log(isLegal({ age: 15 }));
//# sourceMappingURL=test.js.map