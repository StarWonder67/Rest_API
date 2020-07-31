const express = require("express")
const joi = require("joi")
const app = express()
app.use(express.json()) //use json file, list of data stored in server

//give data to server
const customers = [

{title: 'aman', id: '1'},
{title: 'bitto', id: '2'},
{title: 'chandni', id: '3'},
{title: 'dev', id: '4'}

]

//read request handlers
//display the message thwen url consists of '/'
app.get('/',function(req,res){
	res.send('welcome to rest apis')
})
//display the list of customers when url consists of '/api/customers'
app.get('/api/customers',(req,res)=>{
	res.send(customers);


})

//display the info of specific customer when you mention the id
app.get('/api/customers/:id',(req,res)=>{
	const customer = customers.find(c => c.id === parseInt(req.params.id))

	//if there is no valid customer id,then send an error
if(!customer){
	res.status(404).send("error");
}
res.send(customer);

})

//create request handler
//create new customer info

const port = process.env.PORT || 8080
app.listen(port, ()=>console.log("listening on port ${port}"))