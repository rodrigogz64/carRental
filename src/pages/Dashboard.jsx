import '../Styles/dashboard.css';
import Card from '../Components/Card/Card';
import KilometreChart from '../charts/KilometreChart';
import CarStatsChart from '../charts/CarStatsChart';
import RecommendCarCard from '../Components/RecommendCarCard/RecommendCarCard';
import recommendCarsData from '../assets/dummy-data/recommendCars';

const carObj = {
  title: "Total Cars",
  totalNumber: 550,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 300,
  icon: "ri-road-map-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "70k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

export default function Dashboard () {
return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <div className="dashboard_cards">
          <Card item={carObj} />
          <Card item={tripObj} />
          <Card item={clientObj} />
          <Card item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats_title">Kilometres Statistics</h3>
            <KilometreChart />
          </div>

          <div className="stats">
            <h3 className="stats_title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend_cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}