
const init = { isAuth: false }
const authenticatereducer = (state = init, { type, payload }) => {

    switch (type) {
        case "login":
            return { ...state, isAuth: true }

        case "logout":
            return { ...state, isAuth: false }

        default:
            return { ...state }
    }


}

export default authenticatereducer