// Copyright (c) 2020 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: Sep 2023
// This file contains the JS functions for index.html

"use strict"
/*
 * This function
 */
function calculate() {
  // This function converts fahrenheit to celsius

  // Recieve input from user
  const fahrenheitTemperature = parseFloat(
    document.getElementById("fahrenheit-temperature").value
  )

  // Calculate volume
  const celsius = (fahrenheitTemperature - 32) * 5/9

  // Output volume to the user
  document.getElementById("answer").innerHTML =
    "Temperature in celsius: " + celsius.toFixed(2) + " °C"
}
