let caption = document.getElementById('caption')
let btnAbout = document.getElementById('btnAbout')
let textAbout = document.getElementById('textAbout')
let btnHidden = document.getElementById('btnHidden')
let timerId = 0
let textDruk = function(element,text,index){
    if(index == undefined || index >= text.length) clearTimeout(timerId)
    element.innerText  =text.toString().substring(0, index);
    timerId = setTimeout(textDruk, 180, element, text, index+1);
}
window.addEventListener('load', textDruk(caption,'Rely on us', 0))

btnAbout.addEventListener('click', function(){
    textAbout.style.maxHeight = textAbout.scrollHeight + 'px'
    btnHidden.style.display = 'flex'
})
btnHidden.addEventListener('click', function(){
    btnHidden.style.display = 'none'
    textAbout.style.maxHeight = 0
})

