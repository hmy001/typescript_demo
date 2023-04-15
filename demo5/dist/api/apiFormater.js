"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = void 0;
const getResponse = (data, errMsg) => {
    if (errMsg) {
        return {
            success: true,
            errMsg: errMsg,
            data
        };
    }
    return {
        success: true,
        data
    };
};
exports.getResponse = getResponse;
