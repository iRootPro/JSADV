'use strict'

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = bigWorld.flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    let infoHTML = document.createElement('div')
    infoHTML.id = 'flight-details'
    infoHTML.innerHTML = (`<h1>Отчет по рейсу ${flightName}</h1>`)
    for (let ticket of flight.tickets) {
        let statusReg
        ticket.registrationTime === null ? statusReg = 'не пройдена' : statusReg = 'не пройдена'
        infoHTML.innerHTML = (`
        <h1>Отчет по рейсу ${flightName}</h1>
        <div>Номер билета: ${ticket.id}</div>
        <div>Место: ${ticket.seat}</div>
        <div>Пассажир: ${ticket.fullName}</div>
        <div>Регистрация: ${statusReg}</div>
        <div><hr></div>
        `)
    }

    console.log('----')
    document.body.prepend(infoHTML)
}

flightDetails('BH118')