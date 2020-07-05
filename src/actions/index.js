const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const incrementCountOfProduct = (id) => {
    return {
        type: 'ITEM_INCREMENT_OF_PRODUCT',
        payload: id
    }
}

const decrimentCountOfProduct = (id) => {
    return {
        type: 'ITEM_DECRIMENT_OF_PRODUCT',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    deleteFromCart,
    incrementCountOfProduct,
    decrimentCountOfProduct
};