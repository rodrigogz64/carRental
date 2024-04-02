
export default function CarItem (props) {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  return (
    <div className="car_item">
      <div className="car_item-top">
        <div className="car_item-tile">
          <h3>{carName}</h3>
        </div>
        <p>{category}</p>
      </div>

      <div className="car_img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car_item-bottom">
        <div className="car_bottom-left">
          <p> <i className="ri-user-line"></i>{groupSize}</p>
          <p> <i className="ri-repeat-line"></i>{type}</p>
          <p className="car_rent">${rentPrice}/d</p>
        </div>
      </div>
    </div>
  );
}

