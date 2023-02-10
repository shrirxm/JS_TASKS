
    function reverse(){
    var str = prompt("Enter String");
    var n = str.length;
    var first = 0;
    var last = 0;
    var nstr = "";

    for(var i=0;i<n;i++)
    {
        if(str[i]==" ")
        {
            last = i-1;
            while(last>=first)
            {
                nstr += str[last];
                last--;
            }
            nstr += " ";
            first = i + 1;
        }
        if(i == n-1)
        {
            last = i;
            while(last>=first)
            {
                nstr += str[last];
                last--;
            }
        }
    }
    console.log(nstr);
}
 