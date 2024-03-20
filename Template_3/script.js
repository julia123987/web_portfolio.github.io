let typeMeny = document.getElementById('typeMeny')
let lunch = document.getElementById('0')
let dinner = document.getElementById('1')
let breakfast = document.getElementById('2')
let nameDish = document.getElementById('nameDish')
let text = document.getElementById('text')
let price = document.getElementById('price')
let pictures = document.getElementById('image')
let detailsMeny = document.getElementById('detailsMeny')
let position = document.getElementById('position')
let addComments = document.getElementById('addComments')
let add = document.getElementById('add')
let arrowMenu = [
    [
        {img: './images/Rectangle 99.png', nameDish: 'Classic Goulash', text: '12 Person Minimum on All Packages.', price: '80$'},
        {img: './images/Rectangle 101.png', nameDish: 'Classic Italian Spaghetti', text: '12 Person Minimum on All Packages.', price: '70$'},
        {img: './images/Rectangle 100.png', nameDish: 'Grilled Chicken', text: '12 Person Minimum on All Packages.', price: '100$'},
        {img: './images/Rectangle 102.png', nameDish: 'Fried Pork Steak', text: '12 Person Minimum on All Packages.', price: '110$'},
        {img: './images/Rectangle 103.png', nameDish: 'Stir Fry Noodles', text: '12 Person Minimum on All Packages.', price: '65$'},
        {img: './images/Rectangle 104.png', nameDish: 'Healthy Salad', text: '12 Person Minimum on All Packages.', price: '85$'}
    ],
    [
        {img: './images/pngegg.png', nameDish: 'Grilled Salmon with vegetables', text: '12 Person Minimum on All Packages.', price: '95$'},
        {img: './images/pngegg (1).png', nameDish: 'Gamburger', text: '12 Person Minimum on All Packages.', price: '105$'},
        {img: './images/pngegg (2).png', nameDish: 'Chicken Nuggets', text: '12 Person Minimum on All Packages.', price: '95$'},
        {img: './images/pngegg (3).png', nameDish: 'Fobo soup', text: '12 Person Minimum on All Packages.', price: '90$'},
        {img: './images/pngegg (4).png', nameDish: 'Grilled fish with tomato souce', text: '12 Person Minimum on All Packages.', price: '115$'},
        {img: './images/pngegg (5).png', nameDish: 'Buyabes', text: '12 Person Minimum on All Packages.', price: '105$'}
    ],
    [
        {img: './images/pngegg (6).png', nameDish: 'Oatmeal with berries', text: '12 Person Minimum on All Packages.', price: '30$'},
        {img: './images/pngegg (7).png', nameDish: 'Sandwich croque madame', text: '12 Person Minimum on All Packages.', price: '45$'},
        {img: './images/pngegg (8).png', nameDish: 'Pancakes with butter cream and fruit', text: '12 Person Minimum on All Packages.', price: '35$'},
        {img: './images/pngegg (9).png', nameDish: 'Bavarian breakfast with sausages', text: '12 Person Minimum on All Packages.', price: '50$'},
        {img: './images/pngegg (10).png', nameDish: 'Chocolate panacotta with fruit', text: '12 Person Minimum on All Packages.', price: '35$'},
        {img: './images/pngegg (11).png', nameDish: 'Belgian waffles with fruit and ice cream', text: '12 Person Minimum on All Packages.', price: '40$'}
    ]
    
]

let arrowReview = [
    {name: 'Vincent Smith', position: 'CEO in Reitmo', reviewTitle: 'I love Sway', reviewDetails: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.'}
]

typeMeny.addEventListener('click', function(e){
    detailsMeny.style.display = 'flex'
    let choose = e.target.id
   if(choose == 0){
        lunch.style.fontWeight = '900'
        dinner.style.fontWeight = '100'
        breakfast.style.fontWeight = '100'
   } else if(choose == 1) {
        dinner.style.fontWeight = '900'
        lunch.style.fontWeight = '100'
        breakfast.style.fontWeight = '100'
   } else {
        dinner.style.fontWeight = '100'
        lunch.style.fontWeight = '100'
        breakfast.style.fontWeight = '900'
   }
    for(let i = 0; i < detailsMeny.children.length; i++){
        // console.log(detailsMeny.children[i].children.imageDish.children.image, detailsMeny.children[i].children.descriptionPosition.children.nameDish, detailsMeny.children[i].children.descriptionPosition.children.text, detailsMeny.children[i].children.price.children.caption)
        detailsMeny.children[i].children.imageDish.children.image.src = `${arrowMenu[choose][i].img}`
        detailsMeny.children[i].children.descriptionPosition.children.nameDish.innerText = `${arrowMenu[choose][i].nameDish}`
        detailsMeny.children[i].children.descriptionPosition.children.text.innerText = `${arrowMenu[choose][i].text}`
        detailsMeny.children[i].children.price.children.caption.innerText = `${arrowMenu[choose][i].price}`
    }   
})


let dataSet = [
    {
      id: 1,
      date: 'Mon Jul 25 2023',
      name: 'Alison Joseph',
      position: 'Project manager',
      reviewTitle: 'I love Sway!',
      comment: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.'
    },
    {
        id: 2,
        date: 'Sun Jul 26 2023',
        name: 'Thomas Smith',
        position: 'Developer',
        reviewTitle: 'Awesome Work!',
        comment: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.'
    },
    {
        id: 3,
        date: 'Thu Jul 29, 2023',
        name: 'Stella Smiith',
        position: 'CEO',
        reviewTitle: 'I love Sway!',
        comment: 'The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.'
    }
    
]
let listContainer = document.getElementById('list-container')
let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let pageNumberValue = document.getElementById('page-number')
let reviewerName = document.getElementById('reviewerName')
let reviewerPosition = document.getElementById('reviewerPosition')
let reviewTitle = document.getElementById('reviewTitle')
let reviewDetails = document.getElementById('reviewDetails')
let btnComment = document.getElementById('btnComment')
let error = document.getElementById('error'), error2 = document.getElementById('error2')
let startIndex = 0, endIndex = 2, pageNumber = 0
pageNumberValue.value = pageNumber


let mapData = () => {
  let slicedData = dataSet
    .slice(startIndex, endIndex)
    .map((row) => {
      return `<div>
                <p id='date'>${row.date}</p>
                <span id='infoUser'>
                  <img src='./images/user_icon-icons.com_63311.png'> 
                  <span><h1>${row.name}</h1>
                  <h6>${row.position}</h6></span>
                </span>
                <h4>${row.reviewTitle}</h4>
                <p id='commentText'>${row.comment}</p>
            </div>`;
    })
    .join("");
    listContainer.innerHTML = slicedData;
}
mapData();

prevButton.addEventListener("click", () => {
  if (endIndex < 4) {
    startIndex = 0
    endIndex = 2
  } else {
    startIndex -= 2
    endIndex -= 2
    pageNumber -= 1
  }
  pageNumberValue.value = pageNumber
  mapData()
})

nextButton.addEventListener("click", () => {
  if (endIndex < dataSet.length) {
    startIndex += 2
    endIndex += 2
    pageNumber += 1
  }
  pageNumberValue.value = pageNumber
  mapData()
})

pageNumberValue.addEventListener("change",(e) => {
  let currentPageNumber = Number.parseInt(e.target.value)
  let maxPageNumber = Math.floor(dataSet.length/2)
  if(currentPageNumber > maxPageNumber){
   currentPageNumber = maxPageNumber
    e.target.value = value
  }
  else if(currentPageNumber < 0){
    currentPageNumber == 0
    e.target.value = value
  }
   startIndex = currentPageNumber * 2
   endIndex = startIndex + 2
   pageNumber = currentPageNumber
   mapData()
})

btnComment.addEventListener('click', function(){
    // console.log(reviewerName.value, reviewerPosition.value, reviewTitle.value, reviewDetails.value)
    let pattern1 = /[a-zA-Z]/g
    if(reviewerName.value == '' || pattern1.test(reviewerName.value) == false ){
      reviewerName.style.border = '2px solid #00D664'
      error.style.display = 'flex'
    }  else if (reviewDetails.value.length > 450 || reviewDetails.value.length == 0){
      console.log(reviewDetails.value.length)
      reviewDetails.style.border = '2px solid #00D664'
      error2.style.display = 'flex'
    } else {
      let newObj = {
        id: new Date().getMilliseconds(),
        date: new Date().toDateString(),
        name: reviewerName.value,
        position: reviewerPosition.value,
        reviewTitle: reviewTitle.value,
        comment: reviewDetails.value
    }
    dataSet.unshift(newObj)
    console.log(dataSet)
    error.style.display = 'none'
    reviewerName.style.border = 'none'
    reviewDetails.style.border = 'none'
    error2.style.display = 'none'
    mapData()

    reviewerName.value = ''
    reviewerPosition.value = ''
    reviewTitle.value = ''
    reviewDetails.value = ''
    addComments.style.display = 'none' 
    }   
})

add.addEventListener('click', function(){
  addComments.style.display = 'flex'
})
