import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <img src="images/horizon1logo.jpg" width="150px" height="60vh"/>
          </a>
      </li>
      </ul>
    </div>
         <div className="nav-item flags">
          <a className="nav-link" href="#">
            <img src="images/ghanaflag.jpg" width="50px" height=""/>
            <img src="images/nigeriaflag.png" width="50px" height=""/>
            <img src="images/kenyaflag.jpg" width="50px" height=""/>
          </a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </div>
  </nav>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner carousel-page">
      <div className="carousel-item active">
        <img src="images/silver2.jpeg" className="d-block w-100" alt="images"/>
      </div>
      <div className="carousel-item">
        <img src="images/silverstar.jpeg" className="d-block w-100" alt="images"/>
      </div>
      <div className="carousel-item">
        <img src="images/main3.jpg" className="d-block w-100" alt="images"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <h3 className="text-center planspace">PLANS</h3>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem"}}>
    <img src="images/B1.jpeg" className="card-img-top" alt="office" className="image-fluid"/>
    <div className="card-body">
      <h4 className="text-center">VISUAL OFFICES</h4>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem"}}>
    <img src="images/B2.jpeg" className="card-img-top" alt="office" className="image-fluid"/>
    <div className="card-body">
      <h4 className="text-center">CUSTOMIZED OFFICES</h4>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.gjdsvcb ujbvnj.bvhvbhv. udhnudf.</p>
    </div>
  </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem"}}>
    <img src="images/B3.jpeg" className="card-img-top" alt="office" className="image-fluid"/>
    <div className="card-body">
      <h4 className="text-center">SERVICED OFFICES</h4>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{ width: "18rem"}}>
    <img src="images/B4.jpeg" className="card-img-top" alt="office" className="image-fluid"/>
    <div className="card-body">
      <h4 className="text-center">MEETING ROOMS</h4>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
      </div>
    </div>
  </div>
  
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 text-center color">
        <h5>VISIT US IN KENYA</h5>
        <h6>Nairobi Kenya</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
      </div>
      <div className="col-md-4 text-center color">
        <h5>VISIT US IN GHANA</h5>
        <h6>Accra Ghana</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
      </div>
      <div className="col-md-4 text-center color">
        <h5>VISIT US IN NIGERIA</h5>
        <h6>Lagos Nigeria</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
      </div>
    </div>
  </div>
  
  
  <footer>
    <div className="container">
      <div className="row">&copy:2021 H0RIZON2 All Rights Reserved</div>
    </div>
  </footer>
  </div>
  );
}

export default App;
