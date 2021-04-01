// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { withRouter } from "react-router-dom";

// Import Swiper styles
import "./index.less";
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "swiper/components/scrollbar/scrollbar.less";
import GangLg from "src/images/gang-m.png";
import ChangeLg from "src/images/chang-md.png";
import FengLg from "src/images/feng-m.png";

// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
]);

export default withRouter(({ history }) => {
  const [actived, setActived] = useState(0);

  useEffect(() => {
    // const imgList = document.getElementsByClassName("swiper-slide");
    // let currentIndex = null;
    // const arrList = Array.from(imgList);
    // arrList.forEach((item, index) => {
    //   if (item.classList.contains("swiper-slide-active")) {
    //     currentIndex = index;
    //   } else if (currentIndex && currentIndex + 3 === index) {
    //     item.classList.add("pre-cover");
    //   } else {
    //     item.classList.remove("pre-cover");
    //     // item.childNodes[0]?.classList?.remove("pre-cover");
    //   }
    // });
    // if (actived >= 0 && arrList[actived - 1]) {
    //   arrList[actived - 1].classList.add("pre-cover");
    // }
  }, [actived]);
  return (
    <Swiper
      className="swiper-container"
      spaceBetween={30}
      slidesPerView={3}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(value) => {
        setActived(value.activeIndex);
      }}
      effect="coverflow"
      autoplay={{
        delay: 10000,
      }}
    >
      {/* <div className="slide-bg">
        <a className="device-list">
          <img src={GangLg} />
          <span>钢铁</span>
          <div>
            钢铁工业是资源密集型产业，多年来钢铁工业的能耗约占全国能源消费的
            10%。而炼
            钢工序能耗是钢铁工业能耗中的一个重要组成部分，高效管控好煤气和电的能源消耗，对指导生产具有重要意义
          </div>
        </a>
      </div> */}
      <SwiperSlide>
        <a className="device-list" onClick={() => history.push("/gang")}>
          <img src={GangLg} />
          <span>钢铁</span>
          <div>
            钢铁工业是资源密集型产业，多年来钢铁工业的能耗约占全国能源消费的
            10%。而炼
            钢工序能耗是钢铁工业能耗中的一个重要组成部分，高效管控好煤气和电的能源消耗，对指导生产具有重要意义
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a onClick={() => history.push("/feng")} className="device-list">
          <img src={FengLg} />

          <span>风电</span>
          <div>
            风电损失原因与维度众多，一旦故障停机，每日由于发电损失所造成的损失达2-4万元（4MW风机），此外风机维修和维护成本也相对高昂，如何提升故障预警提前量并降低被动停机时长，将能大大提升发电效率。
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a onClick={() => history.push("/chang")} className="device-list">
          <img src={ChangeLg} />
          <span>SMT制造</span>
          <div>
            风机、空气压缩机等设备被大量应用于SMT制造中，是生产过程中最主要的耗能设备。目前设备的能耗管理主要依靠现场操作人员，容易错失故障处理的最佳时间，亟待提高管理效率以优化。
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="device-list" onClick={() => history.push("/gang")}>
          <img src={GangLg} />
          <span>钢铁</span>
          <div>
            钢铁工业是资源密集型产业，多年来钢铁工业的能耗约占全国能源消费的
            10%。而炼
            钢工序能耗是钢铁工业能耗中的一个重要组成部分，高效管控好煤气和电的能源消耗，对指导生产具有重要意义
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a onClick={() => history.push("/feng")} className="device-list">
          <img src={FengLg} />

          <span>风电</span>
          <div>
            风电损失原因与维度众多，一旦故障停机，每日由于发电损失所造成的损失达2-4万元（4MW风机），此外风机维修和维护成本也相对高昂，如何提升故障预警提前量并降低被动停机时长，将能大大提升发电效率。
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a onClick={() => history.push("/chang")} className="device-list">
          <img src={ChangeLg} />
          <span>SMT制造</span>
          <div>
            风机、空气压缩机等设备被大量应用于SMT制造中，是生产过程中最主要的耗能设备。目前设备的能耗管理主要依靠现场操作人员，容易错失故障处理的最佳时间，亟待提高管理效率以优化。
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="device-list" onClick={() => history.push("/gang")}>
          <img src={GangLg} />
          <span>钢铁</span>
          <div>
            钢铁工业是资源密集型产业，多年来钢铁工业的能耗约占全国能源消费的
            10%。而炼
            钢工序能耗是钢铁工业能耗中的一个重要组成部分，高效管控好煤气和电的能源消耗，对指导生产具有重要意义
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a onClick={() => history.push("/feng")} className="device-list">
          <img src={FengLg} />

          <span>风电</span>
          <div>
            风电损失原因与维度众多，一旦故障停机，每日由于发电损失所造成的损失达2-4万元（4MW风机），此外风机维修和维护成本也相对高昂，如何提升故障预警提前量并降低被动停机时长，将能大大提升发电效率。
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a onClick={() => history.push("/chang")} className="device-list">
          <img src={ChangeLg} />
          <span>SMT制造</span>
          <div>
            风机、空气压缩机等设备被大量应用于SMT制造中，是生产过程中最主要的耗能设备。目前设备的能耗管理主要依靠现场操作人员，容易错失故障处理的最佳时间，亟待提高管理效率以优化。
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
});
