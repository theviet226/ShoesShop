import React, { useRef } from "react";

import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import css from "./home-carousel.module.scss";
import PrevIcon from "src/assets/icons/prev.icon";
import NextIcon from "src/assets/icons/next.icon";
// type Props = {
//   data: TCard[];
// };



const HomeCarousel: React.FC = () => {


  const refCarousel = useRef<CarouselRef>(null);

  const hanldeNext = () => {
    refCarousel.current?.next();
  };
  const hanldePrev = () => {
    refCarousel.current?.prev();
  };

  return (
    <>
      <button className={css["button-Prev"]} onClick={hanldePrev}>
        <PrevIcon />
      </button>
      <button className={css["button-Next"]} onClick={hanldeNext}>
        <NextIcon />
      </button>
      <Carousel
        ref={refCarousel}
        autoplay

        className={css["carousel-main"]}
      >
        <div className={css["inf-home"]}>
          <div className={css["title-carousel"]}>
            <div>
              <img
                src="/src/assets/images/adidas-prophere-black-white.png"
                className={css["img-left"]}
              />
            </div>
            <div className={css["carousel-right"]}>
              <p className={css["name-right"]}>Adidas Prophere Black White</p>
              <p className={css["text-right"]}>
                The adidas Primeknit upper wraps the foot with a supportive fit
                that enhances movement.
              </p>
              <a className={css["carousel-button"]} href="http://localhost:5173/detail/2">Buy</a>
            </div>
          </div>
        </div>
        <div className={css["inf-home"]}>
          <div className={css["title-carousel"]}>
            <div>
              <img
                src="/src/assets/images/adidas-prophere-customize.png"
                className={css["img-left"]}
              />
            </div>
            <div className={css["carousel-right"]}>
              <p className={css["name-right"]}>Adidas Prophere Customize</p>
              <p className={css["text-right"]}>
                The adidas Primeknit upper wraps the foot with a supportive fit
                that enhances movement.
              </p>
              <a className={css["carousel-button"]} href="http://localhost:5173/detail/3">Buy</a>
            </div>
          </div>
        </div>
        <div className={css["inf-home"]}>
          <div className={css["title-carousel"]}>
            <div>
              <img
                src="/src/assets/images/adidas-prophere.png"
                className={css["img-left"]}
              />
            </div>
            <div className={css["carousel-right"]}>
              <p className={css["name-right"]}>Adidas Prophere</p>
              <p className={css["text-right"]}>
                The adidas Primeknit upper wraps the foot with a supportive fit
                that enhances movement.
              </p>
              <a className={css["carousel-button"]} href="http://localhost:5173/detail/1">Buy</a>
            </div>
          </div>
        </div>
        <div className={css["inf-home"]}>
          <div className={css["title-carousel"]}>
            <div>
              <img
                src="/src/assets/images/adidas-super-star-red.png"
                className={css["img-left"]}
              />
            </div>
            <div className={css["carousel-right"]}>
              <p className={css["name-right"]}>Adidas Super Star Red</p>
              <p className={css["text-right"]}>
                The adidas Primeknit upper wraps the foot with a supportive fit
                that enhances movement.
              </p>
              <a className={css["carousel-button"]} href="http://localhost:5173/detail/4">Buy</a>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
