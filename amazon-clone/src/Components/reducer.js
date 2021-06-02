export const initialState = {
    basket: [{
        id:"09012021012",
        title:"HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)",
        price:164.99,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg",

    },

    {
        id:"09012021012",
        title:"HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)",
        price:164.99,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg",

    }
],
    user: null,
};

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
            ...state,
            basket: [...state.basket, action.item],
            };
            // Logic for adding item to the basket
        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exists in the basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove procudt (id: ${action.id}) as its not the basket!`
                )
            }

            return { ...state, basket: newBasket };
            // Logic for removing item from basket
            default:
                return state; 

    }
}

export default reducer