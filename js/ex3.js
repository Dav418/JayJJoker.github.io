

var e1 = null;
var e2 = null;
var sign=null;
var clear = false;
var c =true;

function insert(n) {
    var b = document.getElementById("InputBox");
    var x = document.createTextNode(n);
    if(isNaN(n) && n!= ".")
    {
        clear = true;
        evaluate(n);
    }
    else{
        if(b.innerText == '0' && n!= '0' || clear){clear = false;b.innerHTML = "";}
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
        c = true;
        if(opp != "=")
        {
            e2 = calc(e1,e2,sign);
        }
    }
    console.log(e1,e2);
    if(opp == "=")
    {
        cle(false);
        document.getElementById("InputBox").innerHTML = calc(e1,e2,sign);
    }
    else
    {
        sign=opp;
    }

}

function calc(e1,e2,operator){
    console.log("this is the opp "+operator);
    switch(operator){
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
    document.getElementById("InputBox").innerHTML = "0";
    c =true;
   if(x){
       sign = null;
       e1=0;
       e2=0;
   }
}
