import { products } from "./data.js";
import express from 'express'

const app = express();
app.get("/", (req,res) =>{
    res.send( `
        <h1>home page</h1>
        <a href = "/api/products">browse products</a>
        ` );
});
app.get("/api/products", (req,res)=>{
    const modiProducts = products.map(
        ({reviews, description, ...rest })=> rest);
    
    res.status(200).json({count:products.length, data:products, msg:"success"})
});




app.use((req,res)=>{
    res.status(404).send("route not found");
});
app.listen(3333,() => console.log("prg4 is running.."));
