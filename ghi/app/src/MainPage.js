import './css/styles.css';
import './css/buyCard.css';

function MainPage() {
  return (
    <>
    <div>
      <p className="text-center text-white" id='revsuccess'>
      REV UP YOUR SUCCESS WITH AUTO STACK
      </p>

      <div id="divCard"><h1 className="text-white">-</h1></div>

      <div className='cardContainer'>
        <div className='block card'>
        <h1
        ></h1>
        </div>

        <div>
          <h1 className='welcomeMain'>Welcome to AutoStack - the ultimate solution for managing all aspects of your automobile dealership. From inventory management to sales and service center operations, AutoStack has got you covered!</h1>
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
    </div>
    </>
  );
}

export default MainPage;
