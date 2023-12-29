var HotelName = document.getElementById("HotelName")
var HotelDesc = document.getElementById("HotelDesc")
var HotelLocation = document.getElementById("hotelLocation")
var HotelAvgPrice = document.getElementById("hotelAvgPrice")

async function addHotel() {
    var HotelData = {
        name: HotelName.value,
        description: HotelDesc.value,
        location: HotelLocation.value,
        average_price: HotelAvgPrice.value,
    }
    console.log(HotelData);
        var response = await fetch(`https://xhotel3.onrender.com/api/hotels/`, {
            method: "post",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(HotelData)
        });
        displayHotels()        
        let res = await response.json();
        console.log(res);

        if (response.ok) {
            window.alert("you added an hotel successfully")
        }
    }






////////////////////////////////
let HotelDataList = [];

async function displayHotels() {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/hotel-details/`)
    console.log(myReq)
    let Data = await myReq.json()
    HotelDataList = Data.hotels
    console.log(HotelDataList)
    displayHotelsData()
    }

    displayHotels() 

    function displayHotelsData(){
        let temp = ""
        HotelDataList.forEach((element)=>{
            temp+=`<tr>
            <td>${element.name}</td>
            <td>${element.location}</td>
            <td>${element.average_price}$</td>
            <td>
                <button class="btn btn-warning">Update</button>
            </td>
            <td>
                <button onclick="deleteHotel('${element.id}')" class="btn btn-danger">Delete</button>
            </td>
        </tr> `
        })
        document.getElementById("myHotelData").innerHTML = temp
    }


    ///////////////////

// Function to delete a hotel
async function deleteHotel(hotelId) {
    if (confirm("Are you sure you want to delete this hotel?")) {
        try {
            const response = await fetch(`https://xhotel3.onrender.com/api/hotels/${hotelId}`, {
                method: "DELETE",
                credentials: 'include',
            });

            if (response.ok) {
                window.alert("Hotel deleted successfully");
                displayHotels();
            } else {
                const errorData = await response.json();
                window.alert(`Error deleting hotel: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error deleting hotel:", error);
            window.alert("An error occurred while deleting the hotel");
        }
    }
}

