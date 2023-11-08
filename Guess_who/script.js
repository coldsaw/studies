const imgs = document.querySelectorAll('img');
const person = document.querySelectorAll('.person');

person.forEach((person, i) => {
  person.addEventListener('click', () => {
    imgs[i].classList.toggle('hidden');
  });
});
