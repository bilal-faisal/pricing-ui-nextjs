import Image from "next/image";
import tick from "../../../public/tick_icon.png";

const List = ({text}:{text:string}) => {
  return (
    <div className="flex py-1.5 items-center" >
      <Image src={tick} width={18} height={18} alt="Bullet" className="flex-shrink-0" />
      <p className="pl-5">{text}</p>
    </div>
  );
};

export default List;
