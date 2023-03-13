import image from './Thank.png';

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center" id="mainpageDiv">
      <img src={image}/>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4" id="mainpage">
        Rev up your dealership's success with Auto Stack - the premier inventory and sales management solution for car dealerships.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
