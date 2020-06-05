import { FunctionComponent } from "react";
import utilStyles from "../styles/utils.module.css";

interface ConstellationProps {
  title: string;
}

const Constellation: FunctionComponent<ConstellationProps> = ({ title }) => {
  return (
    <canvas>
      <h2>{title}</h2>
    </canvas>
  );
};

export default Constellation;
