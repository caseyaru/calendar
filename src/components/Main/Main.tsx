import React, { useState } from "react";
import "./Main.css";

// из расчёта, что данные на выбор будут любыми, оставляю тип any
const TEXT: any = "hello world";

type Color = "gray" | "yellow" | "green";

const Main = () => {
  const [position, setPosition] = useState<Color | null>(null);

  const handleSelect = (color: Color) => {
    setPosition(color);
  };

  return (
    <section className="Main">
      {position ? (
        <div style={{ color: position }}>
          {position === "gray" && <p className="main__text">{TEXT}</p>}
          {position === "yellow" && <p className="main__text">{TEXT}</p>}
          {position === "green" && <p className="main__text">{TEXT}</p>}
        </div>
      ) : (
        <div className="main__block">
          <p
            style={{ color: "gray" }}
            className="main__text"
            onClick={() => handleSelect("gray")}
          >
            {TEXT}
          </p>
          <p
            style={{ color: "yellow" }}
            className="main__text"
            onClick={() => handleSelect("yellow")}
          >
            {TEXT}
          </p>
          <p
            style={{ color: "green" }}
            className="main__text"
            onClick={() => handleSelect("green")}
          >
            {TEXT}
          </p>
        </div>
      )}
    </section>
  );
};

export default Main;
