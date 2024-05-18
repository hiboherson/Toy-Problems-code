//Speed Detector

//Description
The speedDetector function is a JavaScript program that calculates demerit points based on the speed of a vehicle. It prompts the user to enter the vehicle's speed (in kilometers per hour) and determines if the speed exceeds the speed limit. If the speed is within the limit, it displays an "OK" message. Otherwise, it calculates demerit points based on the excess speed over the limit and alerts the user about the demerit points. If the demerit points exceed 12, it alerts the user that their license is suspended and advises them to visit the nearest police station.

How to Use
1. Running the function**: Call the speedDetector function.
2. Input: Enter the vehicle's speed when prompted.
3. Output: Depending on the speed, the function will display either an "OK" message or the demerit points.

//Usage
To use the speedDetector function:

1. Include the function in your JavaScript codebase.
2. Call the function whenever you need to check the speed of a vehicle.
3. Follow the prompts to input the vehicle's speed.
4. Check the alerts for the result, whether it's "OK" or demerit points.

Demerit Points Calculation
- The function calculates demerit points based on the excess speed over the speed limit (70 km/h) using a ratio of 5 km/h per demerit point.
- If the demerit points exceed 12, the user's license is suspended, and they are advised to visit the nearest police station.

//Error Handling
- If the user enters an invalid input (not a number), the function displays an alert message indicating the input is invalid.

