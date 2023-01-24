const testDate=( req,res,next)=>{

    const date = new Date()
    req.date = date;
    const hour = date.getHours();
    const day = date.getDay();
    console.log(day);
    if(hour  || hour >17 || day ==0 || day>5){
        res.send('<h1>we are closed u can back at another time </h1>')
    }
else {
    next()
}

}
module.exports={testDate}