interface result {
    success: boolean;
    errMsg?: string;
    data: any
}

export const getResponse = (data: any, errMsg?: string): result => {
    if (errMsg) {
        return {
            success: true,
            errMsg: errMsg,
            data
        }
    }
    return {
        success: true,
        data
    }
}