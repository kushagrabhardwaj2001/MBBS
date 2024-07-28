import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import img from "./whatsapp.png"
const WhatsApp = () => {
  const [springProps, set] = useSpring(() => ({
    loop: { reverse: true },
    from: { transform: "scale(1.2)", filter: "brightness(1.6)" },
    to: { transform: "scale(1)", filter: "brightness(1)" },
    config: { duration: 4000 },
  }));
  useEffect(() => {
    const intervalId = setInterval(() => {
      set({ loop: true });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [set]);
  return (
    <Flex flexDirection={"column"} gap={3}>
      <a
        href="https://api.whatsapp.com/send/?phone=+91-9873560704&text=hello"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "26px",
          right: "30px",
          zIndex: "9999",

        }}
      >
        <animated.img
          src={img}
          alt="Bling Image"
          style={{
            ...springProps,
            width: "120px",
            height: "auto",
            cursor: "pointer",
          }}
        />
      </a>
    </Flex>
  );
};

export default WhatsApp;
