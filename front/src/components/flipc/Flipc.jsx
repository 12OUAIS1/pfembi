import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./flipc.css"

const UserOffers = () => {
  const [offers, setOffers] = useState([]);
  const id = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchUserOffers = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v3/getoffre/${id}`);
        const { offres, message } = response.data;
        if (offres) {
          setOffers(offres);
        } else {
          console.log(message); // No offers found message
        }
      } catch (error) {
        console.error('Failed to fetch user offers:', error);
      }
    };

    fetchUserOffers();
  }, [id]);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:1000/api/v1/user/${id}`);
      const userData = response.data;
      setUserData(userData);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  fetchUserData();

  return (
    <div>
     <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            
          <img src="/src/img/mobilis.svg" className="log" alt="" />
            <svg version="1.1" class="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
            </svg>
            
            {offers.length > 0 ? (
        <ul>
          {offers.map((offer) => (
            <li key={offer._id}>
           <p class="number">+213 {offer.numberr}</p>
            <p className="typeo">Type offre</p>
            <p className="o">{offer.offre}</p>
            <p className="credit">mon credit</p>
            <p className="c">00 DA</p>
            <p className="appel">rest appel</p>
            <p className="a">illimité</p>
            <p className="net">internet</p>
            <p className="an">{offer.net}/80</p>
            <p class="valid_thru">VALID THRU</p>
            <p class="date_8264">{offer.days}</p>
            <p class="name">{offer.namee}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No offers found for this user</p>
      )}

        </div>
        <div class="flip-card-back">
        <p class="heading_8264">MOBILISCARD</p>
            <div class="strip"></div>
            <div class="mstrip"> <h6>6810-5841-8623-3025</h6></div>
            <div class="sstrip">
              <p class="code">***</p>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default UserOffers;
