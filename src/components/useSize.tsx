import { useEffect, useState } from "react";

interface UseSizeResult {
  mobile: boolean;
}

export function UseSize(): UseSizeResult {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleWindowSizeChange = (): void => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return {
    mobile,
  };
}
