'use strict'

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = bigWorld.flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    const divContainer = document.getElementById('flight-details')
    const headHTML = document.createElement('h1')
    headHTML.textContent = `Отчет по рейсу ${flightName}`
    divContainer.append(headHTML)

    let infoHTML = document.createElement('div')

    for (let ticket of flight.tickets) {
        let statusReg
        ticket.registrationTime === null ? statusReg = 'не пройдена' : statusReg = 'не пройдена'
        const ticketHTML = document.createElement('div')
        ticketHTML.textContent = `Номер билета: ${ticket.id}`
        divContainer.append(ticketHTML)
        const seatHTML = document.createElement('div')
        seatHTML.textContent = `Место: ${ticket.seat}`
        divContainer.append(seatHTML)
        const nameHTML = document.createElement('div')
        nameHTML.textContent = `Пассажир: ${ticket.fullName}`
        divContainer.append(nameHTML)
        const regHTML = `Регистрация: ${statusReg}`
        divContainer.append(regHTML)
    }

}

flightDetails('BH118')