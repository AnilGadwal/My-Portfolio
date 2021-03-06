import netflix from "./projects/netflix.JPG"
import spotify from "./projects/spotify.jpg"
import instagram from "./projects/instagram.jpg"
import portfolio from "./projects/portfolio.jpg"
import amazon from "./projects/amazon.JPG"

const Pdata = [
    {
        imgsrc: netflix,
        title: "Netflix landing page",
        desc: "I recreated a clone of the Netflix landing page using ReactJs and the TMDb api and hosted it using Firebase, it can also play trailers using the Youtube embed",
        liveUrl: "https://netflix-clone-c6707.web.app/",
        gitUrl: "https://github.com/AnilGadwal/Netflix-clone/"
    },

    {
        imgsrc: spotify,
        title: "Spotify desktop site",
        desc: "Recreated a frontend only clone of Spotify desktop version using ReactJs and Spotify's own api for developers and hosted using firebase, also has Spotify's user authentication",
        liveUrl: "https://spotify-clone-8dbf1.web.app/",
        gitUrl: "https://github.com/AnilGadwal/Spotify-clone/"
    },

    {
        imgsrc: instagram,
        title: "Instgram clone",
        desc: "Made an Instagram clone with ReactJs and Firebase realtime database, with user authentication. It can post pictures and you can also use the comment functionality",
        liveUrl: "https://instagram-clone-7dca2.web.app/",
        gitUrl: "https://github.com/AnilGadwal/Instagram-clone/"
    },
    
    {
        imgsrc: amazon,
        title: "Amazon clone",
        desc: "Made this using amazon clone using reactJS, materialUI, react Router, Context Api",
        liveUrl: "https://clone-90d65.web.app/",
        gitUrl: "https://github.com/AnilGadwal/amazon-clone/"
    },

    {
        imgsrc: portfolio,
        title: "My portfolio",
        desc: "Made this Portfolio from scratch using ReactJs and bootstrap components",
        liveUrl: "https://my-portfolio-76ddd.web.app/",
        gitUrl: "https://github.com/AnilGadwal/My-portfolio/"
    },
    
]

export default Pdata;