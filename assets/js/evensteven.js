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
    let total_unpaid = 0; // Total of 'to-pay' amounts.
    let total_income = 0; // Total income of all participants.

    // First, calculate the total unpaid bills and total income.
    participants.forEach(participant => {
        // Parse numeric fields safely
        participant.has_paid = parseInt(participant.has_paid) || 0;
        participant.to_pay = parseInt(participant.to_pay) || 0;
        participant.salary = parseInt(participant.salary) || 0;

        total_unpaid += participant.to_pay; // Add up all the to-pay amounts.
        total_income += participant.salary; // Add up all the salaries.
    });

    // Total already paid by everyone, this will adjust the fairness
    let total_already_paid = participants.reduce((acc, participant) => acc + participant.has_paid, 0);

    // Determine the adjusted total that needs to be distributed based on previous payments.
    let adjusted_total_to_pay = total_unpaid + total_already_paid; 

    // Calculate the amounts each participant should pay, adjusted for their income and previous payments.
    const results = participants.map(participant => {
        // Calculate the share of the total income.
        const income_fraction = (participant.salary / total_income) || 0;

        // Calculate each person's fair share of the total adjusted expenses.
        const fair_share = adjusted_total_to_pay * income_fraction;

        // The difference now reflects how much more they need to pay, considering what they've already paid.
        const difference = fair_share - participant.has_paid;

        return {
            name: participant.name,
            amount: difference.toFixed(2)  // This represents how much more they need to contribute or have overpaid.
        };
    });

    return results;
}
