const arr = [2, 3, -5, -2, 4];
const adjacentElementsProduct = (arr) => {
    let products = [];
    for(let i = 0; i < arr.length -1; i++) {
        products.push(arr[i] * arr[i + 1]);
    };
        
     return Math.max(...products);};
console.log("Kết quả: "+ adjacentElementsProduct(arr));

const array = [60, 40, 55, 75, 64];
const alternatingSums = (array) => {
    let kt1 = [];
    let team1 = 0;
    let team2 = 0;
    for(let i=0; i<array.length; i++) {
        if ( i % 2 === 0){
            team1 += array[i];
            console.log(team1);
        }else {
            team2 += array[i];
            console.log(team2);
        }
    }
    kt1.push(team1,team2);
return kt1;
};
console.log(alternatingSums(array));
