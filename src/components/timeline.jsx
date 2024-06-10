import image from "./images/character.svg";
import { useScroll ,useMotionValueEvent} from "framer-motion"



const timeline = () => {
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        
      })
      
  return (
    <>
      <img
        src={image}
        style={{
          position: "relative",
          zIndex: "2",
          top: "430px",
          width: "180px",
        }}
        alt=""
      />
      <div className="time-line">
        <hr />
        <div className="box">1</div>
        <hr />
        <div className="box">2</div>
        <hr />
        <div className="box">3</div>
        <hr />
        <div className="box">4</div>
        <hr />
      </div>
    </>
  );
};

export default timeline;
