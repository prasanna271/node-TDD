const CONSTANTS = require("../const");


function calculator(operation, ...values) {
  console.log(values);
  switch (operation) {
    case CONSTANTS.CALCULATOR_OPERATIONS.ADDITION: {
      return values.reduce((sum, value) => {
        return sum + value;
      });
    }
    case CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION: {
      return values.reduce((sum, value) => {
        return sum - value;
      });
    }
    case CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION: {
      return values.reduce((sum, value) => {
        return sum * value;
      });
    }
    case CONSTANTS.CALCULATOR_OPERATIONS.DIVISION: {
      return values[1] / values[0];
    }
    default:
      return "Invalid operation";
      break;
  }
};

module.exports = calculator;