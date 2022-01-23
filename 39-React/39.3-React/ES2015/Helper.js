import Foods from "./Foods";
let allFoods = Foods;
const randomItem = Foods[Math.floor(Math.random()*Foods.length)]

const Choice = () => {

    return(
        <>
        <p>Choose your Food from: {Foods.join(",")}</p>
        <p>Oh you want the {randomItem} ?</p>
        <p>Here you go: {randomItem}</p>
        <p>Delicious! May I have another?</p>
        </>
    );
};

function removeItem(items, item) {

    ///// Why is this not working???/////
    const temp_items = Foods
    let i = temp_items.indexOf(item)
    temp_items.splice(i, 1)
    return temp_items

    for (let i=0;i<items.length; ++i){
        if(items[i] == item){
            // Study this line //
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

const Remove = () => {
    return(
        <>
        <p>Sorry, we are all out of {randomItem}... But</p>
        <p>You can one of these: {removeItem(Foods, randomItem)}</p>
        <p>{removeItem(Foods,randomItem).length}</p>
        </>
    );
};

export {Choice, Remove}
