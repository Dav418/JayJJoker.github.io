function conversionTable(tagID,from,to){

    if(!document.getElementById("C").checked && !document.getElementById("F").checked){
        alert("Not selected a temp");
    }else if (!document.getElementById("Str").value.match(/\S/) &&
        !document.getElementById("End").value.match(/\S/)){
        alert("Cant leave both text boxes empty!");}
        else{
            if (!document.getElementById("Str").value.match(/\S/)){
                from = 1;
            }
            if (!document.getElementById("End").value.match(/\S/)){
                to = parseInt(from,10) + 10;
            }
            if(isNaN(document.getElementById("Str").value) ||
                isNaN(document.getElementById("End").value))
                {alert("Input is not a number!")}
                else{

            document.getElementById(tagID).innerHTML = "";

            var conv = document.getElementById(tagID);

            var table = document.createElement("table");
            table.setAttribute("class","c");
            conv.appendChild(table);
            var tbody = document.createElement("tbody");
            table.appendChild(tbody);
            tbody.setAttribute("class","c");

            var thead = document.createElement("thead");
            table.appendChild(thead);

            var tr = document.createElement("tr");
            thead.appendChild(tr);
            var th1 = document.createElement("th");
            var th2 = document.createElement("th");

            tr.appendChild(th1);
            tr.appendChild(th2);

            if(document.getElementById("C").checked){
                th1.appendChild(document.createTextNode("Celsius "));
                th2.appendChild(document.createTextNode("Fahrenheit"));
            }
            if(document.getElementById("F").checked){
                th2.appendChild(document.createTextNode("Celsius "));
                th1.appendChild(document.createTextNode("Fahrenheit"));
            }

            table.appendChild(tbody);



            if(from > to){to -=1;
            }
            else{
                to= parseInt(to,10)+1;}
                console.log(from +" "+ to);

            for (var i=from;i != to;) {

                var r = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                if (i%2===1) {
                    r.setAttribute("class", "odd");
                    td1.setAttribute("class","odd");
                    td2.setAttribute("class","odd");
                    }
                    else {
                        r.setAttribute("class", "even");
                        td1.setAttribute("class","even");
                        td2.setAttribute("class","even");
                    }
                    tbody.appendChild(r);
                    r.appendChild(td1);
                    td1.appendChild(document.createTextNode(i));
                    r.appendChild(td2);

                    if(document.getElementById("C").checked){
                        td2.appendChild(document.createTextNode(c2f(i)));
                    }
                    if(document.getElementById("F").checked){
                        td2.appendChild(document.createTextNode(f2c(i)));
                    }
                    if(from > to){i--;}else{i++;}
                    console.log(i);
            }
        }
    }

            function c2f(c) {return (c * 9/5 + 32).toFixed(1);}

            function f2c(f) {return ((f-32) * (5/9)).toFixed(1);}

}