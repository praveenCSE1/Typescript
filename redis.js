const redis = require('redis');

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379 
});


client.on('error', (err) => {
    console.error(' Redis error:', err);
});

client.set('name', 'Praveen', (err, reply) => {
    if (err) {
        console.error(err);
    } else {
        console.log(reply);
    }
});

client.get('name', (err, data) => {
    if (err) {
        console.error( err);
    } else {
        console.log(data);
    }
});

