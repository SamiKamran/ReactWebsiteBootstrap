import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

function SidebySide({
  title,
  subTitle,
  paragraphOne,
  paragraphTwo,
  images,
  titleBtn,
  customDiv
}) {
  return (
    <div className="healthyfood">
      <Container className="mx-auto">
        <Row className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <Col xl={5} lg={10} sm={10} xs={10}>
            <div className="images">
              <img src={images} className="img-fluid" alt={title} />
            </div>
          </Col>

          <Col xl={5} lg={10} sm={10} xs={10}>
            <div className="content">
              <h1>{title}</h1>

              <p className="paragraph-one">{paragraphOne}</p>
              <p className="paragraph-two">{paragraphTwo}</p>


                  {customDiv}
              {/* <div className="d-flex ">
                <div className="imagesNow">
                  <img src={CartIcon} alt="CartIcon" />
                  <p>{paragraphFastFood}</p>
                </div>

                <div className="imagesNow">
                  <img src={CartIcon1} alt="CartIcon1" />
                </div>
                <div className="imagesNow">
                  <img src={CartIcon3} alt="CartIcon3" />
                </div>
              </div> */}

              {titleBtn && (
                <button
                  className="white-color"
                  style={{
                    borderRadius: "118px",
                    border: "3px solid #2C2F24",
                    background: "white",
                    color: "#182226",
                  }}
                >
                  {titleBtn}
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SidebySide;
