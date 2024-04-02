import { useState } from 'react';
import '../Styles/sellcar.css';
import TrackingChart from '../charts/TrackingChart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import carData from '../assets/dummy-data/sellcar.json';
import toyotaCar from '/public/images/Corolla.png';
import nissanCar from '/public/images/centra.png';
import kiaCar from '/public/images/kiaK5.webp';


export default function SellCar() {
  const [data] = useState(carData);
  const [selectedCategory, setSelectedCategory] = useState('Kia'); 
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = data.filter((item) => item.category === selectedCategory);
  const textSelected = selectedCategory == 'Toyota' ?  'Corolla Nightshade 2024' : selectedCategory == 'Nissan' ? 'Sentra SR 2024' :
  selectedCategory == 'Kia' ? 'K5 GT-Line AWD 2024' : '';  
  const imgSelected = selectedCategory == 'Toyota' ?  toyotaCar : selectedCategory == 'Nissan' ? nissanCar :
  selectedCategory == 'Kia' ? kiaCar : '';

  return (
    <div className="sell_car">
      <div className="sell_car-wrapper">
        <h2 className="sell_car-title">Sell Cars</h2>
        <div className="sell_car-top">
          <div className="sell_car-img">
            <h2>{textSelected}</h2>
            <img src={imgSelected} alt="" />
          </div>

          <div className="tracking_history">
            <h3>Tracking History</h3>
            <TrackingChart selectedCategory={selectedCategory}/>
          </div>
        </div>

        <div className="offer_wrapper">
          <div className="offer_top">
            <h2 className="sell_car-title">Offers</h2>

            <div className="filter_widget-01">
              <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Nissan</option>
                <option value="Kia">Kia</option>
              </select>
            </div>
          </div>

          <div className="offer_list">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div className="offer_item" key={index}>
                  <div className="box_01">
                    <h3 className="client_name">{item.clientName}</h3>
                    <h6 className="avg_price">
                      ${item.averagePrice} <span>average price</span>
                    </h6>

                    <h6 className="market_price">Market average is ${item.marketAveragePrice}</h6>
                  </div>

                  <div className="circle_wrapper">
                    <div className="box_02">
                      <CircularProgressbar
                        value={item.impressionShare}
                        text={`${item.impressionShare}%`}
                        styles={buildStyles({
                          pathColor: "#01d293",
                          textColor: "#fff",
                          trailColor: "#0b0c28",
                          textSize: "18px",
                        })}
                      />
                    </div>
                    <h4>Impression Share</h4>
                  </div>

                  <div className="box_03">
                    <span className="model_spend-icon">
                      <i className="ri-car-line"></i>
                    </span>
                    <h6 className="spend_amount">${item.modelSpend}</h6>
                    <p className="spend_title">Model Spend</p>
                  </div>

                  <div className="box_04">
                    <span className="model_spend-icon">
                      <i className="ri-share-forward-line"></i>
                    </span>
                    <h6 className="spend_amount">${item.modelSpend}</h6>
                    <p className="spend_title">Model Spend</p>
                  </div>

                  <div className="box_05">
                    <span className="model_spend-icon">
                      <i className="ri-money-dollar-circle-line"></i>
                    </span>
                    <h6 className="spend_amount">${item.spendPerUnitTurned}</h6>
                    <p className="spend_title">Spend Per Unit Turned</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay ofertas disponibles para la categoría seleccionada</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}