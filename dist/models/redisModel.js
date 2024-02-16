"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
exports.redisClient = client;
console.log('redis connected ');
client.once('connect', () => {
    console.log('redis connected');
});
client.on('error', err => console.log('Redis Client Error', err));
