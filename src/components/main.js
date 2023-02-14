//  Unused script
document.addEventListener('DOMContentLoaded', () => {
const readMoreBtn = document.querySelector('.read-more-btn'); 
const text = document.querySelector('.text');

readMoreBtn?.addEventListener('click', (e)=>{
   text.classList.toggle('show-more'); 
//    if(readMoreBtn.innerText === 'READ MORE') {
//     readMoreBtn.innerText === 'READ LESS';
//    } else {
//     readMoreBtn.innerText === 'READ MORE';
//    }

})
})