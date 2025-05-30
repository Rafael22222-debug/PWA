// Seleciona os elementos HTML necessários
const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrcodeContainer = document.getElementById('qrcode');

// Função para gerar o QR Code
generateBtn.addEventListener('click', () => {
    const text = textInput.value; // Pega o texto do input
    if (text.trim() === '') { // Aqui, o código verifica se, depois de remover os espaços em branco, o valor de text é uma string vazia ('')
        //Se for uma string vazia, isso significa que o usuário não inseriu um texto válido.
        alert('Por favor, insira algum texto ou URL');
        return;
    }

    // Limpa o QR code anterior, se existir
    qrcodeContainer.innerHTML = '';

    // Gera um novo QR code usando a biblioteca QRCode.js
    const qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200,
    });
});
