let flag = "+";
let tmp = 0;
function AddButton(a) {
    tmp = a.value;
    a.value = 0;
    flag = "+";
    console.log(flag);
}
function SubButton(a) {
    tmp = a.value;
    a.value = 0;
    flag = "-";
    console.log(flag);
}
function MullButton(a) {
    tmp = a.value;
    a.value = 0;
    flag = "*";
    console.log(flag);
}
function DivideButtom(a) {
    tmp = a.value;
    a.value = 0;
    flag = "/";
    console.log(flag);
}
function GetResult(a) {
    if (flag == "-") {

        a.value = new Number(tmp) - new Number(a.value);
    } else if (flag == "+") {
        a.value = new Number(tmp) + new Number(a.value);

    } else if (flag == "*") {
        a.value = new Number(tmp) * new Number(a.value);

    } else if (flag == "/") {
        a.value = new Number(tmp) / new Number(a.value);
    }

    b = 0;
}
$('#addbutton').on('click', function () { AddButton(a) });

$('#subbutton').on('click', function () { SubButton(a) });
$('#mullbutton').on('click', function () { MullButton(a) });
$('#dividebuttom').on('click', function () { DivideButtom(a) });



// $('#addbutton').on('click', function () { b.value = a.value; console.log(b.value); a.value = 0; });

$('#getresult').on('click', function () { GetResult(a) }); 
