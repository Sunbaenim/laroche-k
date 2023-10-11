import '../styles/soins.css';

const Soins = () => {

    return(
        <section className="soins">
            <div className='soins-box'>Liste des soins</div>
            {/* <button className='soins-button'>Liste des soins</button> */}
            <div className='list-soins'>
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
    );
}

export default Soins;