const weather = new Weather(' san Francisco','CA');
weather.getWether().then(results => {
    console.log(results);
}).catch(err => console.log(err));