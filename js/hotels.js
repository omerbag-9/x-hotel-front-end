// get and add hotels
// let hotelsList = [];
// async function addHotel() {
//     let myReq = await fetch(``)
//     let Data = await myReq.json()
//     hotelsList = Data.Hotel
//     console.log(hotelsList)
//     displayHotel()
//     }

//     addHotel()

//     function displayHotel(){
//         let temp = ""
//         hotelsList.forEach((element)=>{
//             temp+=`<a href="./booking.html">
//             <div class="hotels-item">
//               <img src="${element.hotelImg}" alt="" />
//               <div class="item-overlay">
//                 <h2>${element.hotelName}</h2>
//                 <span class="d-block">${element.hotelLocation}</span>
//                 <span>${element.hotelAvgPrice}</span>
//               </div>
//             </div>
//           </a>`
//         })
//         document.getElementById("hotelsData").innerHTML = temp
//     }
