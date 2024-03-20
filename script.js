$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
    var $this = $(this);
    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
    $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
    });
    });
   };
$('#name').show();
$('#name').animate_Text();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right',
      hoverEnabled: false
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

let fotoArr = ['./pictures/DSC_1003.jpg', './pictures/DSC_1009.jpg', './pictures/DSC_1000.jpg']
let foto = document.getElementById('foto')
let menu = document.getElementById('menu')
let myInfo = document.getElementById('myInfo')
let myProject = document.getElementById('myProject')
let mySkills = document.getElementById('mySkills')
let myContact = document.getElementById('myContact')
let goHome = document.getElementById('goHome')
let mainPage = document.getElementById('mainPage')
let partSkills = document.getElementById('skills')
let partContacts = document.getElementById('contact')
let partProject = document.getElementById('project')
let partEducation = document.getElementById('education')
let contactFooterEmail = document.getElementById('contactFooterEmail')
let timerId = 0, i = 1, choose

let myChart1 = document.getElementById('myChart1')
let myChart2 = document.getElementById('myChart2')
let myChart3 = document.getElementById('myChart3')
let myChart4 = document.getElementById('myChart4')
let myChart5 = document.getElementById('myChart5')
let myChart6 = document.getElementById('myChart6')
let myChart7 = document.getElementById('myChart7')
let myChart8 = document.getElementById('myChart8')

let actualDate = document.getElementsByClassName('actualDate')
for(let d = 0; d < actualDate.length; d++){
    actualDate[d].innerText = new Date().getFullYear()
}
// console.log(actualDate.length, document.getElementsByClassName('actualDate'))


window.addEventListener('load', function(){
    foto.src = `${fotoArr[0]}`
    timerId = setInterval(function(){
        if(i == fotoArr.length) i = 0
        foto.src = `${fotoArr[i]}`
        i++
    }, 1800)
})

goHome.addEventListener('click', function(e){
    mainPage.style.display = 'flex'
    partContacts.style.display = 'none'
    partSkills.style.display = 'none'
    partProject.style.display = 'none'
    partEducation.style.display = 'none'
})

mySkills.addEventListener('click', function(){
    mainPage.style.display = 'none'
    partContacts.style.display = 'none'
    partProject.style.display = 'none'
    partEducation.style.display = 'none'
    partSkills.style.display = 'flex'
new Chart(myChart1, { 
        type: 'doughnut',
        data: {
            labels: ['HTML5 knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [93, 7],
            backgroundColor: ['rgb(42, 182, 119)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart2, { 
        type: 'doughnut',
        data: {
            labels: ['CSS3 knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [93, 7],
            backgroundColor: ['rgb(32, 152, 100', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart3, { 
        type: 'doughnut',
        data: {
            labels: ['Bootstrap knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [90, 10],
            backgroundColor: ['rgb(22, 144, 89)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart4, {
        type: 'doughnut',
        data: {
            labels: ['Materialize knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [90, 10],
            backgroundColor: ['rgb(16, 108, 66)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart5, {
        type: 'doughnut',
        data: {
            labels: ['Java Script knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [70, 30],
            backgroundColor: ['rgb(11, 85, 52)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
})
new Chart(myChart6, {
        type: 'doughnut',
        data: {
            labels: ['Java Script library jQuery knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [67, 33],
            backgroundColor: ['rgb(6, 75, 44)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
    })
new Chart(myChart7, {
        type: 'doughnut',
        data: {
            labels: ['Angular knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [30, 70],
            backgroundColor: ['rgb(2, 50, 20)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
    })
    new Chart(myChart8, {
        type: 'doughnut',
        data: {
            labels: ['React knowledge', 'Knowledge in progress'],
        datasets: [{
            label: ' % ', 
            data: [45, 55],
            backgroundColor: ['rgb(0, 30, 10)', 'rgba(53, 53, 53, 0.1)'],
            hoverOffset: 8,
            hoverBackgroundColor: ['rgb(5, 63, 38)', 'rgba(53, 53, 53, 0.5)']
        }]}, 
        options:{
            plugins: {
            legend: { display: false}
            }
        }
    })
})

myContact.addEventListener('click', function(){
    mainPage.style.display = 'none'
    partSkills.style.display = 'none'
    partProject.style.display = 'none'
    partEducation.style.display = 'none'
    partContacts.style.display = 'flex'
})
myProject.addEventListener('click', function(){
    mainPage.style.display = 'none'
    partSkills.style.display = 'none'
    partContacts.style.display = 'none'
    partEducation.style.display = 'none'
    partProject.style.display = 'flex'
})
myInfo.addEventListener('click', function(){
    mainPage.style.display = 'none'
    partSkills.style.display = 'none'
    partContacts.style.display = 'none'
    partProject.style.display = 'none'
    partEducation.style.display = 'flex'
})