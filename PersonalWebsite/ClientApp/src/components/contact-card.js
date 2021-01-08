import { Card } from "react-bootstrap";
import ShadowCard from "./shadow-card";

const ContactCard = (props) => {
  return (
    <ShadowCard className="m-3" style={{width: "24rem"}}>
      <Card.Body className="d-flex">
        <div className="flex-start">
          <img style={{maxWidth:"4rem", maxHeight:"4rem"}} src={props.src} />
        </div>
        <div className="pl-2">
          <h3 className="m-0" style={{textAlign: "match-parent"}}>{props.type}</h3>
          <p className="m-0" style={{textAlign: "match-parent"}}>{props.contact}</p> 
        </div>
      </Card.Body>
    </ShadowCard>
  );
}

export default ContactCard;