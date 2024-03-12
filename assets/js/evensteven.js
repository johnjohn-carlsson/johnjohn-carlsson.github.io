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
    let total_to_pay = 0;
    let total_income = 0;

    participants.forEach(participant => {
        // Parse numeric fields safely
        participant.has_paid = parseInt(participant.has_paid) || 0;
        participant.to_pay = parseInt(participant.to_pay) || 0;
        participant.salary = parseInt(participant.salary) || 0;

        // Update totals
        total_to_pay += participant.to_pay;
        total_income += participant.salary;
    });

    // Calculate the amounts each participant should pay
    const results = participants.map(participant => {
        // Calculate what fraction of the total income each participant's income represents
        const income_fraction = total_income > 0 ? participant.salary / total_income : 0;

        // Calculate each participant's share of the total unpaid bills
        const share_of_bills = total_to_pay * income_fraction;

        // Calculate the difference between what they should have paid and what they have paid
        const difference = share_of_bills - participant.has_paid;

        return {
            name: participant.name,
            amount: difference.toFixed(2)
        };
    });

    return results;
}
