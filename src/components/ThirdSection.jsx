import '../styles/style.css'

function ThirdSection() {
    return (
        <div className='second-container-section'>
            <div className='second-topic'>My <span className='word-passions'>Personality</span></div>
            <div className='image-section'>
                <div className='block-container'>
                    <div>
                        <img className='third-section-inside-image' src='https://www.livermoreschools.org/cms/lib/CA50000061/Centricity/Domain/2221/Banners%20logos.png' alt='positive thinking'></img>
                        <div><b>Positive</b> Thinking</div>
                    </div>
                </div>
                <div className='block-container'>
                    <div>
                        <img className='third-section-inside-image-second' src='https://www.excelsior.edu/wp-content/uploads/2017/03/Growth-Mindset-e1565799493145.png' alt='positive thinking'></img>
                        <div><b>Growth</b> Mindset</div>
                    </div>
                </div>
                <div className='block-container'>
                    <div>
                        <img className='third-section-inside-image-third' src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20414196.jpg' alt='positive thinking'></img>
                        <div><b>Work</b> Smart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection