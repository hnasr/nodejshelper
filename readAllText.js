const fs = require('fs')

//readAllText function
module.exports = function readAllText (path) 
{
    return new Promise ((resolve, reject) => 
    {
            fs.readFile( path, (err, data) => 
            {
                if (err)  
                    reject (err)          
                else
                    resolve(data.toString())
            });
        
    });
}