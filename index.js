//Importing all the objects of Express into a constant "express"
// const express= require("express")
// Making an 'app' object that has all the objects of express  function
// const app = express();

// express is a function which comes from express modules and app is a variable which access all the objects in express function.
 // express is a server. Now to communicate with server we have 4 http methods that are get,post,put,delete.
 /* We have these 4 HTTP methods 
 1. get - get an output from a server
 2. post - we want to provide data to server 
 3. put - update
 4. delete -  remove or delete
 */

 // app.get sets the beahviour of the server.
// app.get('/',(req,res) => { // '/' is root 
//     res.send("Hello World");
// }) 

// We will set the address of the server.
// app.listen(3030); 
// The number 3030 is a port number.
// Got to localhost:3030 here or you can write 127.0.0.1:3030

// To show our server is running we have to write another code for it
// We use that callback in app.listen method 
// app.listen(3030,() => {
//     console.log("Server is running at 3030");
// })
//When we run this file it will run at 3030 and print the console part in terminal 

//If we want to show the console.log  on webpage we have to connect a .html fie
// app.set('port',3030)
// app.listen(app.get("port"),() => {
//     console.log("Server is running at 3030.....");
// })
// app.set('port',3030)
// port = 3030;
// app.listen(port,() => {
//     console.log(`Server is running at ${port}`);
// })


// app.post("/postwlapage",(req,res) => {
//     res.send("We are in post")
// }) // This cannot get the reslut because google is a server it can only get things but can't post things so we use postman 
// Choose the right method in the postman

//handlebars are essentials for the flow of the project. They handle the flow of our Node projects.
// While using handle bars we need two components:
//1. Views
// 1.1 Layouts(layouts always remain inside Views)

// View is what we see and layout is the skeleton.

const express= require("express")
const app = express();
app.get('/',(req,res) => {   // '/' is root 
        res.send("Hello World");
    })
// Importing express3-handlebars
const handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// app.get("/about",(req,res)=>{
//      res.render('about'); //rendering or processing
//  })
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]; // This is fortune array

app.get('/about', (req, res) => {
    // res.send("<h1>Welcome to mypage</h1>")
        var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)] //This will generate any random numbers which will print from the fortune array
        res.render('about', { fortune: randomFortune });
})
app.get("/contact",(req,res)=>{
     res.render('contact'); 
 })

app.use((req,res)=>{
    res.status(404).render('404');
})

app.listen(3000,() => {
    console.log(`Server is running at 3030`);
})