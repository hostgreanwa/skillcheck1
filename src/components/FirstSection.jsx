import '../styles/style.css'


function FirstSection() {
    return (
        <div className='big-container'>
            <div className='writing-section'>
                <div className='top-section'>
                    <p>Hi !</p>
                    <p className='name'>I'm Natthaphat Tem</p>
                    <p className='name'>a Developer Trainee</p>
                    <svg className='blue-circle-bg' xmlns="http://www.w3.org/2000/svg" width="271" height="261" viewBox="0 0 271 261" fill="none">
                        <g filter="url(#filter0_f_2_9)">
                            <ellipse cx="135.5" cy="130.5" rx="70.5" ry="65.5" fill="#0E85F3" fill-opacity="0.22" />
                        </g>
                        <defs>
                            <filter id="filter0_f_2_9" x="0" y="0" width="271" height="261" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="32.5" result="effect1_foregroundBlur_2_9" />
                            </filter>
                        </defs>
                    </svg>
                    <svg className='second-blue-circle-bg' xmlns="http://www.w3.org/2000/svg" width="179" height="181" viewBox="0 0 179 181" fill="none">
                        <g filter="url(#filter0_f_2_10)">
                            <ellipse cx="89.5" cy="90.5" rx="47.5" ry="48.5" fill="#0E85F3" fill-opacity="0.16" />
                        </g>
                        <defs>
                            <filter id="filter0_f_2_10" x="0" y="0" width="179" height="181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_2_10" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className='bottom-section'>
                    <p>Developer Trainee based in Bangkok, Thailand. Attended the bootcamp established by Techup. Graduated in Industrial Engineering's field but passionate in programming.</p>
                </div>
            </div>
            <div className='picture-section'>
                <img className='pic' src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403' alt='cat'></img>
            </div>
        </div>
    )
}

export default FirstSection