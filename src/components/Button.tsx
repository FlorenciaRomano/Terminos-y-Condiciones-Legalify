import React, { useEffect, useState } from "react";

interface Props {
  label: string;
  paramQuery?: string;
}

export const Button: React.FC<Props> = ({ label, paramQuery }) => {

  const [appendUrlQuery, setAppendUrlQuery] = useState("");

  useEffect(() => {
    if (!paramQuery)
      paramQuery = "";
    setAppendUrlQuery(paramQuery);
  }, []);

  return (
    <button
      className="px-6 py-2.5 rounded-lg text-[13.55px] md:text-lg bg-legalify-primary text-white hover:bg-legalify-secondary hover:text-legalify-primary "
      onClick={() =>
        (window.location.href = `${process.env.NEXT_PUBLIC_URL_APP}/login${appendUrlQuery}`)
      }
    >
      <p className="font-medium">{label}</p>
    </button>
  );
};
