const http=require('http')

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.write('welcome to our home page')
}
if(req.url==='/about'){
res.write('welcome to our home page about')
}
res.end(`{
<h1>oops!</h1>
<a href="/">about</a>
}
`)
})
server.listen(5000)