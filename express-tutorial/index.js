import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());


let appdata = [];
let id = 0;


app.get('/', (req, res) => {
  res.send(appdata);
});



////////// Create method //////////////

app.post('/register' , (req , res) =>{
    const {username, password} = req.body
    const newData = {id: id++ , username, password}
    appdata.push(newData);
    res.send(appdata)
})

app.get('/register' , (req , res) =>{

  res.status(200).send(appdata);

})




//////////// find/read method /////////

app.get("/register/:id" , (req , res) =>{

  const {id} = req.params;
  const founduser = appdata.findIndex((user) => user.id === parseInt(id));

  if(founduser){
    res.send(appdata[founduser]);
  }
  else{
    res.send("User not found");
  }
})





///////// Update method ////////////

app.put("/register/:id" , (req , res) =>{

  const {newname , newpassword} = req.body;
  const {id} = req.params;
  const founduser = appdata.find((user) => user.id === parseInt(id));

  if(founduser){

    founduser.username = newname;
    founduser.password = newpassword;

    res.send(founduser);

  }
  else{
    res.send("User not found");
  }
})



////////// Delete method ////////

app.delete("/register/:id" , (req , res) =>{

  const {id} = req.params;
  const founduser = appdata.findIndex((user) => user.id === parseInt(id));

  if(founduser){

    appdata.splice(founduser, 1);
    res.send(appdata);
  }
  else{
    res.send("User not found");
  }

})









app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
