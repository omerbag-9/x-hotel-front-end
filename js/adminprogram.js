var days = document.getElementById("Days")
var Massage = document.getElementById("Massage")
var Safari = document.getElementById("Safari")
var Camping = document.getElementById("Camping")
var Seatrip = document.getElementById("Seatrip")
var Diving = document.getElementById("Diving")
var Snorkeling = document.getElementById("Snorkeling")

async function addProgram() {
    var ProgramData = {
        days: days.value,
        Massage: Massage.value,
        Safari: Safari.value,
        Camping: Camping.value,
        Seatrip: Seatrip.value,
        Diving: Diving.value,
        Snorkeling: Snorkeling.value,
    }
    console.log(ProgramData);
        var response = await fetch(`https://xhotel3.onrender.com/api/programs/`, {
            method: "post",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ProgramData)
        });
        let res = await response.json();
        console.log(res);

        if (response.ok) {
            window.alert("you added a program successfully")
        }
    }

