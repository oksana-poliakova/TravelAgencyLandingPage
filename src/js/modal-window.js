document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        const tgt = e.target;
        const btn = tgt.closest('.call-btn');
        
        if(btn) {
            document.querySelector(btn.dataset.modal).classList.add('active');
        } else if (tgt.classList.contains('modal-overlay') || tgt.classList.contains('close')) {
            tgt.closest('.modal-container').classList.remove('active');
        }
    });
});