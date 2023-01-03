const read = require("readline-sync");
console.log("Enter a full Website name = ");
let a = String(read.question());
var http=require("https");
http.get({host:a},
function(res){
    if(res.statusCode == 200 )
    console.log("This site is up and running!");
    else
    console.log("This site might be down "+res.statusCode);
});