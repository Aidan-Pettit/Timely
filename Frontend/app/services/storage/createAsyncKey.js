const createAsyncKey = (year, month, day, time) => {    
    const key = year + '-' + month + '-' + day + '-' + time;
    return key
}

export default createAsyncKey
