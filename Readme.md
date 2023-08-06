# Description
An algorithm problem, involving recursion.

<br/>

# Problem Definition

The program takes three words. Assigns a number [0-9] to each letter (codificates them).
If it finds a combination, where sum of the numbers assinged to the letters of words result in:
```
Sum(word1) + Sum(word2) = Sum(word3)
```
the program would print the result, and if there is no combination, would print:
```
There is no response
```

Example:

**With Possible Answer**

Words: 
First word: text,
Second word: tome
Third word: later

- The first possible answer:

If 
```
X=0  L=1  A=3  R=5  T=6  O=7  M=8  E=9
```
then



```
 text          6906
+tome        + 6789 
------   =>   ------
later         13695 
```
- The second possible answer:
If
```
R=0  L=1  E=2  M=4  O=5  A=6  X=7  T=8
```
Then
```
 text          8278
+tome        + 8542 
------   =>   ------
later         16820
```

**Without Possible Answer**

Words: 
First word: javab,
Second word: mide
Third word: nana

<br/>

# To run
Go to `checkWords.js` and change the variable `words` in line 62. `words` is an array where the instances are respectively the first, second and third word.