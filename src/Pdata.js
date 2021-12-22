import netflix from "./projects/netflix.JPG"
import spotify from "./projects/spotify.jpg"
import portfolio from "./projects/portfolio.jpg"
import amazon from "./projects/amazon.JPG"
import portfolio2 from "./projects/portfolio2.PNG"
import guided from "./projects/guided.PNG"

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
    
    {
        imgsrc: portfolio2,
        title: "My portfolio v2",
        desc: "Made this Portfolio website from scratch using ReactJs and css3, I hosted the site with firebase",
        liveUrl: "https://my-portfolio-v2-35dbe.firebaseapp.com/",
        gitUrl: "https://github.com/AnilGadwal/My-portfolio-v2"
    },

    {
        imgsrc: guided,
        title: "Guided Troubleshoot app",
        desc: "A guided troubleshoot app for android app troubleshooting made using react router v6 and css3, it was an interview assignment given to me.",
        liveUrl: "https://guided-troubleshoot.web.app/",
        gitUrl: "https://github.com/AnilGadwal/guided-troubleshoot"
    },
]

export default Pdata;