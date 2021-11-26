
var a = 0, b = 1, i , c , j; 

var limit = prompt("Enter the limit: ");    
   
    for(i = 1; i <= limit; i++)    
    {    
        a = 0;    
        b = 1;    
        process.stdout.write(b.toString() + " ");  
        for(j = 1; j < i; j++)    
        {    
            c = a + b;    
            process.stdout.write(c.toString() + " ");    
            a = b;    
            b = c;    
    
        }    
        console.log("\n");    
    }    