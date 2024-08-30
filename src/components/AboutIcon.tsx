import React from "react";

interface Props {
  icon: string;
  width: number;
  height: number;
  label: string;
  description: string;
}

export const AboutIcon: React.FC<Props> = ({
  icon,
  width,
  height,
  label,
  description,
}) => {
  return (
    <>
      <div>
        <img src={icon} width={width} height={height} alt="imagen" />
      </div>
      <div>
        <p className="text-legalify-blue font-medium">{label}</p>
        <p className="text-legalify-grey text-xs mt-1">{description}</p>
      </div>
    </>
  );
};
