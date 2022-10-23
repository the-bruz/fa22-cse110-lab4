let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};


for (i in statistics){
    let curr = statistics[i];
    if (i[0] == 'r' || curr % 2 != 0){
        console.log(curr);
    }
}
