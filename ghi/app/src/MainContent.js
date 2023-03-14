import './css/styles.css';
import './css/buyCard.css';

function MainContent() {
    return (
        <>
        <div>

            <div className="divContainer">
                <p className="text-white" id='revsuccess'>
                REV UP YOUR SUCCESS WITH AUTO STACK
                </p>
            </div>


            <div>
                <div className="divContainer block">
                    <h2 className="text-center mx-3 px-3">Get your services organized with your VIP clients</h2>
                    <img className="mainImg" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80" />
                </div>
                <div>

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
                    <button>
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
                    <button>
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
                    <button>
                        Buy now
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default MainContent;
