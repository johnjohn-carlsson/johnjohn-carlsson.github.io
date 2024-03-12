document.getElementById('evenStevenForm').addEventListener('submit', function(e) {
    // Prevent the form from submitting to a server
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const participants = [];
    for (let i = 1; i <= 4; i++) {  // Assuming 4 participants max as per your form
        participants.push({
            name: formData.get(`person-${i}`) || '', // Default to empty string if undefined
            has_paid: formData.get(`has-paid-${i}`) || '0', // Default to '0' if undefined
            to_pay: formData.get(`to-pay-${i}`) || '0', // Default to '0' if undefined
            salary: formData.get(`salary-${i}`) || '0'  // Default to '0' if undefined
        });
    }

    // Convert your Python function here
    const results = evenSteven(participants);  // Implement this function in JS

    // Format and display results
    let resultsText = '';
    results.forEach(result => {
        if (result.name && !isNaN(result.amount)) { // Check if name exists and amount is a number
            resultsText += `${result.name} should pay ${result.amount}.\n`; // Append this person's result to the results text
        }
    });

    // Display formatted results
    document.getElementById('resultsText').textContent = resultsText.trim(); // Remove any trailing newline
});

function evenSteven(participants) {
    let has_paid_total = 0, to_pay_total = 0, paychecks_total = 0;
    const dictionary_of_participants = {};

    participants.forEach(participant => {
        // Parse numeric fields safely
        const { name, has_paid, to_pay, salary } = participant;
        const parsedHasPaid = parseInt(has_paid) || 0;
        const parsedToPay = parseInt(to_pay) || 0;
        const parsedSalary = parseInt(salary) || 0;

        // Update totals
        has_paid_total += parsedHasPaid;
        to_pay_total += parsedToPay;
        paychecks_total += parsedSalary;

        // Store parsed numbers to avoid re-parsing
        dictionary_of_participants[name] = [parsedHasPaid, parsedToPay, parsedSalary];
    });

    // Calculate total expenses and individual shares
    const total_expenses = has_paid_total + to_pay_total;
    const results = [];

    for (const [name, values] of Object.entries(dictionary_of_participants)) {
        // Prevent division by zero
        const paycheck_fraction = paychecks_total > 0 ? values[2] / paychecks_total : 0;
        const fair_share = total_expenses * paycheck_fraction;
        const difference = fair_share - values[0];  // fair_share - has_paid

        // Only add result if name is not empty
        if (name) {
            results.push({ name, amount: difference.toFixed(2) });  // Format amount as fixed decimal
        }
    }

    return results;
}
