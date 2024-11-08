import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function NavBar(){
    return(
        <nav className="py-6 mb-20 items-center">
            <div className="flex flex-shrink-0 justify-around gap-4 text-2xl">
                <div >AR</div>
                <div className="flex flex-shrink-0 items-center justify-center gap-4 text-2xl">
                    <a href="https://github.com/Abdelmoneim21"target="_blank"><FaGithubSquare  /></a>
                    <a href="https://www.linkedin.com/in/abdelmonem-ramadan10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/abdelmoneim_21/" target="_blank"><FaInstagramSquare /></a>
                    <a href="https://x.com/AbdelMoneiM_21" target="_blank"><FaSquareXTwitter /></a>
                </div>
            </div>
        </nav>
    )
}