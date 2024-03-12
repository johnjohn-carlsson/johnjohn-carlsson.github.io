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
    let total_paid_and_due = 0;
    let results = [];

    // Calculate the total of all 'has_paid' and 'to_pay' amounts
    participants.forEach(participant => {
        participant.has_paid = parseInt(participant.has_paid) || 0;
        participant.to_pay = parseInt(participant.to_pay) || 0;
        participant.salary = parseInt(participant.salary) || 0;

        total_paid_and_due += participant.has_paid + participant.to_pay;
    });

    // Calculate total salary to determine income fractions
    let total_salary = participants.reduce((sum, participant) => sum + participant.salary, 0);

    // Calculate and update what each participant should contribute
    participants.forEach(participant => {
        const income_fraction = participant.salary / total_salary;
        const personal_share = total_paid_and_due * income_fraction;  // Their fair share based on their income
        const amount_to_pay = personal_share - participant.has_paid;  // Deduct what they've already contributed

        results.push({
            name: participant.name,
            amount: amount_to_pay.toFixed(2)  // How much more they need to contribute
        });
    });

    return results;
}
