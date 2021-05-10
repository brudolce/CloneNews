//get
export const getTop = async (save) => {
    let res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    res = await res.json()
    save(res)
}

export const getNew = async (save) => {
    let res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    res = await res.json()
    save(res)
}

export const getBest = async (save) => {
    let res = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty')
    res = await res.json()
    save(res)
}

export const getItem = async (item, save) => {
    let res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
    res = await res.json()
    save(res)
}

export const getItems = async (arr, save, load) => {

    const res = await Promise.all(
        await arr?.map(async (item) => {
            let story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            story = await story.json()
            return story
        })
    )
    await save(res)

}


