
var request = require('request');



request.get(
    'http://ip-api.com/json',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            var city = body.city;
        }
        if (error) {
            console.log(error);
        }
    }
);
