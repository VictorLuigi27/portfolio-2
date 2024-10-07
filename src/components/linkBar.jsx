import { useState } from 'react';

export default function LinkBar() {
    const [close, setClose] = useState(true);

    const handleClose = () => {
        console.log('Toggle:', close); 
        setClose(!close); 
    }

    return (
        <div className="flex relative">
            <div className={`bg-black p-4 rounded-r-lg border-2 border-emerald-500 flex flex-col justify-center w-20 mt-44 fixed transition-transform duration-300 lg:mt-32 lg:w-20
                ${close ? '-translate-x-full' : 'translate-x-0'}`}>
            
                {/* Linkedin */}
                <a 
                    className="text-white flex flex-col items-center mb-5 text-[0.7rem] gap-2 lg:text-[0.9rem]" 
                    href="https://www.linkedin.com/in/victordiazpro/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="text-white"
                        src='/src/assets/icons/linkedin-icon.svg'
                        alt="Linkedin"
                    />
                    Linkedin
                </a>

                {/* Gmail */}
                <a 
                    className="text-white flex flex-col items-center mb-4 text-[0.7rem] gap-2 lg:text-[0.9rem]" 
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="text-white"
                        src='/src/assets/icons/gmail-icon.svg'
                        alt="Gmail"
                    />
                    Gmail
                </a>

                {/* Téléphone */}
                <a 
                    className="text-white flex flex-col items-center mb-4 text-[0.7rem] gap-2 lg:text-[0.9rem]" 
                    href="tel:0775739679"
                    target="_self"
                >
                    <img
                        className="text-white"
                        src='/src/assets/icons/phone-icon.svg'
                        alt="Téléphone"
                    />
                    Téléphone
                </a>

                {/* Mentions légales: lien vers page */}
                <a 
                    className="text-white flex flex-col items-center text-[0.7rem] gap-2 lg:text-[0.9rem]" 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="text-white"
                        src='/src/assets/icons/mentions-icon.svg'
                        alt="Droits"
                    />
                    Droits
                </a>

                {/* Bouton pour fermer et ouvrir la barre de contact */}
                <button onClick={handleClose} className={`absolute right-[-2.22rem] lg:right-[-3.6rem]`}>
                    <img
                        className="w-10 h-12 lg:w-16 lg:h-20"
                        src='/src/assets/icons/contact-icon.svg'
                        alt="Contact"
                    />
                </button>
            </div>
        </div>
    );
}
