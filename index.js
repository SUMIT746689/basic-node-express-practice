const express = require('express');
const app = express();
const about = express();

const middleWareHandle =(obj)=>{
    return (req,res,next)=>{
        if(obj.isLogin){
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.path} - ${req.protocol}`);
            next();
        }
       else{
           throw new Error('Error Founds');
       }
    }   
} 

app.use('/about',about);
about.use(middleWareHandle({'isLogin': false}));

app.get('/home',(req,res)=>{
    res.send('hello');
    console.log(req.url);
})
const errorHandle = (err,req,res,next)=>{
    console.log(err.message);
    res.status(404).send('there is a error');
}
about.use(errorHandle);

about.get('/aboutHandle',(req,res,next)=>{
    console.log('hello boy');
    res.end();
})


app.listen(3000,()=>{
    console.log('Running at port 3000');
});