import { FaArrowUpLong } from "react-icons/fa6";
import { useState } from "react"

export default function ScrollTop() {
    const [Visible, setVisible] = useState(false);

    const togalVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false)
        }
    }

    const scrollTotop = () => (
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        )
    )
    window.addEventListener("scroll", togalVisible);
    return <>
        <button className="scroll" onClick={scrollTotop} style={{ display: Visible ? 'inline' : 'none' }}>
            < FaArrowUpLong />
        </button>
    </>
}