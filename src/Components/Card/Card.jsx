

export default function Card (props) {
  const { title, totalNumber, icon } = props.item;
  return (
    <div className="single_card">
      <div className="card_content">
        <h4>{title}</h4>
        <span>{totalNumber}</span>
      </div>

      <span className="card_icon">
        <i className={icon}></i>
      </span>
    </div>
  );
}
