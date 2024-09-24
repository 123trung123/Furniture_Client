import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

export default function FeatureCard({ title, description, img }) {
  return (
    <Card style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}>
      <CardContent className="feature-card-content" style={{ flex: 1 }}>
        <Typography variant="h5" className="feature-card-title">
          {title}
        </Typography>
        <Typography variant="body1" className="feature-card-description">
          {description}
        </Typography>
        <button className="learn-more mt-5">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Shop</span>
        </button>
      </CardContent>
      <div
        className="feature-card-image"
        style={{
          backgroundImage: `url(${img})`,
          width: "90%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </Card>
  );
}
