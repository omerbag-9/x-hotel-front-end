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
        massage: Massage.value,
        safari: Safari.value,
        camping: Camping.value,
        seatrip: Seatrip.value,
        diving: Diving.value,
        snorkeling: Snorkeling.value,
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

