let randomMovies = (movies)=>movies.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 20)

createCards('container', randomMovies(movies), actors)

testCreateCards(createCards)
