import React from "react";
import style from "./HomeMiddle.module.css";
import { ImageBox, InfoBox } from "./data";
import { TiAdjustBrightness } from "react-icons/ti";
export const HomeMiddle = () => {
  return (
    <div className={style.container}>
      {InfoBox.map((item,i) => (
        <div className={style.container_left} key={item.id}>
          <div>
            <p className={style.uk_fonthead}>{item.headline}</p>
          </div>
          <div className={style.uk_card}>
            <div className={style.uk_img}>
              <img src={item.img1} alt=" " />
              <p>{item.text1}</p>
            </div>
            <div className={style.uk_img}>
              <img src={item.img2} alt=" " />
              <p>{item.text2}</p>
            </div>
            <div className={style.uk_img}>
              <img src={item.img3} alt=" " />
              <p>{item.text3}</p>
            </div>
            <div className={style.uk_img}>
              <img src={item.img4} alt=" " />
              <p>{item.text4}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={style.container_right}>
        {ImageBox.map((item) => (
          <div className={style.image_grid} key={item.id}>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16719/photo_1024/d5a88236f1a011e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline1}</h4>
                <p>{item.subtext1}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16047/photo_1024/0a38bc6ef3d611e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline2}</h4>
                <p>{item.subtext2}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16720/photo_1024/3a17e0ebf71b11e992500a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline3}</h4>
                <p>{item.subtext3}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16721/photo_1024/a85131caf1a511e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline4}</h4>
                <p>{item.subtext4}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86936f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline5}</h4>
                <p>{item.subtext5}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16723/photo_1024/14650812f1a811e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline6}</h4>
                <p>{item.subtext6}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline7}</h4>
                <p>{item.subtext7}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16725/photo_1024/cc19e8ccf70e11e992500a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline8}</h4>
                <p>{item.subtext8}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16726/photo_1024/213f117ff1a711e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline9}</h4>
                <p>{item.subtext9}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16727/photo_1024/92a02d4af1a511e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline10}</h4>
                <p>{item.subtext10}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16728/photo_1024/de6bc87af1a411e9924e0a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline11}</h4>
                <p>{item.subtext11}</p>
              </div>
            </div>
            <div
              className={style.head_box}
              style={{
                backgroundImage: `url("https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16729/photo_1024/58bf80c4f70b11e992500a8e1b1ce4da_photo_1024.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div style={{ padding: 40 }}>
                <h4>{item.headline12}</h4>
                <p>{item.subtext12}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
