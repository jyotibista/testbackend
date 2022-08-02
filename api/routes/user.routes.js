const { getAllUsers } = require('../controllers/user.controller');
module.exports = (app,verion)=>{
    let module = '/user'
    app.get(verion + module + '/jyoti',getAllUsers)



    /***
     * GET 
     * PUT 
     * POST 
     * PATCH 
     * DELETE 
     * 
     */
}