Rotations on a circle. Each input value is direction followed by number.
Left from 0 one makes it point at 99. Range on circle is **0-99**
The dial starts at 50.
**The password = number of times the dial reaches 0**

Iterate through the list of rotations
if the direction is right, add the value to the current
if the sum > 99.
remainder = sum % 99
if remainder = 1, add 1 to pointedToZero counter
if the direction is left, subtract the value from the current
if the difference < 0
remainder = diff % 99
if remainder = -1, add 1 to pointedToZero counter

The idea is: if the dial bumps past 99 in either direction we can tell by simply getting the remainder. If the remainder = 0 then the dial is at 99. If it's 1, then the dial is at it's first position, 0.
50
