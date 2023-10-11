import { useState, useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {

    const [date, setDate] = useState();
    useEffect(() => {
        setDate(new Date().getFullYear());
    }, []);

    return(
        <footer className="footer">
            <p>BCE: BE 0502.597.778</p>
            <p>Infirmière conventionnée. <a href='/#' className='cgu'>C.G.U</a></p>
            <p>© {date} Lootens Dylan - Bastin Michel & Diego</p>
        </footer>
    );
}

export default Footer;