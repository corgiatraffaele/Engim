let recensori = [
    {
        id: 5,
        nome: "Yotobi",
        voti:
         [
            { id: 15,  title: "Avengers Endgame",  voto: 8},
            { id: 20,  title: "Sharknado",  voto: 10},
            { id: 36,  title: "Joker",  voto: 8},
            { id: 49,  title: "In vacanza su marte",  voto: 4},
        ]
    },
    {
        id: 55,
        nome: "Synergo",
        voti: [
            { id: 15,  title: "Avengers Endgame",  voto: 3},
            { id: 20,  title: "Sharknado",  voto: 6},
            { id: 36,  title: "Joker",  voto: 7},
            { id: 49,  title: "In vacanza su marte",  voto: 1},
            { id: 51,  title: "Parasyte",  voto: 9},
            { id: 65,  title: "1917",  voto: 9},
            { id: 10,  title: "L'esorciccio",  voto: 9},
        ]
    },
    {
        id: 90,
        nome: "BarbascuraX",
        voti: [
            { id: 15,  title: "Avengers Endgame",  voto: 7},
            { id: 20,  title: "Sharknado",  voto: 6},
            { id: 36,  title: "Joker",  voto: 7},
            { id: 49,  title: "In vacanza su marte",  voto: 4},
            { id: 108, title: "Kung Fu Panda",  voto: 10},
        ]
    },
    {
        id: 100,
        nome: "BarbieXanax",
        voti: [
            { id: 20,  title: "Sharknado",  voto: 7},
            { id: 36,  title: "Joker",  voto: 8},
            { id: 49,  title: "In vacanza su marte",  voto: 2},
            { id: 51,  title: "Parasyte",  voto: 10},
            { id: 65,  title: "1917",  voto: 8},
        ]
    },
    {
        id: 88,
        nome: "Victorlaszlo88",
        voti: [
            { id: 15,  title: "Avengers Endgame",  voto: 8},
            { id: 20,  title: "Sharknado",  voto: 7},
            { id: 36,  title: "Joker",  voto: 8},
            { id: 49,  title: "In vacanza su marte", voto: 5},
            { id: 51,  title: "Parasyte",  voto:8},
            { id: 65,  title: "1917",  voto: 10},
        ]
    }
]

//inventire i voti di Yotobi e Synergo.

    var spostamento = recensori[0].voti;

    recensori[0].voti =recensori[1].voti;

    recensori[1].voti =spostamento;

    