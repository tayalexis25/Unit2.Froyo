//create prompt for user to input flavors
const Froyostring = prompt (
    "Please enter what froyo you would like, separated by commas!",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//convert string into array
const ice_arr = Froyostring.split(",")

    console.log(ice_arr);

let fro_obj = {}

for (let i = 0; i < ice_arr.length; i++) {
    ice = ice_arr[i]
     if(fro_obj[ice]) {
        fro_obj[ice] += 1
     } else {fro_obj[ice] = 1 }
}
console.table(fro_obj)