function Run()
 {
    var ipNode = document.getElementById("Input");
    var opNode = document.getElementById("Output");
    opNode.textContent = ipNode.value;
    var evalNode = document.getElementById("Eval");
    try {evalNode.textContent = eval(ipNode.value);}
    catch (e) {evalNode.textContent = e;}
  }
