
module.exports = (app, version)=>{
    let module = '/product';
    app.get(version+ module+'',(req,res)=>{
        return res.send('Hello World products')
    })
}