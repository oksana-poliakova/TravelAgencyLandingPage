document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(e){var e=e.target,t=e.closest(".call-btn");t?(document.querySelector(t.dataset.modal).classList.add("active"),document.body.classList.add("no-scroll")):(e.classList.contains("modal-overlay")||e.closest(".close"))&&((e.closest(".modal-container")||document.querySelector(".modal-container.active")).classList.remove("active"),document.body.classList.remove("no-scroll"))})});