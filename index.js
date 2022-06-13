const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const port=5000;


app.get('/',(req,res)=>{
    res.send('Hello world from my first sever node and server')
});
const users=[
    {id:0,name:'rasel',email:'rasel@gmail.com',phone:'0178438535'},
    {id:1,name:'Akash',email:'akash@gmail.com',phone:'0178438535'},
    {id:2,name:'Asif',email:'asif@gmail.com',phone:'0178438535'},
    {id:3,name:'Asha',email:'asha@gmail.com',phone:'0178438535'},
    {id:4,name:'Babu',email:'babu@gmail.com',phone:'0178438535'}
]
app.get('/users',(req,res)=>{
    const search=req.query.search;
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
   else{
    res.send(users);
   }
});

//app method 

app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
});

app.get('/fruits',(req,res)=>{
    res.send(['baanana','mangoes','apple']);
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('Yammy yammy fazli');
});

app.listen(port,()=>{
    console.log('listening to port ',port);
});