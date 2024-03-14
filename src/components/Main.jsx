import axios from "axios";
import { useEffect, useState } from "react"

const Main = () => {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [memes, setMemes] = useState([])
    const [image, setImage] = useState("")
    
    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
        .then(data => setMemes(data.data.data.memes))
    }, [])

    useEffect(() => {
        changeImage()
    }, [memes])

    const changeImage = () => {
        const random = Math.floor(Math.random() * (memes.length-1))
        setImage(memes[random]?.url)
    }
    return (
        <main className="main">
            
                <div className="main--grid">
                    <input
                        value={topText}
                        onChange={(ev) => setTopText(ev.target.value)}
                        className="main--top-text"
                        type="text"
                        placeholder="Top Text"
                    />
                    <input
                        value={bottomText}
                        onChange={(ev) => setBottomText(ev.target.value)}
                        className="main--bottom-text"
                        type="text"
                        placeholder="Bottom Text"
                    />
                    <button onClick={changeImage} className="main--button">Get Meme Image 🖼️</button>
                    <div className="main--output">
                        <p className="main--output-text-up">{topText}</p>
                        <img className="main--output-img" src={image} alt="" />
                        <p className="main--output-text-down">{bottomText}</p>
                    </div>
                </div>
                <p>you can take a screenshot of this meme.</p>
        </main>
    )
}

export default Main