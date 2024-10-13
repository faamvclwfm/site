
for (let i=5;i<14;i++) {
    const buttonID =document.getElementById(i)
    buttonID.addEventListener('click', () => {
        const containerId =document.getElementById(i+1)
        containerId.style.display='block'
    })
}
const button6 = document.getElementById('15')
button6.addEventListener('click', () => {
    for (let i=6;i<15;i) {
        
        let containerNumber =document.getElementById(i)
        containerNumber.style.display='none'
        i=i+2
    }
});
