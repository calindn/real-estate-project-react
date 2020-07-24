import React from 'react'

export default function CategoryList() {
    return (
        <div className='category-list-c'>
            <div className='columns'>
                <div className='categories'>
                    <h1>Categorii</h1>
                    <div>
                        <ul className='for-sale'>
                            <li>Apartamente de vânzare</li>
                            <li>Garsoniere de vânzare</li>
                            <li>Case - Vile de vânzare</li>
                            <li>Terenuri de vânzare</li>
                            <li>Birouri - Spații comerciale de vânzare</li>
                        </ul>
                        <ul className='for-rent'>
                            <li>Apartamente de închiriat</li>
                            <li>Garsoniere de închiriat</li>
                            <li>Case - Vile de închiriat</li>
                            <li>Terenuri de închiriat</li>
                            <li>Birouri - Spații comerciale de închiriat</li>
                        </ul>
                    </div>

                </div>
                <div className='main-districts'>
                    <h1>Principalele județe</h1>
                    <div>
                        <ul className='districts-1'>
                            <li>Bucuresti-Ilfov</li>
                            <li>Cluj</li>
                            <li>Mures</li>
                            <li>Iasi</li>
                            <li>Timis</li>
                        </ul>
                        <ul className='districts-2'>
                            <li>Prahova</li>
                            <li>Brasov</li>
                            <li>Constanta</li>
                            <li>Arad</li>
                            <li>Toate...</li>
                        </ul>
                    </div>

                </div>
                <div className='ads-of-iterest'>
                    <h1>Anuțuri de interes</h1>
                    <ul>
                        <li>Pătuț copii</li>
                        <li>Mobilă</li>
                        <li>Cazare - turism</li>
                        <li>Unelte grădinărit</li>
                        <li>Canapele</li>
                    </ul>
                </div>
            </div>
            <div className='text'>
                În cazul în care cauți să vinzi și/sau să închiriezi un apartament, o vilă, un spațiu comercial și/sau un teren, ești în locul potrivit! Pe site-ul
                <a href='#'>HomeZZ.ro</a> vei găsi peste o sută de mii de anunțuri cu vânzări de apartamente, imobiliare de închiriat, prezentări de ansambluri rezidențiale, oferte și licitații din diverse executări silite, anunțuri postate de agenții imobiliare din orașul și/sau județul tău, spații comerciale de închiriat sau de vânzare, gata finisate și compartimentate sau proprietăți care așteaptă să le amenajezi după bunul tău plac.
                Cu  <a href='#'>HomeZZ.ro</a>, e foarte ușor să găsești exact spațiul de care ai nevoie, fie că ești persoană fizică sau antreprenor. Vinzi, cumperi, închiriezi sau schimbi, trebuie doar să aplici filtrele potrivite. Cauți terenuri într-o zonă anume sau un apartament într-un complex rezidențial? Folosește harta proprietăților să afli cele mai bune prețuri din zona dorită de tine. Intră acum și caută, printre zecile de mii de anunțuri cu imagini și descrieri detaliate! Echipa
                <a href='#'>HomeZZ.ro</a> îți urează mult succes!
            </div>
            <div className='cta-add-a'>
                <p>Vrei să vinzi simplu si rapid?
                    <span>
                        <button className='btn'>
                            <span>+</span>ADAUGĂ ANUNȚ
                        </button>
                    </span>
                </p>
            </div>
        </div>
    )
}
