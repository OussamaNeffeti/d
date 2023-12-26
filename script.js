document.getElementById('savingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer les valeurs du formulaire
    var clientName = document.getElementById('clientName').value;
    var savingPeriod = document.getElementById('savingPeriod').value;
    var initialAmount = document.getElementById('initialAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var annualContribution = document.getElementById('annualContribution').value;
    
    // Stocker les valeurs dans sessionStorage pour éviter la persistance longue durée
    sessionStorage.setItem('clientName', clientName);
    sessionStorage.setItem('savingPeriod', savingPeriod);
    sessionStorage.setItem('initialAmount', initialAmount);
    sessionStorage.setItem('interestRate', interestRate);
    sessionStorage.setItem('annualContribution', annualContribution);
    
    // Rediriger vers la deuxième page
    window.location.href = 'results.html';
});