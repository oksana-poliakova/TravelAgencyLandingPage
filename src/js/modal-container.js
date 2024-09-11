document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        const tgt = e.target;
        const btn = tgt.closest('.call-btn');

        if (btn) {
            document.querySelector(btn.dataset.modal).classList.add('active');
            document.body.classList.add('no-scroll');
        } else if (tgt.classList.contains('modal-overlay') || tgt.closest('.close')) {
            const modalContainer = tgt.closest('.modal-container') || document.querySelector('.modal-container.active');
            modalContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});
