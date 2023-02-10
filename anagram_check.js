function anagramcheck(){
    var a = prompt("Enter String");
    var b = prompt("ENter string");
    var flag  = 1;
    for(var i=0;i<a.length;i++)
    {
        if(!a.includes(b[i])){
            document.write("<h2>false</h2>");
            return false;
        }
    }
    console.log("true");
    return true;
   
}