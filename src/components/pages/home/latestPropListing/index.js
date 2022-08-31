import "./latestPropListing.scss";
import Slider from "react-slick";
import UserAddsCard from "../../userAdds/userAddCard";
import { Container, Row, Col } from "react-bootstrap";
const LatestPropListing = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const FeaturedSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="latestPropListing">
        <Container>
          <Row>
            <Col>
              <div className="section_header">
                <h2>Latest Property Listing...</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="pb-4">
              <Slider {...FeaturedSettings}>
                {data?.map((data, id) => {
                  return <UserAddsCard />;
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default LatestPropListing;
