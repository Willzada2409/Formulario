document.getElementById('vacationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#vacationForm input, #vacationForm select');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    alert("Solicitação de Férias enviada com sucesso!");
    document.getElementById('vacationForm').reset();
});
