const express=require('express')

const app=express();


app.use('/age',(req,res)=>{
    const {year,month,date,name}=req.query;
    const curryear=new Date().getFullYear();
    const currmonth=new Date().getMonth();
    var answer=curryear-year;
    if(currmonth<month){
        answer-=1
    }
    res.write('<html>')
    res.write('<body>')
    res.write(`<p>Hello ${name}</p>`)
    res.write(`<p>you are ${answer} year old</p>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
    
})


app.listen(8000,()=>{
    console.log(`connected to 8000`);
})