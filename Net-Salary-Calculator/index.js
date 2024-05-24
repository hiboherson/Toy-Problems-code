function calculateNetSalary() {
    // Prompt the user for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter the basic salary (KES):"));
    let benefits = parseFloat(prompt("Enter the benefits (KES):"));

    // Constants for tax, NHIF, and NSSF rates 
    const taxRate = 0.3;
    const nhifRate = 0.015;
    const nssfRate = 0.06;

    // Calculate deductions
    const payee = basicSalary * taxRate;
    const nhifDeductions = basicSalary * nhifRate;
    const nssfDeductions = basicSalary * nssfRate;

    // Calculate gross and net salary
    const grossSalary = basicSalary + benefits;
    const deductions = payee + nhifDeductions + nssfDeductions;
    const netSalary = grossSalary - deductions;

    // Output results using console.log()
    console.log("Gross Salary:", grossSalary.toFixed(2), "KES");
    console.log("Tax (PAYE):", payee.toFixed(2), "KES");
    console.log("NHIF Deductions:", nhifDeductions.toFixed(2), "KES");
    console.log("NSSF Deductions:", nssfDeductions.toFixed(2), "KES");
    console.log("Net Salary:", netSalary.toFixed(2), "KES");
}

// Call the function to calculate net salary
calculateNetSalary();
