import { Box, Heading, Img, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import styles from "./Corousel.module.css";

const Corousel = ({ props }) => {
  const [type, setType] = useState();

  useEffect(() => {
    if (props.heading == "Goa Holiday Homes") {
      setType("Villa");
    } else {
      setType("Apartment");
    }
  }, []);

  console.log(props.heading);

  // ----------Slider Responsiveness Setting-----------------
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className={styles.heading}>{props.heading}</h1>

      <Box className={styles.slider_box}>

        {/* --------------Slider for Corosoule----------- */}
        <Slider className="Slider-Hotels" {...settings}>
          {/* ---------------Map Hotels data in to Slider ----------- */}
          {props.data.map((el) => {
            if (el.property_type == type) {                     //If property type of data == type then data Show in to UI
              if (el.state_slug == "goa-11") {                 //Showing Goa Hotels only
                return (
                  <Box>
                    <Img className={styles.slider_image}
                      
                      src={el.images_large[1]}
                    ></Img>

                    <Text className={styles.slider_title} >
                      {el.title}
                    </Text>
                    
                    <Text className={styles.slider_location}>
                      {el.city}, {el.state_slug}, {el.country}
                    </Text>
                    <Box className={styles.slider_properties}>
                      {el.prop_tags.map((pt) => {
                        return (
                          <Text className={styles.slider_properties_text} >
                            {pt} |{" "}
                          </Text>
                        );
                      })}
                    </Box>

                    <Text className={styles.slider_price}>
                    ₹ {el.starting_price_in_usd} Per night
                    </Text>
                  </Box>
                );
              }
            }
          })}
        </Slider>
      </Box>
    </div>
  );
};

export default Corousel;
