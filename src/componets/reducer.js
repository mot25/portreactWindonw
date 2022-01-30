export function reducer(state, { type, payload }) {
    switch (type) {
        case 'BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            };
        case 'REMOVE_ORDER':
            return {
                ...state,
                order: state.order.filter(x => x.id !== payload.id)
            };
        case 'ADD_GOODS':
            return {
                ...state,
                goods: payload.data
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLooding: payload.data
            };
        case 'SET_ORDER':
            return {
                ...state,
                order: payload.data
            };
        case 'SAVE_ORDER':
            if (state.order.length) {
                localStorage.setItem('order', JSON.stringify(state.order))
            }
            return state;

        default:
            return state;
    }
}