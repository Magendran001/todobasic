

const init = { todo: [], loading: false, status: "undone" };
const todoreducer = (state = init, { type, payload }) => {


    switch (type) {
        case "gettodo":

            return { ...state, todo: payload };


        case "storetodo":

            return { ...state, todo: [...state.todo, payload] };


        case "requesttodo":
            return { ...state, loading: true }

        case "successtodo":
            return { ...state, loading: false }

        case "posttodorequest":
            return { ...state, loading: true }

        case "posttodosuccess":
            return { ...state, loading: false }

        default:
            return { ...state }
    }


}

export default todoreducer