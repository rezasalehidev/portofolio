import React from "react";
import type { TestimonialItem } from "../types/portfolio";

interface TestimonialsProps {
  data?: TestimonialItem[];
}

export const Testimonials = ({ data }: TestimonialsProps): JSX.Element => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {data?.map((item, i) => (
            <div key={`${item.name}-${i}`} className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="testimonial-content">
                  <p>&quot;{item.text}&quot;</p>
                  <div className="testimonial-meta">- {item.name}</div>
                </div>
              </div>
            </div>
          )) ?? "loading"}
        </div>
      </div>
    </div>
  );
};
