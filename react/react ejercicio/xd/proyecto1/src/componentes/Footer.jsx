import face from '../img/face.png';
import insta from '../img/insta.png';
import tw from '../img/tw.avif';
const Footer = ()=> {
    return (
        <>
        <footer>
            <img id='q' src={face} />
            <p>FACEBOOk</p>

            <img id='q' src={insta} />
            <p>INSTAGRAM</p>

            <img id='q' src={tw} />
            <p>TWITTER</p>
        </footer>

        </>
    ) 
  }
  
  export default Footer;