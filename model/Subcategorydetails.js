const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ponappa001:maybeyes123@kuthira.67uwjmc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        carid:Number,
        company:String,
        model:String,
        no:String,
        color:String,
        fuel:String,
        amount:Number,
        description:String,
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;