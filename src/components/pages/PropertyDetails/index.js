import { Row, Col } from "react-bootstrap";
import ServicesSlider from "../servicesDetails/servicesSlider";
import ImageGallery from "react-image-gallery";
import { Icon } from "@iconify/react";
const PropertyDetails = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="property py-4">
      <Row>
        <Col lg={8}>
          <ImageGallery items={images} />
          <div className="property_details_info mt-4">
            <h4>Property Details</h4>
            <div className="row justify-content-between">
              <div className="col-md-5">
                <div className="d-flex align-items-center justify-content-between">
                  <p>Price</p>
                  <h6>23,500,000</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p>Area unit</p>
                  <h6>Square Feet</h6>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-flex align-items-center justify-content-between">
                  <p>Type</p>
                  <h6>Commercial Plots</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p>Area</p>
                  <h6>1,200</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="perporty_description mt-4">
            <h4>Property Description</h4>
            <p>
              I will make the painters paint your logo/image or text on building
              wall and send this amazing image to you in high resolution
              printable jpeg image. The picture on the wall is digitally
              created. You can use this picture on your Facebook pages, website,
              blog for advertise or boost your business.
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="perporty_sale_details mt-4">
            <div className="d-flex justify-content-between">
              <h5>QAR 23,500,000</h5>
              <div>
                <Icon icon="ant-design:share-alt-outlined" /> &nbsp;&nbsp;
                <Icon icon="akar-icons:heart" />
              </div>
            </div>
            <p>1 Kanal House For Sale in zone 4 Doha </p>
            <div className="d-flex justify-content-between mt-4">
              <span>Zone 4, Doha Qatar.</span>
              <span>10 Min ago</span>
            </div>
          </div>
          <div className="perporty_saler_details mt-4">
            <h3>Contact With Seller</h3>
            <div className="perporty_saler_info pt-2 ">
              <img src="/images/cardpro.jpg" alt="seller_profile" />
              <div className="px-1">
                <h4>Person-1</h4>
                <p>Member since may 2022</p>
              </div>
            </div>
          </div>
          <div className="perporty_seller_contact mt-4">
            <div className="d-flex gap-2">
              <button className="phone_btn py-2">
                <Icon icon="carbon:phone-voice"/>
                &nbsp;&nbsp;Phone
              </button>
              <button className="whats_btn">
                <Icon icon="ant-design:whats-app-outlined" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PropertyDetails;
