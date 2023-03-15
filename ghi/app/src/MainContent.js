import './css/styles.css';
import './css/buyCard.css';
import './css/infoCard.css'

function MainContent() {
    return (
        <>
        <div>

            <div className="blockContainer">
                <p className="hrBlock">

                </p>
            </div>
            <div className="mainDivContainer">
                <p className='text-white' id='revsuccess'>
                REV UP YOUR SUCCESS WITH AUTO STACK
                </p>
            </div>
            <div className="blockContainer">
                <p className="hrBlock">
                </p>
            </div>


            <div className="infoContainer">
                <div className="cardInfo">
                    <div className="imageInfo"></div>
                    <div className="contentInfo">
                        <a href="#">
                        <span className="titleInfo">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                        </a>

                        <p className="descInfo">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium
                        </p>

                        <a href="#" className="actionInfo">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                        </a>
                    </div>
                    </div>
                <div className="cardInfo">
                    <div className="imageInfo"></div>
                    <div className="contentInfo">
                        <a href="#">
                        <span className="titleInfo">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                        </a>

                        <p className="descInfo">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium
                        </p>

                        <a href="#" className="actionInfo">
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="cardContainer">
            <div className="card_box">
                <div className="card">
                    <div className="content">
                    <div className="title">Personal edition</div>
                    <div className="price">$59.99</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <button className="buttonBuy">
                        Buy now
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
                        Buy now
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
                        Buy now
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainContent;
