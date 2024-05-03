
import '../styles/Footer.css';


const Footer = ({handleNext, handlePrevious}) =>{
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            document.querySelector('.footer__container').classList.add('footer__fixed');
        } else {
            document.querySelector('.footer__container').classList.remove('footer__fixed');
        }
    }
 
 

    return (
        <footer className="footer__container">
           <div className='footer__container-buttons'>
           <button onClick={handlePrevious} >Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
           </div>
        </footer>
    )
}

export default Footer;