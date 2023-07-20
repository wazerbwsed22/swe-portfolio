import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, extra, link}) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />

        <div className="proj-txtx">
        <button onClick={handleButtonClick}> <ArrowRightCircle size={45} /></button>

          <h4>{title}</h4>
          <h4>{description}</h4>
          <p>{extra}</p>
          

        </div>
      </div>
    </Col>
  )
}