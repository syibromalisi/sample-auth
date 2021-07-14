export const setLoginRedis = (param, server) => new Promise((resolve, reject) => {
    const { username, token } = param;

    // key login token
    server.redis.set(username, token, "EX", server.conf.expireToken, (err, val) => {
        if (err) {
            reject(err);
        } else {
            resolve(token);
        }
    })
});