document.addEventListener('DOMContentLoaded', function() {
    var clientName = sessionStorage.getItem('clientName');
    document.getElementById('clientNameDisplay').textContent = clientName;  
    var savingPeriod = parseInt(sessionStorage.getItem('savingPeriod'), 10);
    var initialAmount = parseFloat(sessionStorage.getItem('initialAmount'));
    var interestRate = parseFloat(sessionStorage.getItem('interestRate')) / 100;
    var annualContribution = parseFloat(sessionStorage.getItem('annualContribution'));
    var resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    var totalSaved = initialAmount;
    var totalInterest = 0;
    
    for (var year = 1; year <= savingPeriod; year++) {
        var yearInterest = (totalSaved + annualContribution / 2) * interestRate; // Intérêt calculé mi-année après la contribution
        totalInterest += yearInterest;
        totalSaved += annualContribution + yearInterest;
        
        // Insérer une nouvelle rangée dans le tableau
        var row = resultsTable.insertRow();
        row.insertCell(0).textContent = year;
        row.insertCell(1).textContent = annualContribution.toFixed(2) + ' €';
        row.insertCell(2).textContent = yearInterest.toFixed(2) + ' €';
        row.insertCell(3).textContent = totalSaved.toFixed(2) + ' €';
    }
});