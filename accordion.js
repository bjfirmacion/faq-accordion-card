const questions = [...document.querySelectorAll('.faq-card__question')];
const cardItems = [...document.querySelectorAll('.faq-card__item')];

// Toggle item function
function toggleItem() {
  item = this.parentElement;
  const siblings = [];
  let sibling = item.parentElement.firstElementChild;

  while (sibling) {
    if (sibling !== item) siblings.push(sibling);
    sibling = sibling.nextElementSibling;
  }

  siblings.forEach(sibling => sibling.classList.remove('active'));
  
  item.classList.toggle('active');
}

questions.forEach(btn => btn.addEventListener('click', toggleItem));