const Card = {
  baseStyle: {
    p: "22px",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(120px)",
    width: "100%",
    borderRadius: "20px",
    bg:
      // "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
      // "linear-gradient(127.09deg, rgba(20, 20, 20, 1) 19.41%, #f5f5f5 76.65%)"
      "linear-gradient(127.09deg, 19.41%, #fff 76.65%)"
,
    backgroundClip: "border-box",
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
