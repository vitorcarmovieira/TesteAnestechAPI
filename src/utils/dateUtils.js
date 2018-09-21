'use strict';

var moment = require('moment');

exports.durationTime = function(d1, d2){
  var diff = moment.duration(moment(d2).diff(moment(d1)));
  
  var durationFormated = "";
  if (diff.hours() != "0"){
    durationFormated = durationFormated + diff.hours() + "h";
  }
  if (diff.minutes() != "0") {
    durationFormated = durationFormated + diff.minutes() + "m";
  } 
  if (diff.seconds() != "0") {
    durationFormated = durationFormated + diff.seconds() + "s";
  } 

  return durationFormated;
};