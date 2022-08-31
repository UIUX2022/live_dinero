import Slider from "react-slick";
import UserAddsCard from "../userAdds/userAddCard";
const PapularPropSales = () => {
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
          slidesToShow: 3,
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
      <div className="featuredPropSale py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h2>Papular Properties For Sale </h2>
          <a>View all</a>
        </div>

        <div className="featuredPropsaleSliders">
          <Slider {...FeaturedSettings}>
            {data?.map((data, id) => {
              return <UserAddsCard key={id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default PapularPropSales;
