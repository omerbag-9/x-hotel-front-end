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
                <button class="btn btn-warning">Update</button>
            </td>
            <td>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>  `
        })
        document.getElementById("myRoomData").innerHTML = temp
    }
