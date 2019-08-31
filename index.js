const request = require('request');

async function pingLink (params) {
	const urls = [params.url];
	requests = url.map((url) => {
		return new Promise((resolve, reject) => {
			const option = {
				url: url,
				method: 'GET',
				json: true
			};
			request(option, (err, resp) => {
				if (err) reject(err);
				else if (resp.statusCode == 200) resolve({msg: 'It\'s alive!'});
				else reject({msg: 'It\'s not alive :('});
			});
		});
	});
	pings = Promise.all(requests);
	const ret = pings.filter(data => data.msg == 'It\'s alive!');
	return ret;
}

module.exports = pingLink;
