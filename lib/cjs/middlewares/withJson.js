"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withJson = void 0;
exports.withJson = () => async (ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        // will only respond with JSON
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            success: false,
            error: err.message
        };
    }
};
//# sourceMappingURL=withJson.js.map