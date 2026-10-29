  // Inicialização de Ícones Lucide
        lucide.createIcons();

        // Antes e Depois Interativo
        const baSlider = document.getElementById('baSlider');
        const beforeImg = document.getElementById('beforeImg');
        
        if (baSlider && beforeImg) {
            baSlider.addEventListener('input', (e) => {
                beforeImg.style.width = `${e.target.value}%`;
            });
        }

        // Envio do Formulário para WhatsApp
        const leadForm = document.getElementById('leadForm');
        
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const interesse = document.getElementById('interesse').value;
            
            const phone = "5500000000000"; // Substitua pelo número real
            const message = `Olá! Meu nome é *${nome}* (${whatsapp}) e gostaria de agendar uma consulta para *${interesse}*.`;
            
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        });