// dashboard numbers
// let dashList = [];

// async function addDash() {
//     let myReq = await fetch(`http://serco-dev.com:2020/api/api/reviews/`)
//     console.log(myReq)
//     let Data = await myReq.json()
//     dashList = Data.dashnums
//     console.log(dashList)
//     displayDash()

//     }

//     addDash()

//     function displayDash(){
//         let temp = ""
//         dashList.forEach((element)=>{
//             temp+=`<div class="dash-item dashback1 bg-info">
//             <p class="dash-item-desc fw-bold ms-2 ">sales</p>
//             <p class="dash-item-num fw-bold fs-1 ">${element.sales}</p>
//           </div>
//           <div class="dash-item dashback2 bg-info">
//             <p class="dash-item-desc fw-bold ms-2 ">orders</p>
//             <p class="dash-item-num fw-bold fs-1 ">+${element.orders}%</p>
//           </div>
//           <div class="dash-item dashback3 bg-info">
//             <p class="dash-item-desc fw-bold ms-2 ">visits</p>
//             <p class="dash-item-num fw-bold fs-1 ">+${element.visits}%</p>
//           </div>`
//         })
//         document.getElementById("myDash").innerHTML = temp
//     }
