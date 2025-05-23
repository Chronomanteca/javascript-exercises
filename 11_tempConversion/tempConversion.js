const convertToCelsius = function(temp) {
  convertedTemp = (temp-32)*5/9;
  return convertedTemp == 0 ? convertedTemp: parseFloat(convertedTemp.toFixed(1));

};

const convertToFahrenheit = function(temp) {
  convertedTemp = (temp*9/5)+32;
  return convertedTemp == 0 ? convertedTemp: parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
