
var c = true;
var e1 = 0;
var e2 = 0;
var opperator = "+";
var result = 0;
var clear = false;
function insert(n) {
    var b = document.getElementById("InputBox");
    var x = document.createTextNode(n);
    if(isNaN(n) && n!= ".")
    {
        evaluate(n);
    }
    else{
        if(b.innerText == '0' && n!= '0'){b.innerHTML = "";}
        if(!b.innerText.includes('.')){
            if(b.innerText != "" ){
                b.appendChild(x);
            }
        }
        if (n  != '.'){b.appendChild(x);}
    }
}

function evaluate(opp){
    if(c){
        e1 = document.getElementById("InputBox").innerHTML;
        c = false;
    }else{
        e2 = document.getElementById("InputBox").innerHTML;
        e2=e2.substring(1);
        c = true;
        if(opp != "=")
        {
            e2 = calc(e1,e2,opp);
        }
    }
    result = calc(e1,e2,opperator);
    console.log(e1,e2,result);
    if(opp == "=")
    {
        cle(false);
        document.getElementById("InputBox").innerHTML = result;
    }
    else
    {
        document.getElementById("InputBox").innerHTML = opp;
        opperator=opp;
    }
}

function calc(e1,e2,opperator){
    switch(opperator){
        case "+":
            return parseFloat(e1)+ parseFloat(e2);
        case "-":
            return parseFloat(e1)- parseFloat(e2);
        case "/":
            return parseFloat(e1)/ parseFloat(e2);
        case "*":
            return parseFloat(e1)* parseFloat(e2);
        case "":
            return 0;
    }

}

function cle(x){
    c=true;
    opperator = "";
    clear = false;
    document.getElementById("InputBox").innerHTML = "0";
   if(x){
       e1=0;
       e2=0;
       result=0;
   }
}
