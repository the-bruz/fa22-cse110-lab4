# CSE110 LAB4 PART2

1. It will print the last value of `i`, which is 3 in this case. Because the variable `i` is defined using `var`, it is a global variable.
2. It will print the last discounted price, which is 150 in this case. Because the variable `discountedPrice` is defined using `var`, it is a global variable.
3. It will print the last final price, which is 150 in this case. Because the variable `finalPrice` is a gloabl variable defined in the function scope, it is visible inside the whole function.
4. It will return an array with discounted prices in integer. It first creates an array `discounted`. Then, it iterates through the array `prices` and applies `discount` to the original price. Finally, it rounds the price after discount and pushes it to the array `discounted`, which is returned.
5. It will return an error. The variable `i` is a local variable that is only visible inside the for loop.
6. It will return an error. The variable `discountedPrice` is a local variable that is only visible inside the for loop.
7. It will print the last final price, which is 150 in this case. Because the variable `finalPrice` is a defined in the function scope, it is visible inside the whole function.
8. It will return an array with discounted prices in integer. It first creates an array `discounted`. Then, it iterates through the array `prices` and applies `discount` to the original price. Finally, it rounds the price after discount and pushes it to the array `discounted`, which is returned.
9. It will return an error. The variable `i` is a local variable that is only visible inside the for loop.
10. It will print `length`. The constant variable `length` is degined within the funciton, so it is visible to the whole function.
11. It will return an array with discounted prices in integer. It first creates an array `discounted`. Then, it iterates through the array `prices` and applies `discount` to the original price. Finally, it pushes the discounted price to the array `discounted`, which is returned. Notice that though `discounted` is a constant array, it only means its refernce is fixed. Therefore, we can still push values to the array.
12.   A. student.name

​		B. student['Grad Year']

​		C. student.greeting()

​		D. student['Favorite Teacher'].name

​		E. Student.courseLoad[0]

13.  A. 32 (2 maps to '2')

​		B. 1 ('3' maps to 3)

​		C. 3 (null maps to 0)

​		D. 3null (null maps to 'null')

​		E. 4 (true maps to 1)

​		F. 0 (false and null both map to 0)

​		G. 3undefined (undefined maps to 'undefined')

​		H. NaN (No way to convert that can make '3' - undefined resonably return a number)

14.  A. true ('2' maps to 2)

​		B. false (No conversion here. '12''s alphabet order is smaller than '2')

​		C. true (2 maps to '2')

​		D. false (the === disables auto conversion.)

​		E. false (true maps to 1)

​		F. true (no conversion here. Boolean(2) returns true, and true == true)

15. The == does auto conversion to let the types to be the same before comparing. The === does not do so.

17. The result would be [2, 4, 6]. The function uses the parameter [1, 2, 3] as `array` and `doSomething` as the `callback` function. The `doSomething` simply returns two times the value of its parameter `num`. In modifyArray, `array` is iterated once, and each element of it is passed to `doSomething` and then pushed to `newArr`. In the end `newArray` is returned.