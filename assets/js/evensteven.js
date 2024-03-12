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
    const resultsContainer = document.getElementById('resultsText');
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        if (result.name) {
            const newLine = document.createElement('p'); // Or 'p' for paragraph elements
            newLine.textContent = `${result.name} ska betala ${result.amount}.`;
            resultsContainer.appendChild(newLine);
        }
    });

});

function evenSteven(participants) {
    let has_paid_total = 0;
    let to_pay_total = 0;
    let paychecks_total = 0;

    // First, accumulate totals from participants
    participants.forEach(participant => {
        participant.has_paid = parseInt(participant.has_paid) || 0;
        participant.to_pay = parseInt(participant.to_pay) || 0;
        participant.salary = parseInt(participant.salary) || 0;

        has_paid_total += participant.has_paid;
        to_pay_total += participant.to_pay;
        paychecks_total += participant.salary;
    });

    // Total expenses combine what's already been paid and what remains to be paid
    const total_expenses = has_paid_total + to_pay_total;
    const results = [];

    // Calculate each participant's fair share based on their income ratio and already paid
    participants.forEach(participant => {
        const income_fraction = participant.salary / paychecks_total;
        const fair_share = total_expenses * income_fraction;
        const difference = fair_share - participant.has_paid;

        // Add the calculated result for this participant
        results.push({
            name: participant.name,
            amount: difference.toFixed(2)
        });
    });

    return results;
}
