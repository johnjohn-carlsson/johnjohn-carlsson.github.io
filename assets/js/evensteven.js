document.getElementById('evenStevenForm').addEventListener('submit', function(e) {
    // Prevent the form from submitting to a server
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const participants = [];
    for (let i = 1; i <= 4; i++) {  // Assuming 4 participants max as per your form
        participants.push({
            name: formData.get(`person-${i}`),
            has_paid: formData.get(`has-paid-${i}`),
            to_pay: formData.get(`to-pay-${i}`),
            salary: formData.get(`salary-${i}`)
        });
    }

    // Convert your Python function here
    const results = evenSteven(participants);  // Implement this function in JS

    // Display results
    document.getElementById('resultsText').textContent = JSON.stringify(results);
});

function evenSteven(participants) {
    let has_paid_total = 0, to_pay_total = 0, paychecks_total = 0;
    const dictionary_of_participants = {};

    participants.forEach(participant => {
        const { name, has_paid, to_pay, salary } = participant;
        has_paid_total += parseInt(has_paid);
        to_pay_total += parseInt(to_pay);
        paychecks_total += parseInt(salary);

        dictionary_of_participants[name] = [parseInt(has_paid), parseInt(to_pay), parseInt(salary)];
    });

    const total_expenses = has_paid_total + to_pay_total;
    const results = [];

    for (const [name, values] of Object.entries(dictionary_of_participants)) {
        const paycheck_fraction = values[2] / paychecks_total;
        const fair_share = total_expenses * paycheck_fraction;
        const difference = fair_share - values[0];  // fair_share - has_paid

        results.push({ name, amount: difference.toFixed(2) });  // Keeping two decimal places for currency
    }

    return results;
}
