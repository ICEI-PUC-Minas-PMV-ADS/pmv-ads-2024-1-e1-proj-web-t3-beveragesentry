
    document.addEventListener("DOMContentLoaded", function() {
      const salesForm = document.getElementById('sales-form');
      const quantityInput = document.getElementById('quantity');
      const priceInput = document.getElementById('price');
      const totalPriceInput = document.getElementById('totalPrice');

      // Adiciona um ouvinte de evento para calcular o preço total quando a quantidade ou o preço mudar
      quantityInput.addEventListener('input', calculateTotalPrice);
      priceInput.addEventListener('input', calculateTotalPrice);

      // Função para calcular o preço total
      function calculateTotalPrice() {
        const quantity = parseFloat(quantityInput.value);
        const price = parseFloat(priceInput.value);
        const totalPrice = quantity * price;
        totalPriceInput.value = totalPrice.toFixed(2); // Limita o preço total a 2 casas decimais
      }

      // Adiciona um ouvinte de evento para lidar com o envio do formulário
      salesForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Aqui você pode adicionar a lógica para enviar os dados do formulário para onde desejar
        // Por exemplo, você pode enviar os dados para um servidor usando AJAX ou fetch()

        // Após o envio bem-sucedido, você pode limpar os campos do formulário se desejar
        salesForm.reset();
        // Além disso, você pode adicionar uma mensagem de confirmação ao usuário
        alert('Venda adicionada com sucesso!');
      });
    });
