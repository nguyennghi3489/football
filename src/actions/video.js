import * as types from '../constants/actionTypes'
import Constant from '../utilities/utils.js'

var videosMockup = [
    {
        id: 1,
        title: 'VIDEO Chievo 3 – 5 Roma (Serie A) Highlights',
        img: 'https://i.ytimg.com/vi/-Fl7BQ0Tr_4/maxresdefault.jpg',
        owner: 'Admin',
        updated_date: '2017-07-17T17:00:00.000Z'
    },
    {
        id: 2,
        title: 'VIDEO Chievo 1 – 0 Roma (Serie A) Highlights',
        img: 'https://i.ytimg.com/vi/-Fl7BQ0Tr_4/maxresdefault.jpg',
        owner: 'Admin',
        updated_date: '2017-07-17T17:00:00.000Z'
    },
    {
        id: 3,
        title: 'VIDEO Inter 0 – 5 Real Marid (Serie A) Highlights',
        img: 'https://i.ytimg.com/vi/-Fl7BQ0Tr_4/maxresdefault.jpg',
        owner: 'Admin',
        updated_date: '2017-07-17T17:00:00.000Z'
    }
]

export const loadVideo = () => ({
    type: types.LOAD_VIDEO,
    data: videosMockup
})

export const searchVideo = (input) => {
    Constant.debounce(()=>{ console.log('hi'); }, 1000)()
    return {
        type: types.LOAD_VIDEO
        // data: videos
    }
}