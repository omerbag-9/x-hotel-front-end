// review post
var userPostReview = document.getElementById("user")
var postReviewMessage = document.getElementById("comment")

async function sendReview() {
    var userSendReview = {
        name: userPostReview.value,
        comment: postReviewMessage.value,
    }
    var data = await fetch(`https://xhotel3.onrender.com/api/api/reviews/`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userSendReview)
    })
    let res = await data.json()
    console.log(res);
}


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



//     let homeName = [];

// async function addUserhome() {
//     let myReq = await fetch(`http://127.0.0.1:8000/api/profile/`)

//     console.log(myReq)
//     let Data = await myReq.json()
//     homeName = Data.user_data
//     console.log(homeName)
//     displayUserHome()
//     }

//     addUserhome()

//     function displayUserHome(){
//         let temp = ""
//         homeName.forEach((element)=>{
//             temp+=`
//             <div class="dropdown">
//             <span>hello,</span>
//             <span>${element.username}</span>
//             <button class="btn btn-outline-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             </button>
//             <ul class="dropdown-menu">
//               <li><button class="btn " id="logout" onclick="logout()" type="submit">log out</button></li>
//             </ul>
//           </div>`
//         })
//         document.getElementById("homeuserdata").innerHTML = temp
//     }





let homeName = [];

async function addUserhome() {
  try {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/profile/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(myReq);
    let Data = await myReq.json();
    homeName = Data.profile;
    console.log(homeName);
    displayUserHome();
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

addUserhome();

function displayUserHome() {
  let temp = '';
  homeName.forEach((element) => {
    temp += `
      <div class="dropdown">
        <span>hello,</span>
        <span>${element.username}</span>
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        </button>
        <ul class="dropdown-menu">
        <li><a href="profile.html" class="text-decoration-none pb-3 profile-a">Profile</a></li>
          <li><button class="btn" id="logout" onclick="logout()" type="submit">log out</button></li>
        </ul>
      </div>`;
  });
  document.getElementById('homeuserdata').innerHTML = temp;
}
