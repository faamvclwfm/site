
const button1 = document.getElementById('5')
button1.addEventListener('click', () => {
    const cont1=document.getElementById('6')
    cont1.style.display='block'
});
const button2 = document.getElementById('7')

button2.addEventListener('click', () => {
    const cont1=document.getElementById('8')
    cont1.style.display='block'
});
const button3 = document.getElementById('9')

button3.addEventListener('click', () => {
    const cont1=document.getElementById('10')
    cont1.style.display='block'
});
const button4 = document.getElementById('11')

button4.addEventListener('click', () => {
    const cont1=document.getElementById('12')
    cont1.style.display='block'
});
const button5 = document.getElementById('13')

button5.addEventListener('click', () => {
    const cont1=document.getElementById('14')
    cont1.style.display='block'
});
const button6 = document.getElementById('15')

button6.addEventListener('click', () => {
    
    for (let i=6;i<15;i) {
        
        let containerNumber =document.getElementById(i)
        containerNumber.style.display='none'
        i=i+2
    }
    

});
