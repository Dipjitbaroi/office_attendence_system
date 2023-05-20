const btn = document.querySelector('.customBtn');

btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'rgb(0, 165, 0)';
    btn.style.border = '4px solid rgb(0, 129, 0)';
    btn.innerHTML = 'Present Done';
    btn.style.boxShadow = '0 0 40px rgb(0, 165, 0)';
    // btn.addEventListener('mouseover', () => {
    //     btn.style.border = '3px solid rgb(0, 147, 0)';
    //     btn.style.boxShadow = '0 0 40px rgb(0, 171, 0)';
    // });
    // btn.addEventListener('mouseout', () => {
    //     btn.style.border = '3px solid rgb(0, 147, 0)';
    //     btn.style.boxShadow = 'none'
    // });
})

