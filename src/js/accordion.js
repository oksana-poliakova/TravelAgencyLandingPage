document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
      
        accordionItem.classList.toggle('active');
  
        document.querySelectorAll('.accordion-item').forEach((item) => {
            if (item !== accordionItem) {
            item.classList.remove('active');
            }
        });
    });
});
  