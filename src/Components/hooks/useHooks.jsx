import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]); // Initialize menu as an empty array
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setLoading(true);
      });
  }, []);
  return [menu, loading];
};
export default useMenu;
