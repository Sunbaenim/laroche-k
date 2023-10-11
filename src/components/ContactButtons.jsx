import '../styles/contact-buttons.css';
import telIcon from '../assets/tel-icon.svg';
import mailIcon from '../assets/mail-icon.svg';

const ContactButtons = () => {
    return(
        <div className='contact-buttons'>
            <a href="tel:+32496438085">
                <div className='contact-button'>
                    <img src={telIcon} alt="bouton téléphone" />
                </div>
            </a>
            <a href="mailto:mail_demande_soins@larochek.be">
                <div className='contact-button'>
                    <img src={mailIcon} alt="bouton e-mail" />
                </div>
            </a>
        </div>
    );
}

export default ContactButtons;