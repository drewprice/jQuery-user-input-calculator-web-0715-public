'use-strict';

function Calculator() {
  if (!(this instanceof Calculator)) return new Calculator();

  $('#equals').click(this.doTheMath.bind(this));
}

Calculator.prototype.doTheMath = function () {
  if (this.nonNumberPresent()) return this.numberError();
  if (this.invalidOperator())  return this.operatorError();

  var result = MagicMath[this.operator()](this.number1(), this.number2());

  this.printToResult(result);
};

Calculator.prototype.number1 = function () {
  return Number( $('#number1').val() );
};

Calculator.prototype.number2 = function () {
  return Number( $('#number2').val() );
};

Calculator.prototype.operator = function () {
  return $('#operator').val();
};

Calculator.prototype.nonNumberPresent = function () {
  return !$.isNumeric(this.number1()) || !$.isNumeric(this.number2());
};

Calculator.prototype.invalidOperator = function () {
  return MagicMath[this.operator()] === undefined;
}

Calculator.prototype.printToResult = function (result) {
  $('#result').text(result);
};

Calculator.prototype.numberError = function (first_argument) {
  this.printToResult('Sorry, one of those is not a valid number!');
};

Calculator.prototype.operatorError = function (first_argument) {
  this.printToResult('Sorry, not a valid operator!');;
};
