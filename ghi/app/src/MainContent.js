import './css/styles.css';
import './css/buyCard.css';
import './css/infoCard.css'
import React, { useState } from 'react';


function MainContent() {

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const [key] = useState(0);

    React.useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => observer.observe(element));
    }, [key]);

    return (
        <>
        <div>
            <div className="hidden">
                <div className="blockContainer">
                    <p className="hrBlock"></p>
                </div>
                <div className="mainDivContainer">
                    <p className='text-white' id='revsuccess'>
                    REV UP YOUR SUCCESS WITH AUTO STACK</p>
                </div>
                <div className="blockContainer">
                    <p className="hrBlock"></p>
                </div>
            </div>

                <div className="hidden">
                    <p className='text-white text-center' id='revsuccess2'>
                    Plans and Pricing
                    </p>
                </div>

        </div>
        <div className="cardContainer hidden">
            <div className="card_box">
                <div className="card">
                    <div className="content">
                    <div className="title">Personal edition</div>
                    <div className="price">$59.99</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <button className="buttonBuy">
                    Learn More
                    </button>
                </div>
            </div>
            <div className="card_box2">
                <div className="card">
                    <div className="content">
                    <div className="title">Business Starter Kit</div>
                    <div className="price">$324.99</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <button className="buttonBuy">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="card_box">
            <div className="card">
                    <div className="content">
                    <div className="title">Corporate Level</div>
                    <div className="price">$599.99</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <button className="buttonBuy">
                    Learn More
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainContent;
