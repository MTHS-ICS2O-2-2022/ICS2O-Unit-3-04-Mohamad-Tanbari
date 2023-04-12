// Copyright (c) 2020 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: Sep 2020
// This file contains the JS functions for index.html

/*
* This function 
*/
function calculate () {
  // This function calculates the volume of a sphere

  // Recieve input from user
  const farenheitTemperature = parseFloat(document.getElementById('farenheit-temperature').value)

  // Calculate volume
  const celceius = (farenheitTemperature - 32) * .5556 

  // Output volume to the user
  document.getElementById('answer').innerHTML = "Temperature in Celceius: " + celceius.toFixed(2) + " °C"
}
