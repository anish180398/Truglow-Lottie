import * as React from "react";
import "./styles.css";
import lottie from "lottie-web";
import animationData from "./truglow.json";

const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 400));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>

        <div style={{ position: "fixed", paddingTop: '5%', width: '40%', height: '80vh', alignItems: 'end' }} ref={lottieRef}>
        </div>
      </div>

    </>


  );
};

export default LottieControl;
