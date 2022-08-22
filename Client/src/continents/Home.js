import React, { memo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import "../styles.css"

const Home = ({}) => {

  const [content, setTooltipContent] = useState("");

  const [link, setLink] = useState(<a href=""/>)


  return (
    <>

    <div className="map" data-tip="">
      <ComposableMap className="geography">
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey} 
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.continent}`);
                  }}

                  onClick={() => {
                    console.log('click')
                  }}

                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: `${geo.properties.color}`,
                      outline: "none",
                      cursor: "pointer"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
    </>
  );
};

export default memo(Home);
