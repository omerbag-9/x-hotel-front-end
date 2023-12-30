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
                <button onclick="editHotel('${element.name}')" class="btn btn-warning">Update</button>
            </td>
            <td>
                <button onclick="deleteHotel('${element.name}')" class="btn btn-danger">Delete</button>
            </td>
        </tr> `
        })
        document.getElementById("myHotelData").innerHTML = temp
    }


    ///////////////////

// Function to delete a hotel
async function deleteHotel(name) {
    if (confirm("Are you sure you want to delete this hotel?")) {
        try {
            const response = await fetch(`https://xhotel3.onrender.com/api/hotels/${name}/`, {
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



////////////////////////////////////////////////////
var searchInput = document.getElementById('searchInput')

function search(){
    var temp = ""
    var searchVar = searchInput.value.toLowerCase()
    // console.log(searchVar)
    for (var i =0 ; i<HotelDataList.length ; i++){
       if(HotelDataList[i].name.toLowerCase().includes(searchVar)==true){
        temp += ` <tr>
            <td>`+HotelDataList[i].name.toLowerCase().replace(searchVar,'<span class="bg-primary">'+searchVar+'</span>')+`</td>
            <td>`+HotelDataList[i].location.toLowerCase().replace(searchVar,'<span class="bg-primary">'+searchVar+'</span>')+`</td>
            <td>`+HotelDataList[i].average_price.toLowerCase().replace(searchVar,'<span class="bg-primary">'+searchVar+'</span>')+`$</td>
            <td>
                <button class="btn btn-warning">Update</button>
            </td>
            <td>
                <button onclick="deleteHotel(`+HotelDataList[i].name+`)" class="btn btn-danger">Delete</button>
            </td>
        </tr>`
       }
    }
    document.getElementById("myHotelData").innerHTML= temp
}


/////////////////////////////////////////////////////////////

// Function to fetch hotel details by ID
async function getHotelById(name) {
    try {
        const response = await fetch(`https://xhotel3.onrender.com/api/hotels/${name}/`, {
            method: "GET",
            credentials: 'include',
        });

        if (response.ok) {
            const hotelData = await response.json();
            return hotelData;
        } else {
            const errorData = await response.json();
            throw new Error(`Error fetching hotel details: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error fetching hotel details:", error);
        throw new Error("An error occurred while fetching hotel details");
    }
}

// Function to populate the form with hotel details for editing
async function editHotel(name) {
    try {
        const hotelData = await getHotelById(name);

        // Populate the form with existing data
        document.getElementById("HotelName").value = hotelData.name;
        document.getElementById("HotelDesc").value = hotelData.description;
        document.getElementById("hotelLocation").value = hotelData.location;
        document.getElementById("hotelAvgPrice").value = hotelData.average_price;

        // Change the Add button to an Update button
        const addButton = document.getElementById("addButton");
        addButton.textContent = "Update";
        addButton.onclick = async () => await updateHotel(name);
    } catch (error) {
        window.alert(error.message);
    }
}

// Function to update a hotel
async function updateHotel(name) {
    try {
        const updatedHotelData = {
            name: document.getElementById("HotelName").value,
            description: document.getElementById("HotelDesc").value,
            location: document.getElementById("hotelLocation").value,
            average_price: document.getElementById("hotelAvgPrice").value,
        };

        const response = await fetch(`https://xhotel3.onrender.com/api/hotels/${name}/`, {
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedHotelData),
        });

        if (response.ok) {
            window.alert("Hotel updated successfully");
            // Reset the form and button after successful update
            clearForm();
            const addButton = document.getElementById("addButton");
            addButton.textContent = "Add";
            addButton.onclick = addHotel;

            displayHotels();
        } else {
            const errorData = await response.json();
            throw new Error(`Error updating hotel: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Error updating hotel:", error);
        window.alert("An error occurred while updating the hotel");
    }
}

//////
// Function to clear the form
function clearForm() {
    // Reset the input fields to empty
    document.getElementById("HotelName").value = "";
    document.getElementById("HotelDesc").value = "";
    document.getElementById("hotelLocation").value = "";
    document.getElementById("hotelAvgPrice").value = "";

    // Change the button back to "Add" and its original behavior
    const addButton = document.getElementById("addButton");
    addButton.textContent = "Add";
    addButton.onclick = addHotel;
}

