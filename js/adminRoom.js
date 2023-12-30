var roomName = document.getElementById("roomName")
var hotelname = document.getElementById("hotelName")
var roomDesc = document.getElementById("addDescriptionRoom")
var roomId = document.getElementById("roomId")
var roomAvgPrice = document.getElementById("addAvgPrice")
var roomtype = document.getElementById("roomType")
var roomList = []

async function addRoom() {
    var roomData = {
        room_name: roomName.value,
        description: roomDesc.value,
        hotel: hotelname.value,
        room_price: roomAvgPrice.value,
        room_id: roomId.value,
        room_type: roomtype.value,
    }

        var response = await fetch(`https://xhotel3.onrender.com/api/rooms/`, {
            method: "post",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roomData)
        });
        displayRooms() 


        let res = await response.json();
        console.log(res);

        if (response.ok) {
            window.alert("you added an room successfully")
        }
    }


    /////////////////////////



    let roomDataList = [];

async function displayRooms() {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/all-rooms/`)
    console.log(myReq)
    let Data = await myReq.json()
    roomDataList = Data.rooms
    console.log(roomDataList)
    displayRoomsData()
    }

    displayRooms() 

    function displayRoomsData(){
        let temp = ""
        roomDataList.forEach((element)=>{
            temp+=`<tr>
            <td>${element.hotel}</td>
            <td>${element.room_id}</td>
            <td>${element.room_name}</td>
            <td>${element.room_price}$</td>
            <td>${element.room_type}</td>
            <td>
                <button onclick="editHotel('${element.room_id}')" class="btn btn-warning">Update</button>
            </td>
            <td>
                <button onclick="deleteHotel('${element.room_id}')" class="btn btn-danger">Delete</button>
            </td>
        </tr>  `
        })
        document.getElementById("myRoomData").innerHTML = temp
    }


        ///////////////////

// Function to delete a hotel
async function deleteHotel(room_id) {
    if (confirm("Are you sure you want to delete this hotel?")) {
        try {
            const response = await fetch(`https://xhotel3.onrender.com/api/rooms/${room_id}/`, {
                method: "DELETE",
                credentials: 'include',
            });

            if (response.ok) {
                window.alert("Room deleted successfully");
                displayRooms()
            } else {
                const errorData = await response.json();
                window.alert(`Error deleting room: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error deleting room:", error);
            window.alert("An error occurred while deleting the room");
        }
    }
}



////////////////////////////////////////////////////
// var searchInput = document.getElementById('searchInput')

// function search(){
//     var temp = ""
//     var searchVar = searchInput.value.toLowerCase()
//     // console.log(searchVar)
//     for (var i =0 ; i<HotelDataList.length ; i++){
//        if(HotelDataList[i].name.toLowerCase().includes(searchVar)==true){
//         temp += ` <tr>
//             <td>`+HotelDataList[i].name.toLowerCase().replace(searchVar,'<span class="bg-primary">'+searchVar+'</span>')+`</td>
//             <td>`+HotelDataList[i].location.toLowerCase().replace(searchVar,'<span class="bg-primary">'+searchVar+'</span>')+`</td>
//             <td>`+HotelDataList[i].average_price.toLowerCase().replace(searchVar,'<span class="bg-primary">'+searchVar+'</span>')+`$</td>
//             <td>
//                 <button class="btn btn-warning">Update</button>
//             </td>
//             <td>
//                 <button onclick="deleteHotel(`+HotelDataList[i].name+`)" class="btn btn-danger">Delete</button>
//             </td>
//         </tr>`
//        }
//     }
//     document.getElementById("myHotelData").innerHTML= temp
// }


/////////////////////////////////////////////////////////////

// Function to fetch hotel details by ID
async function getRoomById(room_id) {
    try {
        const response = await fetch(`https://xhotel3.onrender.com/api/rooms/${room_id}/`, {
            method: "GET",
            credentials: 'include',
        });

        if (response.ok) {
            const roomData = await response.json();
            return roomData;
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
async function editHotel(room_id) {
    try {
        const roomData = await getRoomById(room_id);

        // Populate the form with existing data
        document.getElementById("roomName").value = roomData.room_name;
    document.getElementById("hotelName").value = roomData.hotel;
    document.getElementById("addDescriptionRoom").value = roomData.description;
    document.getElementById("roomId").value = roomData.room_id;
    document.getElementById("addAvgPrice").value = roomData.room_price;
    document.getElementById("roomType").value = roomData.room_type;

        // Change the Add button to an Update button
        const addButton = document.getElementById("addRoomButton");
        addButton.textContent = "Update";
        addButton.onclick = async () => await updateRoom(room_id);
    } catch (error) {
        window.alert(error.message);
    }
}

// Function to update a hotel
async function updateRoom(room_id) {
    try {
        const updatedroomData = {
            room_name: document.getElementById("roomName").value,
            hotel: document.getElementById("hotelName").value,
            description: document.getElementById("addDescriptionRoom").value,
            room_id: document.getElementById("roomId").value,
            room_price: document.getElementById("addAvgPrice").value,
            room_type: document.getElementById("roomType").value,
        };

        const response = await fetch(`https://xhotel3.onrender.com/api/rooms/${room_id}/`, {
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedroomData),
        });

        if (response.ok) {
            window.alert("Hotel updated successfully");
            // Reset the form and button after successful update
            clearForm();
            const addButton = document.getElementById("addRoomButton");
            addButton.textContent = "Add";
            addButton.onclick = addRoom;

            displayRooms()
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
    document.getElementById("roomName").value = "";
    document.getElementById("hotelName").value = "";
    document.getElementById("addDescriptionRoom").value = "";
    document.getElementById("roomId").value = "";
    document.getElementById("addAvgPrice").value = "";
    document.getElementById("roomType").value = "";

    // Change the button back to "Add" and its original behavior
    const addButton = document.getElementById("addRoomButton");
    addButton.textContent = "Add";
    addButton.onclick = addRoom;
}

