const overlay = document.querySelector('.overlay');
const overlayMask = document.querySelector('.overlay-mask');
const overlayClose = document.querySelector('.overlay-close');
const overlaysShow = document.querySelectorAll('.overlay-show');
const overlayMain = document.querySelector('.overlay-content');
const body = document.body;

overlaysShow.forEach((overlayShow) => {
    const overlayContent = document.querySelector(overlayShow.dataset.content);
    
    overlayShow.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display = 'block';
        overlayContent.style.display = 'block';
        body.classList.add('noscroll');
        setTimeout (() => {
            overlayContent.style.opacity = 1;
            overlayMask.style.opacity = 1;
        }, 100);
    });

    overlayClose.addEventListener('click', () => {
        overlayMask.style.opacity = 0;
        overlayContent.style.opacity = 0;  
        setTimeout (() => {
            overlay.style.display = 'none';
            overlayContent.style.display = 'none';
            body.classList.remove('noscroll');
        }, 400);
    });
});