import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './off.css';
import libre_fr from '../../img/libre_fr.jpg';

// Sample array of offers
const offers = [
  {
    id: 1,
    title: 'Sama libre 1300',
    description: 'Description de l\'offre 1',
    net: '10 Go',
    daysPerMonth: '30 jours',
    price: 1300
  },
  {
    id: 2,
    title: 'Offre 2',
    description: 'Sama libre 1300',
    net: '20 Go',
    daysPerMonth: '30 jours',
    price: 1300
  },
  {
    id: 3,
    title: 'Offre 3',
    description: 'Description de l\'offre 3',
    net: '30 Go',
    daysPerMonth: '30 jours',
    price: 1300
  },
  {
    id: 4,
    title: 'Offre 4',
    description: 'Description de l\'offre 4',
    net: '40 Go',
    daysPerMonth: '30 jours',
    price: 250
  },
  {
    id: 5,
    title: 'Offre 5',
    description: 'Description de l\'offre 5',
    net: '50 Go',
    daysPerMonth: '30 jours',
    price: 300
  },
  {
    id: 6,
    title: 'Offre 6',
    description: 'Description de l\'offre 6',
    net: '60 Go',
    daysPerMonth: '30 jours',
    price: 350
  }
];

// Component to render each offer card
const OfferCard = ({ offer }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={libre_fr} alt="Offre Image" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{offer.title}</h5>
          <p className="card-text">{offer.description}</p>
          <ul className="list-unstyled">
            <li><strong>Net:</strong> {offer.net}</li>
            <li><strong>Jours par mois:</strong> {offer.daysPerMonth}</li>
            <li><strong>Prix:</strong> {offer.price} DA</li>
          </ul>
        </div>
      </div>
    </div>
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
