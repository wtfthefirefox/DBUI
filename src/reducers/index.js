const initialState = {
    total: 0,
    menu: [],
    loading: true,
    error: false,
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_INCREMENT_OF_PRODUCT':
            const id = action.payload;
            
            let index = state.items.findIndex(item => item.id === id);

            if (index > -1) {
                const {items} = state;
                const newItem = {
                    ...items[index],
                    count: items[index].count + 1,
                    price: (items[index].count + 1) * state.menu[items[index].id - 1].price
                }

                return {
                    ...state, 
                    total: state.total - state.items[index].price + newItem.price,
                    items: [
                        ...state.items.slice(0, index),
                        newItem,
                        ...state.items.slice(index + 1)
                    ]
                }
            } else {
                const item = state.menu.find(item => item.id === id);

                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    count: 1
                }

                return {
                    ...state,
                    total: state.total + item.price,
                    items: [
                        ...state.items,
                        newItem
                    ]
                }
            }
        case 'ITEM_DECRIMENT_OF_PRODUCT':  
            const productIdxDec = state.items.findIndex(item => item.id === action.payload);

            if (state.items[productIdxDec].count - 1 !== 0) {
                const item = {
                    ...state.items[productIdxDec],
                    count: state.items[productIdxDec].count - 1,
                    price: (state.items[productIdxDec].count - 1) * state.menu[state.items[productIdxDec].id - 1].price,
                }
    
                return {
                    ...state, 
                    total: state.total - state.items[productIdxDec].price + item.price,
                    items: [
                        ...state.items.slice(0, productIdxDec),
                        item,
                        ...state.items.slice(productIdxDec + 1)
                    ]
                }
            } else {
                const idx = action.payload;
                const itemIndex = state.items.findIndex(item => item.id === idx);

                return {
                    ...state,
                    total: state.total - state.items[itemIndex].price,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        ...state.items.slice(itemIndex + 1)
                    ]
                }   
            }
            
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            
            return {
                ...state,
                total: state.total - state.items[itemIndex].price,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }

        default:
            return state;
    }
}

export default reducer;