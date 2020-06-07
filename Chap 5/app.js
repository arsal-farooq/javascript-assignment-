

// TTASK 1 //

/ var a = +prompt ("ENTER  VAlUE for addition")
var b = +prompt  ("ENTER ANOTHER")
 var c =  a+b
 document.write("sum of " , a, " " + "&" , " " + b,  " " +"is", " " + c)



//  TASK 2 //

var d = +prompt ("ENTER  Value for substraction")
var e = +prompt  ("ENTER ANOTHER")
 var f =  d-e
 document.write("subtraction of " , d, " " + "&" , " " + e,  " " +"is", " " + f)


 var g = +prompt ("ENTER VAlUE for divison")
 var h = +prompt  ("ENTER ANOTHER")
  var i =  g/h
  document.write("divide of " , g, " " + "&" , " " + h,  " " +"is", " " + i)


  var j = +prompt ("ENTER VAlUE for modulus ")
var k = +prompt  ("ENTER ANOTHER")
 var l =  j%k
 document.write("Modulus of " , j, " " + "&" , " " + k,  " " +"is", " " + l)

 


// Task 3 //


var heading= "Value after variable declaration is undefined <br>";
document.write(heading);

var a= 5;
var intial="intial value is 5 <br>";
document.write(intial);

var b= ++a
document.write("value after increment is ", " "+ a, "<br>" )

var c= b+7
document.write("value after adding 7 is"," " + c, "<br>")

var d= --c
document.write("value after decrement is  " , " "  + c, "<br>" )


var e= c%3
document.write ("The remainder is ", " " + e)



// TSAK 4 //

var ticket= 600

var buying = ticket * 5

document.write("Total cost to buy 5 tickets to a movie is ", " " + buying, " PKR ")



// TASK 6//

var celsius =   prompt("ENTER VALUE IN DEGREE")
var Fahrenheit= (celsius * 9/5) + 32
document.write(celsius, " \u00B0 C is " + Fahrenheit, " ", "\u00B0 F")



var Fahrenheit = prompt("ENTER VALUE IN FAHRENHEIT")

var celsius = ( Fahrenheit - 32 ) *5/9

document.write( Fahrenheit, "\u00B0 F is " + celsius, " ", " \u00B0 C" )




// TASK 7 //


document.write( "<b> SHOPPING CART </b> <br> <br>")


 var item1   = 650

 document.write("Price of  item 1 is ", " " + item1   , "<br>" )

 var quantity1 =   prompt("enter quantity item 1")

  document.write (" Quantity  of item  1 is ", quantity1, " <br> " )

  var item2 = 100

  document.write( "Price of item 2 is  ", " " + item2, "<br>")

  var quantity2 =  prompt("enter quantity of item 2")
  document.write(" Quantity of item 2 is  ", " " + quantity2, " <br> ")

  var shipping  = 100
 document.write(" Shipping charges is " , " " +shipping, " <br>" )

 var totalcost = item1*quantity1 + item2*quantity2 + shipping

 document.write(" Total cost is   ", " " + totalcost)



// TASK 12 //


document.write("<b> THE  GEOMETRIZER </b> <br>")


 var radius = 20;

 document.write ("the radius of circle is ", " " + radius, "<br>")

  var circumference=  2 * 3.142 * radius ;

 document.write (" the circumference is " , " " + circumference, " <br>")

  var area = 3.142 * radius^2

  document.write("The area is " , " "+ area)



// TASK 11 //

var currentyear = prompt(" ENTER CURRENT YEAR ")
var birthyear = prompt(" ENTER YOUR BIRTH YEAR")
var age = currentyear - birthyear
document.write( " Current year : ",  " " + currentyear, " <br>", "Your birth year:", " "+birthyear, "<br>", "Your age  is ", " "+age )
