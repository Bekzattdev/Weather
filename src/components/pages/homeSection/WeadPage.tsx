import scss from "./WeadPage.module.scss";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const WeadPage = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div className={scss.WeadPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.head}>
            <div ref={ref} className="keen-slider">
              <div className="keen-slider__slide number-slide1">jjj</div>
              <div className="keen-slider__slide number-slide1">jjj</div>
              <div className="keen-slider__slide number-slide1">jjj</div>
              <div className="keen-slider__slide number-slide1">jjj</div>
              <div className="keen-slider__slide number-slide1">jjj</div>
              <div className="keen-slider__slide number-slide1">jjj</div>
            </div>
          </div>
          <div className={scss.foot}>fdfd</div>
        </div>
      </div>
    </div>
  );
};

export default WeadPage;
