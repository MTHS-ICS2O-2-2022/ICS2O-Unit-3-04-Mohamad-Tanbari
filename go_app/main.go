// Made by Mohamad
// Made on April 12 2023
//
// This program converts fahrenheit to celsius

package main

import (
	"fmt"
)

func main() {
	// Define variables
	var fahrenheit float64

	// Get user input
	fmt.Print("Enter the temperature in fahrenheit: ")
	fmt.Scan(&fahrenheit)

	// Calculate
	celsius := (fahrenheit - 32) * 5 / 9

	// Round to 2 decimal places
	var roundedCelsius = fmt.Sprintf("%.2f", celsius)

	// Output celcieus to user
	fmt.Println("\nThe temperature in celsius is", roundedCelsius)

	fmt.Println("\nDone.")
}
