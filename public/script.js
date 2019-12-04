jQuery('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
    var step = jQuery(e.target).data('step');
    var percent = (parseInt(step) / 8) * 100;
    jQuery('.progress-bar').css({
        width: percent + '%'
    });
    jQuery('.progress-bar').text("Stap " + step + " van 8");
});

$('#original').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles2.css"]').attr({href : "styles.css"});
});

$('#original2').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles.css"]').attr({href : "styles2.css"});
});

$('#original3').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles2.css"]').attr({href : "styles3.css"});
});

$('#original4').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles3.css"]').attr({href : "styles4.css"});
});

$('#original5').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles4.css"]').attr({href : "styles5.css"});
});

$('#original6').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles5.css"]').attr({href : "styles6.css"});
});

$('#original7').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles6.css"]').attr({href : "styles7.css"});
});

$('#original8').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles7.css"]').attr({href : "styles8.css"});
});

$('#original55').click(function (){
  $("body").fadeOut(0);
  $("body").fadeIn(1000);
  $('link[href="styles4.css"]').attr({href : "styles5.css"});
});

$('#interface').change(function(){ //if the select value gets changed
var imageSource = $(this).val(); //get the selected value
if(imageSource && imageSource != ""){ //if it has data
   $('#screenshot').html('<img src="'+imageSource+'">'); // insert image in div image-location
} else {
   $('#screenshot').html(''); //remove content from div image-location, thus removing the image
}
})

function myRed() {
    var x = document.querySelectorAll("#veranderKleur");
    x[0].style.setProperty("background-color", "#8a2727", "important");
}

function myGreen() {
    var x = document.querySelectorAll("#veranderKleur");
    x[0].style.setProperty("background-color", "#3c8c3c", "important");
}

function myBlue() {
    var x = document.querySelectorAll("#veranderKleur");
    x[0].style.setProperty("background-color", "#1d476c", "important");
}

var displayUsername = function() {
  var username = document.getElementById('username').value;
  if(username != '') {
    document.getElementById('getName').innerHTML = 'Hey '+username+'!'
    document.getElementById('getName2').innerHTML = 'Goed gedaan, '+username+'!'
    document.getElementById('getName3').innerHTML = 'Gefeliciteerd, '+username
  }
}

var displaySurname = function() {
  var surname = document.getElementById('surname').value;
  if(surname != '') {
    document.getElementById('getSurname').innerHTML = '&nbsp'+surname+'!'
  }
}

var displayMajor = function() {
  // var major = document.getElementById("major").value;
  var major = $("#major :selected").text();
  if(major != '') {
    document.getElementById('getMajor').innerHTML = major
    document.getElementById('getMajor2').innerHTML = '<b>Opleiding:</b> '+major
  }
}

var displayMotive = function() {
  var motive = document.getElementById('motive').value;
  if(motive != '') {
    document.getElementById('getMotive').innerHTML = '"'+motive+'"'
    document.getElementById('getMotive2').innerHTML = '<b>Motivatie:</b> '+motive
  }
}

var displayPlanner = function() {
  var planner = document.getElementById('planner').value;
  if(planner != '') {
    document.getElementById('getPlanner').innerHTML = '<b>Leerdoel:</b> '+planner
  }
}

var displayReview = function() {
  // var major = document.getElementById("major").value;
  var review = $("#review :selected").text();
  if(review != '') {
    document.getElementById('getReview').innerHTML = '<b>Review:</b> '+review
  }
}

var displayInterface = function() {
  // var major = document.getElementById("major").value;
  var interface = $("#interface :selected").text();
  if(interface != '') {
    document.getElementById('getInterface').innerHTML = '<b>Interface:</b> '+interface
  }
}

function displayAllFunctions() {
    displayUsername();
    displaySurname();
    displayMajor();
    displayPlanner();
    displayMotive();
    displayReview();
    displayInterface();
}

$("#colorButton").click(function()
{
   $("#original6").prop('disabled', false);
});

$("#colorButton2").click(function()
{
   $("#original6").prop('disabled', false);
});

$("#colorButton3").click(function()
{
   $("#original6").prop('disabled', false);
});

$(document).ready(function (){
    $('#interface').change(function(){
        if($("#interface").val().length){
                $("#original8").prop('disabled', false);
        } else {
                $("#original8").prop('disabled', true);
        }
    });
});

$(document).ready(function (){
    $('#review').change(function(){
        if($("#review").val().length){
                $("#original7").prop('disabled', false);
        } else {
                $("#original7").prop('disabled', true);
        }
    });
});

$(document).ready(function (){
    $('#planner').change(function(){
        if($("#planner").val().length){
                $("#original4").prop('disabled', false);
        } else {
                $("#original4").prop('disabled', true);
        }
    });
});

$(document).ready(function (){
    $('#motive').change(function(){
        if($("#motive").val().length){
                $("#original3").prop('disabled', false);
        } else {
                $("#original3").prop('disabled', true);
        }
    });
});

$(document).ready(function (){
    $('#username, #surname, #major').change(function(){
        if($("#username").val().length && $("#surname").val().length && $("#major").val().length){
                $("#original2").prop('disabled', false);
        } else {
                $("#original2").prop('disabled', true);
        }
    });
});

$(function(){
    $('#btn').click(function(){
        startTimer();
    });
});

var timerCount = 0;
//var pumpLastTime = "";
//var pumpCounter = 0;
var second = "";
var minute = "";
var hour = "";
var sliceVal = 0;

function startTimer() {
    if (timerCount == 0) {
        jQuery('#timer').css("display", "block").css("margin-top", "-8px");
        jQuery('#timerTxt').html('Timer running').css("font-size", "small");
        jQuery('#btn').css("height", "20px").css("vertical-align", "top");
        jQuery('#btn').addClass("green");
        var time = getTime();
        timerAction(0);
        timerCount = 1;
    }
    else {
        jQuery('#timer').css("display", "none");
        jQuery('#btn').css("height", "40px").css("vertical-align", "top");
        jQuery('#btn').removeClass("green");
        jQuery('#timerTxt').html('Start Timer').css("font-size", "20px");
        timerAction(1);
        timerCount = 0;
    }
}

function timerAction(action) {
    var counter = 0;
    var stopwatch = jQuery('#timer');
    var arr = jQuery('#timer').html().split(':');

    if (second == "") {
        second = parseInt("00");
    } else {
        second = arr[2];
    }

    if (minute == "") {
        minute = parseInt("00");
    } else {
        minute = arr[1];
    }

    if (hour == "") {
        hour = parseInt("00");
    } else {
        hour = arr[0];
    }

    if (action == 0) {
        pumpTimerId = setInterval(function () {
            counter++;
            second++;

            if (hour.toString().length == 4) {
                sliceVal = -4;
            }
            else if (hour.toString().length == 3) {
                sliceVal = -3;
            }
            else {
                sliceVal = -2;
            }

            if (second >= 60) {
                minute++;
                if (minute >= 60) {
                    hour++;
                    minute = 0;
                }
                second = 0;
                stopwatch.html(('0' + hour).slice(sliceVal) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2));
            } else {
                stopwatch.html(('0' + hour).slice(sliceVal) + ":" + ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2));
            }
        }, 1000, true);
    }
    else {
        clearInterval(pumpTimerId);
        counter = 0;
        pumpLastTime = stopwatch.html();
    }
}

function getTime() {
    Number.prototype.padLeft = function (base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    };

    var d = new Date,
            dformat = [d.getFullYear().padLeft(),
                   (d.getMonth() + 1).padLeft(),
                    d.getDate()].join('-') +
                   ' ' +
                  [d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');
    return dformat;
}
