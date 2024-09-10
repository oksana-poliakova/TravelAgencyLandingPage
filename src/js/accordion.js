document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
      
        // Toggle active class
        accordionItem.classList.toggle('active');
  
        // Collapse other accordion items
        document.querySelectorAll('.accordion-item').forEach((item) => {
            if (item !== accordionItem) {
            item.classList.remove('active');
            }
        });
    });
});
  