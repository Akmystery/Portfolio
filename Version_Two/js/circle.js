var i = 0 , prec_one, prec_two, prec_three;
var j = 0, k = 0;

var degs_one = $("#prec_one").attr("class").split(' ')[1];
var degs_two = $("#prec_two").attr("class").split(' ')[1];
var degs_three = $("#prec_three").attr("class").split(' ')[1];

var activeBorder_one = $("#activeBorder_one");
var activeBorder_two = $("#activeBorder_two");
var activeBorder_three = $("#activeBorder_three");

setTimeout(function(){
       loopit("c");
},1);

function loopit(dir){
    if (dir == "c"){
      i++;
      j++;
      k++;
    }
    else{
      i--;
      j--;
      k--;
    }

    if (i < 0)
        i = 0;
    if (i > degs_one)
        i = degs_one;
    prec_one = (100*i)/360;
    $(".prec_one").html(Math.round(prec_one)+"%");

    if (i<=180){
        activeBorder_one.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    else{
        activeBorder_one.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }

    if (j < 0)
        j = 0;
    if (j > degs_two)
        j = degs_two;
    prec_two = (100*j)/360;
    $(".prec_two").html(Math.round(prec_two)+"%");

    if (j<=180){
        activeBorder_two.css('background-image','linear-gradient(' + (90+j) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    else{
        activeBorder_two.css('background-image','linear-gradient(' + (j-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }

    if (k< 0)
        k = 0;
    if (k> degs_three)
        k = degs_three;
    prec_three = (100*k)/360;
    $(".prec_three").html(Math.round(prec_three)+"%");

    if (k<=180){
        activeBorder_three.css('background-image','linear-gradient(' + (90+k) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    else{
        activeBorder_three.css('background-image','linear-gradient(' + (k-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }

    setTimeout(function(){
            loopit("c");
    },1);

}
