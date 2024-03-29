let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'LKR',
});



function process(trxValue) {
    let value = document.getElementById("bar").value;
    //console.log(value);
    
    var trxValue = parseFloat(value.replace(/,/g,""));
    

    var hfc3 = (trxValue * 4.25) / 100;
    var hfc6 = (trxValue * 7.5) / 100;
    var hfc12 = (trxValue * 14) / 100;
    var hfc18 = (trxValue * 20.5) / 100;
    var hfc24 = (trxValue * 27) / 100;

    var Tot3 = (trxValue * 104.25) / 100;
    var Tot6 = (trxValue * 107.5) / 100;
    var Tot12 = (trxValue * 114) / 100;
    var Tot18 = (trxValue * 120.5) / 100;
    var Tot24 = (trxValue * 127) / 100;

    var rent3 = parseFloat(Tot3 / 3).toFixed(2);
    var rent6 = parseFloat(Tot6 / 6).toFixed(2);
    var rent12 = parseFloat(Tot12 / 12).toFixed(2);
    var rent18 = parseFloat(Tot18 / 18).toFixed(2);
    var rent24 = parseFloat(Tot18 / 24).toFixed(2);

    //console.log(trxValue);
    document.getElementById("hfc3").innerHTML = USDollar.format(hfc3);
    document.getElementById("hfc6").innerHTML = USDollar.format(hfc6);
    document.getElementById("hfc12").innerHTML = USDollar.format(hfc12);
    document.getElementById("hfc18").innerHTML = USDollar.format(hfc18);
    document.getElementById("hfc24").innerHTML = USDollar.format(hfc24);

    document.getElementById("Tot3").innerHTML = USDollar.format(Tot3);
    document.getElementById("Tot6").innerHTML = USDollar.format(Tot6);
    document.getElementById("Tot12").innerHTML = USDollar.format(Tot12);
    document.getElementById("Tot18").innerHTML = USDollar.format(Tot18);
    document.getElementById("Tot24").innerHTML = USDollar.format(Tot24);

    document.getElementById("rent3").innerHTML = USDollar.format(rent3);
    document.getElementById("rent6").innerHTML = USDollar.format(rent6);
    document.getElementById("rent12").innerHTML = USDollar.format(rent12);
    document.getElementById("rent18").innerHTML = USDollar.format(rent18);
    document.getElementById("rent24").innerHTML = USDollar.format(rent24);
}


function addPromo1(){

    let value = document.getElementById("bar").value;
    //console.log(value);
    
    var trxValue = parseFloat(value.replace(/,/g,""));
    

    var hfc3 = (trxValue * 4.25) / 100;
    var hfc6 = (trxValue * 7.5) / 100;
    var hfc12 = (trxValue * 0);
    var hfc18 = (trxValue * 20.5) / 100;
    var hfc24 = (trxValue * 27) / 100;

    var Tot3 = (trxValue * 104.25) / 100;
    var Tot6 = (trxValue * 107.5) / 100;
    var Tot12 = trxValue 
    var Tot18 = (trxValue * 120.5) / 100;
    var Tot24 = (trxValue * 127) / 100;

    var rent3 = parseFloat(Tot3 / 3).toFixed(2);
    var rent6 = parseFloat(Tot6 / 6).toFixed(2);
    var rent12 = parseFloat(Tot12 / 12).toFixed(2);
    var rent18 = parseFloat(Tot18 / 18).toFixed(2);
    var rent24 = parseFloat(Tot18 / 24).toFixed(2);

    //console.log(trxValue);
    document.getElementById("hfc3").innerHTML = USDollar.format(hfc3);
    document.getElementById("hfc6").innerHTML = USDollar.format(hfc6);
    document.getElementById("hfc12").innerHTML = USDollar.format(hfc12);
    document.getElementById("hfc18").innerHTML = USDollar.format(hfc18);
    document.getElementById("hfc24").innerHTML = USDollar.format(hfc24);

    document.getElementById("Tot3").innerHTML = USDollar.format(Tot3);
    document.getElementById("Tot6").innerHTML = USDollar.format(Tot6);
    document.getElementById("Tot12").innerHTML = USDollar.format(Tot12);
    document.getElementById("Tot18").innerHTML = USDollar.format(Tot18);
    document.getElementById("Tot24").innerHTML = USDollar.format(Tot24);

    document.getElementById("rent3").innerHTML = USDollar.format(rent3);
    document.getElementById("rent6").innerHTML = USDollar.format(rent6);
    document.getElementById("rent12").innerHTML = USDollar.format(rent12);
    document.getElementById("rent18").innerHTML = USDollar.format(rent18);
    document.getElementById("rent24").innerHTML = USDollar.format(rent24);
}
function addPromo2(){
    let value = document.getElementById("bar").value;
    //console.log(value);
    
    var trxValue = parseFloat(value.replace(/,/g,""));
    

    var hfc3 = (trxValue * 4.25) / 100;
    var hfc6 = (trxValue * 0);
    var hfc12 = (trxValue * 14) / 100;
    var hfc18 = (trxValue * 20.5) / 100;
    var hfc24 = (trxValue * 27) / 100;

    var Tot3 = (trxValue * 104.25) / 100;
    var Tot6 = trxValue;
    var Tot12 = (trxValue * 114) / 100;
    var Tot18 = (trxValue * 120.5) / 100;
    var Tot24 = (trxValue * 127) / 100;

    var rent3 = parseFloat(Tot3 / 3).toFixed(2);
    var rent6 = parseFloat(Tot6 / 6).toFixed(2);
    var rent12 = parseFloat(Tot12 / 12).toFixed(2);
    var rent18 = parseFloat(Tot18 / 18).toFixed(2);
    var rent24 = parseFloat(Tot18 / 24).toFixed(2);

    //console.log(trxValue);
    document.getElementById("hfc3").innerHTML = USDollar.format(hfc3);
    document.getElementById("hfc6").innerHTML = USDollar.format(hfc6);
    document.getElementById("hfc12").innerHTML = USDollar.format(hfc12);
    document.getElementById("hfc18").innerHTML = USDollar.format(hfc18);
    document.getElementById("hfc24").innerHTML = USDollar.format(hfc24);

    document.getElementById("Tot3").innerHTML = USDollar.format(Tot3);
    document.getElementById("Tot6").innerHTML = USDollar.format(Tot6);
    document.getElementById("Tot12").innerHTML = USDollar.format(Tot12);
    document.getElementById("Tot18").innerHTML = USDollar.format(Tot18);
    document.getElementById("Tot24").innerHTML = USDollar.format(Tot24);

    document.getElementById("rent3").innerHTML = USDollar.format(rent3);
    document.getElementById("rent6").innerHTML = USDollar.format(rent6);
    document.getElementById("rent12").innerHTML = USDollar.format(rent12);
    document.getElementById("rent18").innerHTML = USDollar.format(rent18);
    document.getElementById("rent24").innerHTML = USDollar.format(rent24);
}
//process();
