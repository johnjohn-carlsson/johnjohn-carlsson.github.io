# Original version

# jezzy_betalat = int(input("Hur mycket har Jessica redan betalat? "))
# jezzy_kvar = int(input("Hur mycket har Jessica kvar i räkningar? "))
# jezzy_lön = int(input("Hur mycket fick Jessica i lön avrundat tusen? "))

# john_betalat = int(input("Hur mycket har John-John redan betalat? "))
# john_kvar = int(input("Hur mycket har John-John kvar i räkningar? "))
# john_lön = int(input("Hur mycket fick John-John i lön avrundat tusen? "))

# jezzy_betala = (jezzy_betalat + jezzy_kvar + john_betalat + john_kvar) * (jezzy_lön / (jezzy_lön + john_lön)) - jezzy_betalat
# john_betala = (jezzy_betalat + jezzy_kvar + john_betalat + john_kvar) * (john_lön / (jezzy_lön + john_lön)) - john_betalat


# print(f"Totalt har ni {jezzy_kvar + john_kvar} kvar att betala denna månad.")
# print(f"Jessica ska sätta in {jezzy_betala} på räknekontot.")
# print(f"John-John ska sätta in {john_betala} på räknekontot.")

# ----------------------------------------------------------------------

def evenSteven(participants):
    # Initialize totals
    has_paid_total = 0
    to_pay_total = 0
    paychecks_total = 0
    dictionary_of_participants = {}

    # Iterate over participants, which is now a list of dictionaries
    for participant in participants:
        name = participant['name']
        has_paid = int(participant['has_paid'])
        to_pay = int(participant['to_pay'])
        paycheck = int(participant['salary'])  # Assuming salary corresponds to paycheck

        # Update totals
        has_paid_total += has_paid
        to_pay_total += to_pay
        paychecks_total += paycheck

        # Update participant dictionary
        dictionary_of_participants[name] = [has_paid, to_pay, paycheck]
    
    # Calculate total expenses and distribute costs
    total_expenses = has_paid_total + to_pay_total
    results = []

    for name, values in dictionary_of_participants.items():
        paycheck_fraction = values[2] / paychecks_total
        fair_share = total_expenses * paycheck_fraction
        difference = fair_share - values[0]  # fair_share - has_paid
        
        dictionary_of_participants[name].append(difference)
        # Append results in a format that's easy to use in the template
        results.append({'name': name, 'amount': difference})
    
    return results