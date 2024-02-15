import Redis from "redis"

const client = Redis.createClient({

})

const EXPIRY = 3600;
function getDataFromCache(key: string): Promise<string | Error> {


    return new Promise((resolve, reject) => {


      client.get(key, (error: Error | null, data: string | null) => {
        
        if (error) {

          reject(error);
       
        } else { resolve(data);
        }
      });
    });
  }