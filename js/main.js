
// get and add review
let reviewList = [];

async function addReview() {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/api/reviews/`)
    console.log(myReq)
    let Data = await myReq.json()
    reviewList = Data.reviews
    console.log(reviewList)
    displayReview()
    }

    addReview()

    function displayReview(){
        let temp = ""
        reviewList.forEach((element)=>{
            temp+=`<div class="testimonials-item bg-body-tertiary">
        <div class="testimonials-name">
       <h5>${element.name}</h5>
       </div>
       <div class="testimonials-desc">
        <p><i class="fa-solid fa-comment"></i>${element.comment}<i class="fa-solid fa-comment"></i></p>
       </div>
      </div>`
        })
        document.getElementById("myReview").innerHTML = temp
    }



   function sendReviewNotSigned(){
        window.alert("you should be signed")
    }












