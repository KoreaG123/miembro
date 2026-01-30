
// Array de mensajes de broma aleatorios
const messages = [
    "estás en la cima... de mi miembro.\n¡felicidades! 🍆",
    "eres mi miembro.\n¡felicidades! 🎊",
    "¡felicidades!\neres la cabeza mi miembro . 😏",
    "estás en mi lista...\nla de miembros destacados. 😎",
    "tu Dato fue seleccionado...\npara ser el pelo de miembro. 🎯",
    "¡sorpresa!\neres miembro VIP... 💎",
    "verificado ✓\neres oficialmente el masajeador de mi miembro. 🔥",
    "¡qué coincidencia!\nTe pareces Ami miembro . 🎰",
    "felicitaciones...\ntu miembro destacado zona vip. 🏆",
    "¡importante!\neres El ultimo pelo de mi miembro. 📅",
    "resultado:\nmiembro certificado. 💯",
    "¡alerta!\ndetectado eres el huevon que se quedra 10hrs sentado. 🚨",
    "tu Dato confirma que...\neres miembro premium. ⭐",
    "¡ganaste!\neres  miembro de oro. 🥇",
    "búsqueda completada:\ncabeza de miembro encontrado con éxito. 🔍",
    "¡enhorabuena!\ntu Eres selecionado para dar masajes ami miembro está en nuestro registro. 🎪",
    "¡atención!\nmiembro exclusivo detectado. 💼",
    "procesando...\n¡miembro confirmado! ✅",
    "resultado positivo:\nmiembro calificado. 🌟",
    "¡increíble!\neres miembro estrella. ⭐"
];

// Array de emojis aleatorios
const emojis = ['🎉', '🎊', '🥳', '✨', '🎈', '🎯', '💫', '🌟', '⚡', '🔥'];

// Función que se ejecuta al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    // Obtener el dato del localStorage
    const dato = localStorage.getItem('datoIngresado');
    
    // Si no hay dato, redirigir al inicio
    if (!dato) {
        window.location.href = 'index.html';
        return;
    }
    
    // Mostrar resultado
    mostrarResultado(dato);
    
    // Crear confetti
    createConfetti();
});

// Función para mostrar el resultado
function mostrarResultado(dato) {
    // Seleccionar mensaje y emoji aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Actualizar contenido
    document.getElementById('resultMessage').textContent = randomMessage;
    document.getElementById('datoDisplay').textContent = dato;
    document.getElementById('resultEmoji').textContent = randomEmoji;
}

// Función para volver al inicio
function volverInicio() {
    // Limpiar localStorage
    localStorage.removeItem('datoIngresado');
    
    // Redirigir al index
    window.location.href = 'index.html';
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
