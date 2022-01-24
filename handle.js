const haldler =(req,res)=>{
        console.log(req.app.locals.title);
        res.send('about');
};

module.exports = haldler ;