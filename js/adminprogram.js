var days = Number(document.getElementById("Days"))
var Massage =Number( document.getElementById("Massage"))
var Safari = Number(document.getElementById("Safari"))
var Camping = Number(document.getElementById("Camping"))
var Seatrip =Number(document.getElementById("Seatrip")) 
var Diving = Number(document.getElementById("Diving"))
var Snorkeling =Number( document.getElementById("Snorkeling"))

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

