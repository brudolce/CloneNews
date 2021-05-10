//Types
export const Types = {
    SETCOMMENTS: '@setComments',
    SETFATHER: '@setFather'
}

//Reducer

const INITIAL_STATE = [];

export default function reducer(
    state = INITIAL_STATE,
    { type, payload }
) {
    switch (type) {
        case Types.SETCOMMENTS:
            return payload;
        default:
            return state;
    }
};

//Actions
export const setComments = (payload) => ({ type: Types.SETCOMMENTS, payload: payload })
// export const setFather = (payload) => ({ type: Types.SETFATHER, payload: payload })

