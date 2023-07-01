
const likeGlyph = document.querySelector('.like-glyph');
const modal = document.querySelector('#modal'); // select the error modal element
modal.classList.add('hidden'); // add the .hidden class to it

const emptyHeart = document.querySelector('.empty-heart'); // select the empty heart element

likeGlyph.addEventListener('click', () => {
mimicServerCall()
.then(() => {
likeGlyph.innerHTML = '♥';
likeGlyph.classList.add('activated-heart');
})
.catch (error => {
 modalMessage.innerText = error
 modal.classList.remove('hidden');

setTimeout(() => {
  modal.classList.add('hidden'); // add the .hidden class to hide the error modal after 3 seconds
}, 3000);

});
});