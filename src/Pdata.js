import netflix from "./projects/netflix.JPG"
import spotify from "./projects/spotify.jpg"
import instagram from "./projects/instagram.jpg"
import portfolio from "./projects/portfolio.jpg"

const Pdata = [
    {
        imgsrc: netflix,
        title: "Netflix landing page",
        desc: "I recreated a clone of the Netflix landing page using ReactJs and the TMDb api and hosted it using Firebase, it can also play trailers using the Youtube embed",
        liveUrl: "https://netflix-clone-c6707.web.app/"
    },

    {
        imgsrc: spotify,
        title: "Spotify desktop site",
        desc: "Recreated a frontend only clone of Spotify desktop version using ReactJs and Spotify's own api for developers and hosted using firebase, also has Spotify's user authentication",
        liveUrl: "https://spotify-clone-8dbf1.web.app/"
    },

    {
        imgsrc: instagram,
        title: "Instgram clone",
        desc: "Made an Instagram clone with ReactJs and Firebase realtime database, with user authentication. It can post pictures and you can also use the comment functionality",
        liveUrl: "https://instagram-clone-7dca2.web.app/"
    },

    {
        imgsrc: portfolio,
        title: "My portfolio",
        desc: "Made this Portfolio from scratch using ReactJs and bootstrap components",
        liveUrl: "https://my-portfolio-76ddd.web.app/"
    },
]

export default Pdata;