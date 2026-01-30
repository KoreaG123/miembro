
// Array de mensajes de broma aleatorios
const messages = [
    "estás en la cima... de mi miembro.\n¡felicidades! 🍆",
    "eres mi miembro.\n¡felicidades! 🎊",
    "¡felicidades!\neres mi miembro favorito. 😏",
    "estás en mi lista...\nla de miembros destacados. 😎",
    "tu Dato fue seleccionado...\npara ser mi miembro. 🎯",
    "¡sorpresa!\neres miembro VIP... de mi colección. 💎",
    "verificado ✓\neres oficialmente mi miembro. 🔥",
    "¡qué coincidencia!\neres justo el miembro que buscaba. 🎰",
    "felicitaciones...\ntu miembro ha sido aprobado. 🏆",
    "¡importante!\neres mi miembro del mes. 📅",
    "resultado:\nmiembro certificado. 💯",
    "¡alerta!\ndetectado como mi miembro especial. 🚨",
    "tu Dato confirma que...\neres mi miembro premium. ⭐",
    "¡ganaste!\neres mi miembro de oro. 🥇",
    "búsqueda completada:\nmiembro encontrado con éxito. 🔍",
    "¡enhorabuena!\ntu miembro está en nuestro registro. 🎪",
    "¡atención!\nmiembro exclusivo detectado. 💼",
    "procesando...\n¡miembro confirmado! ✅",
    "resultado positivo:\nmiembro calificado. 🌟",
    "¡increíble!\neres mi miembro estrella. ⭐"
];

// Array de emojis aleatorios para el resultado
const emojis = ['🎉', '🎊', '🥳', '✨', '🎈', '🎯', '💫', '🌟', '⚡', '🔥'];

// Event listener para el formulario
document.getElementById('datoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const datoInput = document.getElementById('dato');
    const dato = datoInput.value.trim();
    
    if (dato.length < 8) {
        alert('Por favor ingresa un Dato válido de 8 dígitos');
        return;
    }
    
    // Mostrar pantalla de resultado
    showResult(dato);
});

// Función para mostrar el resultado
function showResult(dato) {
    // Seleccionar mensaje y emoji aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Actualizar contenido
    document.getElementById('resultMessage').textContent = randomMessage;
    document.getElementById('datoDisplay').textContent = dato;
    document.querySelector('.result-emoji').textContent = randomEmoji;
    
    // Ocultar formulario y mostrar resultado
    document.getElementById('formScreen').style.display = 'none';
    document.getElementById('resultScreen').classList.add('active');
    
    // Crear confetti
    createConfetti();
}

// Función para resetear el formulario y volver al inicio
function resetForm() {
    // Limpiar formulario
    document.getElementById('dato').value = '';
    
    // Mostrar formulario y ocultar resultado
    document.getElementById('formScreen').style.display = 'block';
    document.getElementById('resultScreen').classList.remove('active');
    
    // Remover confetti
    document.querySelectorAll('.confetti').forEach(c => c.remove());
}

// Función para crear el efecto de confetti
function createConfetti() {
    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Remover confetti después de 5 segundos
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

// Validación para solo números en el input
document.getElementById('dato').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
