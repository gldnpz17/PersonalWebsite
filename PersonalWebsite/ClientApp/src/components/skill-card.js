import { Card } from "react-bootstrap";
import ShadowCard from "./shadow-card"

const SkillCard = (props) => {
  return (
    <ShadowCard className="m-2 m-sm-3">
      <Card.Body className="p-3" style={{width: "10rem"}}>
        <div className="m-2 mb-3" style={{height: "6rem"}}>
          <img className="d-block" style={{maxHeight: "100%", maxWidth: "100%", position: "relative", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} src={props.src} />
        </div>
        <p className="text-center mb-1" style={{fontSize: "1.3rem"}}>{props.skillName}</p>
      </Card.Body>
    </ShadowCard>
  );
}

export default SkillCard;