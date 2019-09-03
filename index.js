const request = require('request');
async function pingLink(params) {
    if (params.err) return params;
    else if (params.test) return params;
    else {
        let hosts = [params.url];
        let promise = hosts.map((host, i) => {
            return new Promise((resolve, reject) => {
                request.get(host, (err, resp, body) => {
					if (err) resolve(false);
                    else if (resp.statusCode == 200) resolve(true);
                    else resolve(false);
                })
            })
        })
		response = await Promise.all(promise);
        params.status = response.filter(value => value == true).length > 0 ? 'This URL is ALIVE, ALIVE !!': 'This URL is dead';
        return params;
    }
}

module.exports = pingLink;
