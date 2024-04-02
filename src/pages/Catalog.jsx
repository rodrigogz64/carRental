import '../Styles/catalog.css';
import carData from '../assets/dummy-data/catalog-cars.json';
import CarItem from '../Components/CarItems/CarItem.jsx';
import { useState } from 'react';

export default function Catalogs() {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const categories = new Set(carData.map((car) => car.category));
  const types = new Set(carData.map((car) => car.type));
  const optionsCategory = Array.from(categories).map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  const optionsType = Array.from(types).map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  const filteredCars = carData.filter(
    (car) =>
      (car.category === selectedModel || selectedModel === '') &&
      (car.type === selectedType || selectedType === '')
  );

  return (
    <div className="catalogs">
      <div className="catalog_wrapper">
        <h2 className="catalog_title">Cars Catalog</h2>
        

        <div className="filter_widget-wrapper">
          <div className="filter_widget-01">
            <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
              <option value="">Models</option>
              {optionsCategory}
            </select>
          </div>
          <div className="filter_widget-02">
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="">Transmission</option>
              {optionsType}
            </select>
          </div>
        </div>

        <div className="catalog_car-list">
          {filteredCars.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
