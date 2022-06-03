
const init = { completetodo: [] }
function completereducer(state = init, { type, payload }) {

    switch (type) {
        case "addcompletetodo":
            return { ...state, completetodo: [...state.completetodo, payload] }

        default:
            return { ...state }
    }



}

export default completereducer