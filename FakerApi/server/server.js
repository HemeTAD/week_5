import express from "express"
import nodemon, { faker } from "@faker-js/faker"


const app = express()
const port = 8000

app.listen(port, ()=>console.log(`Listening on port:${port}`))



export const createUserAndCompany = ()=>{
    const newFakeUser={
        _id:faker.number.int(),
        firstName:faker.person.firstName(),
        lastName:faker.person.lastName(),
        phoneNumber:faker.phone.number(),
        email:faker.internet.domainWord(),
        passWord:faker.internet.ipv6():
    }
    const newFakeCompany ={
            _id:faker.number.int(),
            name:faker.company.name(),
            address:{
                street:faker.location.street(),
                city:faker.location.city(),
                state:faker.location.state(),
                zipcode:faker.location.zipCode(),
                country:faker.location.country()
            }
        }
        return newFakeCompany,newFakeUser
    }
    



const newFakeUserAndCompany= createUserAndCompany()
console.log(newFakeUserAndCompany)




app.use(express.json())

app.post("/api/user/new",(req,res)=>{
    res.json(newFakeUser)
})

app.post("/api/companies/new",(req,res)=>{
    res.json(newFakeCompany)
})

app.listen(port, ()=>console.log(`Listening on port:${port}`))

