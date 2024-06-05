package main

import (
	"errors"
	"fmt"
)

func Add(a, b int) int {
	return a + b
}

func Subtract(a, b int) int {
	return a - b
}

func Multiply(a, b int) int {
	return a * b
}

func Divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("cannot divide by zero")
	}
	return a / b, nil
}

func main() {
	fmt.Println("Testing Go functions...")
	fmt.Println("Add:", Add(5, 3))
	fmt.Println("Subtract:", Subtract(5, 3))
	fmt.Println("Multiply:", Multiply(5, 3))
	result, err := Divide(6, 2)
	if err != nil {
		fmt.Println("Divide error:", err)
	} else {
		fmt.Println("Divide:", result)
	}
}
