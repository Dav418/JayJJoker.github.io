

var e1 = null;
var e2 = null;
var sign=null;
var clear = false;
var c =true;

function insert(n) {
    var b = document.getElementById("InputBox");
    var x = document.createTextNode(n);
    if(isNaN(n) && n!= ".")  //if its not a number and not a . it must be a sign
    {
        clear = true;
        evaluate(n);
    }
    else{
        if(b.innerText == '0' && n!= '0' || clear)
        {
            clear = false;
            b.innerHTML = "";
        }
        if(!b.innerText.includes('.'))
        {
            if(b.innerText != "" )
            {
                b.appendChild(x);
            }
        }
        if (n  != '.')
        {
            b.appendChild(x);
        }
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
            e2 =+ e2.toFixed(3);
        }
    }
    if(opp == "=")
    {
        cle(false);
        var numb =calc(e1,e2,sign);
        numb =+ numb.toFixed(3);
        document.getElementById("InputBox").innerHTML = numb;
    }
    else
    {
        sign=opp;
    }

}

function calc(e1,e2,operator){ //return answer based on sign
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

function cle(x){ //reset
    document.getElementById("InputBox").innerHTML = "0";
    c =true;
   if(x){
       sign = null;
       e1=0;
       e2=0;
   }
}
