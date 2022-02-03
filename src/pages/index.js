// import Image from "next/image";
import Header from "../commons/components/Header/Header";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(true);
  }, []);
  return (
    <div className="container-fluid p-0">
      <Header login={isLogin} />

      <main>
        <h1>BODY</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
