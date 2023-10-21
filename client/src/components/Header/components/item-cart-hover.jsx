import 'react-toastify/dist/ReactToastify.css';

const ItemCartHover = (props) => {
  return (
    <div className="flex flex-row my-5">
      <img className="grow-0 bg-cover scale-75" src={props.image} />
      <div className="grow text-black mx-2 overflow-clip">{props.title}</div>
      <div className="grow flex text-black justify-end mx-2 text-orange">đ{props.price}</div>
    </div>
  );
};

export default ItemCartHover;
