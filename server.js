const { Company } = require('@faker-js/faker/lib/company');
const express = require('express');
const app = express();
const port = 8000;
const User = require("./user.js");
const Kompany = require("./company.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req, res)=> {
    res.json({message:"hello"})
})

app.get("/api/users/new", (req, res) =>{
    // const userClass ={
    //     _id : faker.datatype.number(),
    //     firstName : faker.name.firstName(),
    //     lastName : faker.name.lastName(),
    //     phoneNumber : faker.phone.phoneNumber(),
    //     email: faker.internet.email(),
    //     password : faker.internet.password()
    // }
    res.json(new User);
})

app.get("/api/companies/new", (req,res)=>{

    res.json(new Kompany);
})

app.get("/api/user/company", (req, res)=>{
    res.json({user: new User, company :new Kompany})

})


app.listen(port, () => console.log(`Operating on port # ${port}`)); 