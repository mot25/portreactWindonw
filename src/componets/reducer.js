export function reducer(state, { type, payload }) {
    switch (type) {
        case 'BASKET_SHOW':

            return { ...state, isBasketShow: !state.isBasketShow };
        case 'REMOVE_ORDER':

            return {
                ...state,
                order: state.order.filter(x => x.id !== payload.id)
            };

        default:
            return state;
    }
}