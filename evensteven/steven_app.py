from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from sqlalchemy import func, or_
from datetime import datetime
from Räkningar import evenSteven

app = Flask(__name__)

@app.route('/evensteven', methods=['GET', 'POST'])
def evensteven():
    results = []  # Initialize empty results list
    if request.method == 'POST':
        persons = []
        
        for i in range(1, 5):  # Adjust range based on your needs
            person = {
                'name': request.form.get(f'person-{i}'),
                'has_paid': request.form.get(f'has-paid-{i}', 0),
                'to_pay': request.form.get(f'to-pay-{i}', 0),
                'salary': request.form.get(f'salary-{i}', 0)
            }
            # Add the person if name is provided
            if person['name']:
                persons.append(person)

        if persons:
            results = evenSteven(persons)

    return render_template('_pages/evensteven.html', results=results)


if __name__ == '__main__':
    with app.app_context():
        app.run()