const basicSalary = parseFloat(prompt("Enter  basic salary:"));
const benefits = parseFloat(prompt("Enter the total benefits:"));

// Tax calculation
const taxRate = 0.15;
const tax = basicSalary * taxRate;

// NHIF Deductions
const nhifRate = 0.025; 
const nhif = basicSalary * nhifRate;

// NSSF Deductions
const nssfRate = 0.06; 
const nssf = basicSalary * nssfRate;

// Gross Salary
const grossSalary = basicSalary + benefits;

// Net Salary
const netSalary = grossSalary - tax - nhif - nssf;

// Output
console.log("Tax: $" + tax.toFixed(2));
console.log("NHIF Deductions: $" + nhif.toFixed(2));
console.log("NSSF Deductions: $" + nssf.toFixed(2));
console.log("Gross Salary: $" + grossSalary.toFixed(2));
console.log("Net Salary: $" + netSalary.toFixed(2));
