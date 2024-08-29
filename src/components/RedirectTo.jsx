import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RedirectTo({ countDown, redirectPage, pageName }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(countDown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate(redirectPage);
    }
  }, [count, navigate, redirectPage]);

  return (
    <div>
      <p>
        You will be redirected to the {pageName} page in {count} seconds. If not
        redirected, click{" "}
        <a href={redirectPage} className="text-primary">
          here
        </a>
      </p>
    </div>
  );
}

export default RedirectTo;
