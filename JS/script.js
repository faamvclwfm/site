const buttonsId = ['continueButtonfirst','continueButtonsecond','continueButtonthird','continueButtonfourth','continueButtonfifth']
const sectionsId = ['someDetail1','someDetail2','someDetail3','someDetail4','someDetail5']
buttonsId.forEach((button,index)=>{
    document.getElementById(button).addEventListener('click',()=> {
        document.getElementById(sectionsId[index]).style.display='block'
    })
})
document.getElementById('hideButton').addEventListener('click', ()=>{
    sectionsId.forEach((index)=>{
        const section =document.getElementById(index)
        section.style.display='none'})
})
