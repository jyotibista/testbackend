const Blog = require('../models/test.model');


let getAllUsers = async (req,res)=>{
try {
    // logics
    // console.log('here hehe', )

    let newBlog = await Blog.create({
        title: 'Coffee',
        author: 'kiran',
        body: 'idk',
        hidden: false
    })
    let data = await Blog.find();

    console.log('here', {data})
    return res.status(200).json({
        success: 1,
        message: 'success',
        data: newBlog
    })

} catch (error) {
   return res.status(400).json({
        success: 0,
        message: error
    })
}
}

module.exports = {
    getAllUsers
}