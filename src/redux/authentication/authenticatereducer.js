let auth = JSON.parse(localStorage.getItem("userdetails"));


const init = { isAuth: auth };
console.log(init, "init")
const authenticatereducer = (state = init, { type, payload }) => {

    switch (type) {
        case "login":
            localStorage.setItem("userdetails", JSON.stringify(true))
            return { ...state, isAuth: true }

        case "logout":
            localStorage.setItem("userdetails", JSON.stringify(false))
            return { ...state, isAuth: false }

        default:
            return { ...state }
    }


}

export default authenticatereducer