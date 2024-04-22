import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./off.css"
import Alloff from "../alloff/Alloff"
import libre_fr from "../../img/libre_fr.jpg"
// Sample array of offers
const offers = [
  {
    id: 1,
    title: 'Offer 1',
    description: 'Description of Offer 1',
    price: 100
  },
  {
    id: 2,
    title: 'Offer 2',
    description: 'Description of Offer 2',
    price: 150
  },
  {
    id: 3,
    title: 'Offer 3',
    description: 'Description of Offer 3',
    price: 200
  },
  {
    id: 4,
    title: 'Offer 1',
    description: 'Description of Offer 1',
    price: 100
  },
  {
    id: 5,
    title: 'Offer 2',
    description: 'Description of Offer 2',
    price: 150
  },
  {
    id: 6,
    title: 'Offer 3',
    description: 'Description of Offer 3',
    price: 200
  }
];

// Component to render each offer card
const OfferCard = ({ offer }) => {
  return (

    <>
    
    <div className="col-lg-4 mb-3">
       
       <div class="cardd">
 <img src={libre_fr} alt="" className="svg" />
 <div class="card__content">
   <p class="card__title">{offer.title}</p>
   <p class="card__description">{offer.description}</p>
 </div>
</div>

     </div>
    </>
   
  );
};

// Component to render the array of offers
const OfferList = () => {
  return (
    <div className="row">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

// App component
const App = () => {
  return (
    <div className="container mt-5">
      
      <OfferList />
    </div>
  );
};

export default App;
