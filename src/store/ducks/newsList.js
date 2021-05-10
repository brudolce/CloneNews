//Types
export const Types = {
    SETLIST: '@setList',
    SETNEWS: '@setNews'
}

//Reducer
const INITIAL_STATE = { list: [], news: [] };

export default function reducer(
    state = INITIAL_STATE,
    { type, payload }
) {
    switch (type) {
        case Types.SETLIST:
            return { ...state, list: payload };
        case Types.SETNEWS:
            return { ...state, news: payload }
        default:
            return state;
    }
};

//Actions
export const setList = (payload) => ({ type: Types.SETLIST, payload: payload })
export const setNews = (payload) => ({ type: Types.SETNEWS, payload: payload })

