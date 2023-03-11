import image from './dealership manage.png';

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img src={image}/>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
  );
}

export default MainPage;
