import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-home">
  <a className="navbar-brand" href="#">PIZZAMANIA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Pizza</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pizza Type</a>
      </li> 
      </ul>
   </div>    
</nav>	

<div className="container-fluid">
  <div className="row">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner carousel-page">
    <div className="carousel-item active">
      <img src="images/pizza7.jpeg" className="d-block w-100" alt="pizza"/>
    </div>
    <div className="carousel-item">
      <img src="images/pizza5.jpeg" className="d-block w-100" alt="pizza"/>
    </div>
    <div className="carousel-item">
      <img src="images/pizza9.jpeg" className="d-block w-100" alt="pizza"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>

</div>
  </div>
</div>

<div className="container about-pizza">
  <div className="row">
    <h2 className="text-center">About Pizza</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="images/pizza2.jpeg" alt="about pizza" className="img-fluid"/>
        </div>
        <div className="col-md-6">
          <h3>Pizza Is Awesome</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-3">
      <div className="card" style={{width: "18rem"}}>
        <img src="images/pizza8.jpeg" className="card-img-top" alt="all season" className="img-fluid"/>
        <div className="card-body">
          <h3>All Season Pizza</h3>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card" style={{width: "18rem"}}>
        <img src="images/pizza3.jpeg" className="card-img-top" alt="all season" className="img-fluid"/>
        <div className="card-body">
          <h3>Chicken Pizza</h3>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card" style={{width: "18rem"}}>
        <img src="images/pizza4.jpeg" className="card-img-top" alt="all season" className="img-fluid"/>
        <div className="card-body">
          <h3>Pepperoni Pizza</h3>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card" style={{width: "18rem"}}>
        <img src="images/pizza10.jpeg" className="card-img-top" alt="all season" className="img-fluid"/>
        <div className="card-body">
          <h3>Vegetable Pizza</h3>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
        </div>
        </div>
    </div>
  </div>
</div>

<div className="footer">
  <div className="container">
    <div className="row">
      <p className="text-center">&copy: 2021 Pizzamania All Rights Reserved!</p>
    </div>
  </div>
</div>

<script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>


    </div>
  );
}

export default App;
