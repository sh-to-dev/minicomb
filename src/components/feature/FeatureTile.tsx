import * as React from "react";

type Props = {
  imgName: string,
  title: string,
  about?: string,
}

const FeatureTile = ({imgName, title, about}: Props) => {
  return (
    <div className="feature-tile">
      <div className="feature-tile-img">
        <img src={(`static/images/${imgName}.png`)} />
      </div>
      <div className="feature-tile-content">
        <span>{title}</span>
        <span>{about}</span>
      </div>
    </div>
  )
}

export default FeatureTile;