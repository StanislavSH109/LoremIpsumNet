document.addEventListener('DOMContentLoaded', () => {
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const optionsContainer = select.querySelector('.select-options');
        const options = optionsContainer.querySelectorAll('.select-option');
        const hiddenInput = select.querySelector('.select-hidden-input');
        const selectedContentSpan = select.querySelector('.selected-content');
        
        let defaultText = options[0].getAttribute('data-default-text');

        selectedContentSpan.textContent = defaultText;
        hiddenInput.value = '';

        const toggleSelect = (open) => {
            if (open === undefined) {
                open = !select.classList.contains('open');
            }
            
            if (open) {
                document.querySelectorAll('.custom-select.open').forEach(otherSelect => {
                    if (otherSelect !== select) {
                        toggleSelect.call(otherSelect, false);
                    }
                });
                
                select.classList.add('open');
                trigger.classList.add('active');
            } else {
                select.classList.remove('open');
                trigger.classList.remove('active');
            }
        };

        trigger.addEventListener('click', () => {
            toggleSelect();
        });
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                const text = this.textContent.trim();
                options.forEach(o => o.classList.remove('selected'));
                if (value !== '') {
                    this.classList.add('selected');
                }
                selectedContentSpan.textContent = text;
                hiddenInput.value = value;
                toggleSelect(false);
            });
        });
        document.addEventListener('click', (e) => {
            if (!select.contains(e.target)) {
                toggleSelect(false);
            }
        });
    });
});