import React from "react";
import type { FeatureItem } from "../types/portfolio";

interface FeaturesProps {
  data?: FeatureItem[];
}

export const Features = ({ data }: FeaturesProps): JSX.Element => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {data?.map((item, i) => (
            <div key={`${item.title}-${i}`} className="col-xs-6 col-md-3">
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )) ?? "Loading..."}
        </div>
      </div>
    </div>
  );
};
