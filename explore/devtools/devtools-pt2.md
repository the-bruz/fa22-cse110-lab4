# CSE110LAB4DevToolsPART2

1. The bug is that when the script passes out input values to `num1` and `num2`, it passes two string variables. So when performing `result = num1 + num2`, it concatenate the two strings and returns the unexpected result.
1. I manually convert the type of input to int using `Number()` function.