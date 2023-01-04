function process(trxValue) {
    let value = document.getElementById("bar").value;
    //console.log(value);
    var trxValue = parseFloat(value);

    var hfc3 = (trxValue * 4) / 100;
    var hfc6 = (trxValue * 7) / 100;
    var hfc12 = (trxValue * 13.5) / 100;
    var hfc18 = (trxValue * 20) / 100;

    var Tot3 = (trxValue * 104) / 100;
    var Tot6 = (trxValue * 107) / 100;
    var Tot12 = (trxValue * 113.5) / 100;
    var Tot18 = (trxValue * 120) / 100;

    var rent3 = parseFloat(Tot3 / 3).toFixed(2);
    var rent6 = parseFloat(Tot6 / 6).toFixed(2);
    var rent12 = parseFloat(Tot12 / 12).toFixed(2);
    var rent18 = parseFloat(Tot18 / 18).toFixed(2);

    //console.log(trxValue);
    document.getElementById("hfc3").innerHTML = hfc3;
    document.getElementById("hfc6").innerHTML = hfc6;
    document.getElementById("hfc12").innerHTML = hfc12;
    document.getElementById("hfc18").innerHTML = hfc18;

    document.getElementById("Tot3").innerHTML = Tot3;
    document.getElementById("Tot6").innerHTML = Tot6;
    document.getElementById("Tot12").innerHTML = Tot12;
    document.getElementById("Tot18").innerHTML = Tot18;

    document.getElementById("rent3").innerHTML = "Rs. " + rent3 + "/=";
    document.getElementById("rent6").innerHTML = "Rs. " + rent6 + "/=";
    document.getElementById("rent12").innerHTML = "Rs. " + rent12 + "/=";
    document.getElementById("rent18").innerHTML = "Rs. " + rent18 + "/=";

}

process();
