const handlePromise = (promise) => {
    return promise 
        .then((data) => [null, data])
        .catch((error) => [error, undefined]);
};

module.exports = handlePromise;