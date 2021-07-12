const http=require('http');
const server=http.createServer();

server.listen(3040,()=>{
    console.log('SERVER RUNNING ON PORT 3040')
})
