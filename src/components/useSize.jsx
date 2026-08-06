import { useEffect, useState } from "react";

export function UseSize() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return {
    mobile,
  };
}
