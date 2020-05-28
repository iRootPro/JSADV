const buyTicketForm = document.getElementById("buyticket-form");
const btnBuy = document.getElementById("btnBuy");
btnBuy.addEventListener("click", buyTicketFromForm);


function buyTicketFromForm() {
    let typeSeat = 0;
    const formData = {
        flight: buyTicketForm.elements.flightnumber.value,
        fullname: buyTicketForm.elements.fullname.value,
        type: buyTicketForm.elements.typeseat.value,
    }
    event.preventDefault();
    if (formData.type === 'Business')
        typeSeat = 1
    try {
        const result = buyTicket(world.flights, formData.flight, makeTime(5, 10), formData.fullname, typeSeat);
        alert(`Вы купили билет на имя: ${formData.fullname}. Ваше место: ${result.seat}`);
    } catch (error) {
        console.log(error)
        alert(error.message)
    }

    buyTicketForm.reset()
}