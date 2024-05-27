
document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('productName');
    const quantityInput = document.getElementById('quantity');
    const salesForm = document.getElementById('salesForm');
    const salesList = document.getElementById('salesList');

    populateProductOptions();

    loadSales();

    salesForm.addEventListener('submit', event => {
        event.preventDefault();
        const productName = productNameSelect.value;
        const quantity = parseInt(quantityInput.value, 10);

        if (isNaN(quantity) || quantity <= 0) {
            alert('Por favor, insira uma quantidade válida.');
            return;
        }

        // Registrar a venda
        registerSale(productName, quantity);
    });

    // produtos do localStorage
    function populateProductOptions() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.forEach(item => {
            const option = document.createElement('option');
            option.textContent = item.name;
            productNameSelect.appendChild(option);
        });
    }

    //atualizar o Local Storage
    function registerSale(productName, quantity) {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        let updated = false;
        items = items.map(item => {
            if (item.name === productName) {
                // Atualiza a quantidade vendida do item
                item.sold += quantity;
                updated = true;
            }
            return item;
        });

        if (!updated) {
            items.push({ name: productName, sold: quantity });
        }

        // Atualiza o Local Storage com os novos valores
        localStorage.setItem('items', JSON.stringify(items));

        alert(`Venda registrada para o produto: ${productName}, quantidade: ${quantity}`);

        quantityInput.value = '';

        updateSalesSummary(productName, quantity);
    }

    function loadSales() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.forEach(item => {
            updateSalesSummary(item.name, item.sold);
        });
    }

    // Função para atualizar a lista de vendas realizadas
    function updateSalesSummary(productName, quantity) {
        let listItem = document.querySelector(`#salesList li[data-product="${productName}"]`);
        if (!listItem) {
            listItem = document.createElement('li');
            listItem.dataset.product = productName;
            salesList.appendChild(listItem);
        }
        listItem.textContent = `Vendeu ${quantity} unidades de ${productName}`;
    }
});
