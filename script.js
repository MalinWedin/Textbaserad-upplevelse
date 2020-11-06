let currentPlace = "theSquare"

const places = {
    theSquare: {
        description: "Du befinner dig på Drottningtorget och ska ta dig mot Domkyrkan. Vill du åka spårvagn eller promenera?",
        choices: ["Spårvagn", "Promenera"],
        nextPlace: ["atDomkyrkan"]
    },
    atDomkyrkan: {
        description: "Du står nu och tittar på Domkyrkan. Vill du gå in i kyrkan, gå runt och titta på den utifrån eller gå och ta en kopp kaffe?",
        choices: ["Gå in", "Gå runt", "Kaffe"],
        nextPlace: []
    },
    insideDomkyrkan: {
        description: "Du befinner dig ni inne i Domkyrkan och betraktar skapelsen, det är tyst och fridfullt. Plötsligt bryts tystnaden då skrik uppstår och ett gäng ungdommar står och betraktar sin skapelse, nämligen en hög med brinnande psalmböcker. Vad gör du, står och tittar på den brinnande högen, greppar tag i nästmsta brandsläckare eller springer ut från kyrkan?",
        choices: ["Tittar", "Brandsläckare", "Springer"]
    },

}


window.onload = youreAt;


function youreAt() {
    const letsMove = document.getElementById('paragraph')
    letsMove.append(places.theSquare.description)
}


function getAnswer() {
    const answer = document.getElementById('text')
    console.log(answer)
}
