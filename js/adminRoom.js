var roomName = document.getElementById("roomName")
var hotelname = document.getElementById("hotelname")
var roomDesc = document.getElementById("roomDesc")
var roomId = document.getElementById("roomId")
var roomAvgPrice = document.getElementById("roomAvgPrice")
var roomtype = document.getElementById("roomType")
var roomList = []

async function addRoom() {
    var roomData = {
        room_name: roomName.value,
        description: roomDesc.value,
        hotel: HotelLocation.value,
        room_price: HotelAvgPrice.value,
        room_id: roomAvgPrice.value,
        room_type: HotelAvgPrice.value,
    }

        var response = await fetch(`https://xhotel3.onrender.com/api/rooms/`, {
            method: "post",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roomData)
        });

        let res = await response.json();
        console.log(res);

        if (response.ok) {
            window.alert("you added an room successfully")
        }
    }
