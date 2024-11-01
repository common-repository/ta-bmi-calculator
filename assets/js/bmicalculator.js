var $ = jQuery.noConflict();
var weight;
var unit;
var height;
var bmiResult;

$(document).ready(function() {
    //  On page load focus and select the text
    $('.bmi-calculator .weight .inputs input').focus().select();

    //  On focus select the text
    $(document).on('focus', '.bmi-calculator .weight .inputs input', function (e) {
        $(this).select();
    });

    //  On focus select the text
    $(document).on('focus', '.bmi-calculator .height .inputs input', function (e) {
        $(this).select();
    });

    //  On keypress check for Enter key
    $(document).on('keypress', '.bmi-calculator .weight .inputs input', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            
            bmiCalculatorNext();
        }
    });

    //  On keypress check for Enter key
    $(document).on('keypress', '.bmi-calculator .height .inputs input', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            
            bmiCalculatorResult();
        }
    });
});

// OnClick Methods
function bmiCalculatorNext() {
    bmiCalculatorConvertWeight();

    $('.bmi-calculator .weight').hide();
    $('.bmi-calculator .height').fadeIn();

    $('.bmi-calculator .height .inputs input#feet').focus();
}

function bmiCalculatorResult() {
    var resultValue = $('.bmi-calculator .result .value');
    var resultRank = $('.bmi-calculator .result .rank');

    bmiCalculatorConvertHeight();

    bmiResult = parseFloat(weight / Math.pow(height, 2)).toFixed(1);

    resultRank.removeClass('underweight healthy overweight obesity');

    if (bmiResult < 18.5) {
        resultRank.addClass('underweight').html('UNDERWEIGHT');
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        resultRank.addClass('healthy').html('HEALTHY');
    } else if (bmiResult >= 25.0 && bmiResult <= 29.9) {
        resultRank.addClass('overweight').html('OVERWEIGHT');
    } else {
        resultRank.addClass('obesity').html('OBESITY');
    }

    resultValue.html(bmiResult);

    $('.bmi-calculator .result').hide().fadeIn();
}
// End OnClick Methods

//  Convert weight into kilograms
function bmiCalculatorConvertWeight() {
    var w = $('.bmi-calculator .weight .inputs input').val();

    unit = $('.bmi-calculator .weight .units input:checked').val();

    if (unit == 'lb') {
        weight = parseFloat(w * 0.45359237).toFixed(2);
    } else {
        weight = parseFloat(w).toFixed(2);;
    }

    return weight;
}

//  Convert height into meters
function bmiCalculatorConvertHeight() {
    var feet = $('.bmi-calculator .height .inputs input#feet').val();
    var inches = $('.bmi-calculator .height .inputs input#inches').val();

    var m1 = feet * 0.3048;
    var m2 = inches * 0.0254;

    height = parseFloat(m1 + m2).toFixed(2);

    return height;
}

//  Back button call
function bmiCalculatorBack() {
    $('.bmi-calculator .result').hide();
    $('.bmi-calculator .result .value').text('0');
    $('.bmi-calculator .result .rank').text('UNDERWEIGHT').removeClass('underweight healthy overweight obesity').addClass('underweight');
    $('.bmi-calculator .height').hide();
    $('.bmi-calculator .weight').fadeIn();
}

function bmiCalculatorChangeUnit(unit) {
    $('.bmi-calculator .weight .inputs .unit').text(unit);
}
