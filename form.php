<div class="bmi-calculator">
    <div class="weight">
        <div class="label">Weight</div>
        <div class="inputs">
            <input type="number" min="1" value="62">
            <div class="unit">KG</div>
        </div>
        <div class="units">
            <label><input type="radio" onclick="bmiCalculatorChangeUnit('KG');" name="w_unit" value="kg" checked> [KG] KILOGRAM</label>
            <label><input type="radio" onclick="bmiCalculatorChangeUnit('LB');" name="w_unit" value="lb"> [LB] POUND</label>
        </div>
        <div class="buttons">
            <button type="button" onclick="bmiCalculatorNext();">Next</button>
        </div>
    </div>
    <div class="height">
        <div class="label">Height</div>
        <div class="inputs">
            <input type="number" id="feet" min="1" value="5">
            <div class="unit">Feet</div>
            <input type="number" id="inches" min="1" value="10">
            <div class="unit">Inches</div>
        </div>
        <div class="buttons">
            <button type="button" class="black-btn" onclick="bmiCalculatorBack();">Back</button>
            <button type="button" onclick="bmiCalculatorResult();">Calculate</button>
        </div>
    </div>

    <div class="result">
        <p>
            Your BMI <strong class="value">0</strong><br>
            <span class="rank">UNDERWEIGHT</span>
        </p>
    </div>
</div>