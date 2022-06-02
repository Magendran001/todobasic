

//  GET_TODOS_REQUEST
//  GET_TODOS_SUCCESS
//  GET_TODOS_FAILURE

const Gettodo = (payload) => {

    return { type: "gettodo", payload }
}


const GET_TODOS_REQUEST = () => {

    return { type: "requesttodo" }

}

const GET_TODOS_SUCCESS = () => {

    return { type: "successtodo" }
}

const Storetodo = (payload) => {
    return { type: "storetodo", payload }
}


const POST_TODOS_REQUEST = () => {

    return { type: "posttodorequest" }

}

const POST_TODOS_SUCCESS = () => {

    return { type: "posttodosuccess" }

}
const POST_TODOS_FAILURE = () => {

    return { type: "posttodofailure" }

}
export { Gettodo, Storetodo, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_REQUEST, POST_TODOS_FAILURE, POST_TODOS_SUCCESS }