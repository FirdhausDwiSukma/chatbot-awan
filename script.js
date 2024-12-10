// Fungsi untuk menampilkan pesan di kotak chat
function appendMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');

    // Tambahkan class berdasarkan pengirim
    if (sender === 'user') {
        messageDiv.className = 'user-message';
    } else {
        messageDiv.className = 'bot-message';
    }

    // Tambahkan teks pesan
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);

    // Scroll otomatis ke bagian bawah
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Fungsi untuk menangani pesan pengguna
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value.trim(); // Hapus spasi kosong di awal/akhir

    if (userMessage === '') {
        return; // Abaikan jika pesan kosong
    }

    // Tampilkan pesan pengguna
    appendMessage(userMessage, 'user');
    userInput.value = ''; // Kosongkan input setelah dikirim

    // Simulasi respons chatbot
    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        appendMessage(botMessage, 'bot');
    }, 500); // Tunda respons selama 500ms untuk realisme
}

// Fungsi untuk menghasilkan respons chatbot
function getBotResponse(message) {
    const responses = {
        "halo": "Halo! Ada yang bisa saya bantu?",
        "apa kabar": "Saya baik, terima kasih! Bagaimana kabar Anda?",
        "siapa kamu": "Saya adalah chatbot sederhana untuk membantu Anda.",
        "terima kasih": "Sama-sama! Jika ada yang lain, silakan tanya.",
        "selamat tinggal": "Selamat tinggal! Semoga harimu menyenangkan."
    };

    // Cari respons berdasarkan input, jika tidak ditemukan gunakan respons default
    return responses[message.toLowerCase()] || "Maaf, saya tidak mengerti pesan Anda.";
}

// Event listener untuk menangani input dengan tombol Enter
document.getElementById('userInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
