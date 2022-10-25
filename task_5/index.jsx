import { useState } from "react";

const withBlock = (Component) => {
  return ({ mouseEnterCallbak, ...otherProps }) => {
    const [isActive, setActive] = useState(false);

    const mouseEnterHandler = () => {
      setActive(true);
      mouseEnterCallbak();
    };

    return (
        <Component
            {...otherProps}
            mouseEnterHandler={mouseEnterHandler}
            className={isActive ? "active" : ""}
        />
    );
  };
};

export const Block1 = withBlock(
    ({ mouseEnterHandler, imgSrc, imgAlt, ...otherProps }) => {
      return (
          <div onMouseEnter={mouseEnterHandler} {...otherProps}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
      );
    }
);

export const Block2 = withBlock(
    ({ mouseEnterHandler, content, ...otherProps }) => {
      return (
          <div onMouseEnter={mouseEnterHandler} {...otherProps}>
            <p>{content}</p>
          </div>
      );
    }
);

export const Block3 = withBlock(
    ({ mouseEnterHandler, userData, ...otherProps }) => {
      return (
          <div onMouseEnter={mouseEnterHandler} {...otherProps}>
            <address>
              country: {userData.country}, street: {userData.street}
            </address>
          </div>
      );
    }
);