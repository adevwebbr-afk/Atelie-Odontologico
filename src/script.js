        // Initialize Icons
        lucide.createIcons();

        // 1. Before/After Interactive Slider Logic
        const baSlider = document.getElementById('baSlider');
        const beforeImg = document.getElementById('beforeImg');
        
        if (baSlider && beforeImg) {
            baSlider.addEventListener('input', (e) => {
                beforeImg.style.width = `${e.target.value}%`;
            });
        }

        // 2. Dynamic Treatment Estimator Logic
        const calcBtns = document.querySelectorAll('.calc-option-btn');
        const calcPrice = document.getElementById('calcPrice');
        const calcTime = document.getElementById('calcTime');

        calcBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                calcBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                calcPrice.textContent = btn.dataset.price;
                calcTime.textContent = `Duração do Tratamento: ${btn.dataset.time}`;
            });
        });

        // 3. FAQ Accordion Toggle
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isOpen) item.classList.add('active');
            });
        });

        // 4. Form Submission Router to WhatsApp
        const leadForm = document.getElementById('leadForm');
        
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const interesse = document.getElementById('interesse').value;
            
            const phone = "5500000000000"; // Substitua pelo número real do WhatsApp da clínica
            const message = `Olá! Meu nome é *${nome}* (${whatsapp}) e tenho interesse em agendar uma avaliação para *${interesse}*. Gostaria de saber os horários disponíveis.`;
            
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        });