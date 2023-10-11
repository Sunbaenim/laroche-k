import '../styles/main-page.css';
import photoPresentation from '../assets/photo.jpg';
import Map from './Map';
import Form from './Form';
import ContactButtons from './ContactButtons';

const MainPage = () => {
    return(
        <div className="main-page-container">
            <div className='main-page'>
                <section id='presentation' className='box'>
                    <img src={photoPresentation} alt="présentation" />
                    <h3>Je m'appelle Kathy Laroche,</h3>
                    <p>
                        Infirmière à domicile depuis 2005,
                        <br />
                        Je prends soin de vous et des vôtres tout en leur permettant de rester à domicile par une prise en charge complète.
                        <br />
                        Le patient reste au centre de mes préoccupations, et n’est jamais laissé à l’abandon.
                        <br />
                        Pendant mes congés ce sont deux collègues infirmières qui vous prennent en charge.
                    </p>
                </section>
                <section id='liste-des-soins' className='box'>
                    <h5 className='section-title'>Liste des soins</h5>
                    <div className='liste-soins'>
                        <ul>
                            <li>Toilette et hygiène</li>
                            <li>Toilette pour personnes handicapées</li>
                            <li>Soins de plaies</li>
                            <li>Pansements simples ou complexes</li>
                            <li>Injections</li>
                            <li>Stomies (poches)</li>
                            <li>Préparation des médicaments (semainiers)</li>
                            <li>Soins palliatifs</li>
                            <li>Soins diabétiques</li>
                            <li>Soins aux personnes handicapées</li>
                            <li>Etc.</li>
                        </ul>
                    </div>
                </section>
                <section id='lieux-de-prestation' className='areas-and-map-section | box'>
                    <h5 className='section-title'>Lieux de prestation</h5>
                    <div className='areas-and-map-container'>
                        <div className='covered-areas'>
                            <ul>
                                <li>Grâce-Hollogne</li>
                                <li>Awans</li>
                                <li>Flémalle</li>
                                <li>Saint-Nicolas</li>
                                <li>Saint-Georges-Sur-Meuse</li>
                                <li>Fexhe-le-Haut-Clocher</li>
                                <li>Seraing</li>
                            </ul>
                        </div>
                        <div className='map-container'>
                            <Map />
                        </div>
                    </div>
                </section>
                <section id='contact' className='box'>
                    <h5 className='section-title'>Contact</h5>
                    <div className='contact-box'>
                        {window.innerWidth < 768 ? <ContactButtons /> :
                            <p>Téléphone : 0496/43.80.85</p>
                        }

                    </div>
                </section>
                <Form />
                {window.innerWidth >= 768 && <ContactButtons />}
            </div>
        </div>
    );
}

export default MainPage;