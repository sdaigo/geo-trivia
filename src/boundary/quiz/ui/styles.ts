import { css } from "@/styled-system/css";

export const title = css({
  fontSize: "2xl",
  fontWeight: "bold",
  mb: 4,
});

export const button = css({
  bg: "slate.800",
  color: "white",
  px: 4,
  py: 1,
  borderRadius: "md",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "slate.900",
  },
});

export const card = css({
  my: 8,
});

export const question = css({
  my: 8,
  fontSize: "4xl",
  fontWeight: "medium",
  color: "slate.700",
  lineHeight: "relaxed",
});

export const choices = css({
  margin: 0,
  padding: 0,

  "& li": {
    mb: 2,
  },
});

export const choice = css({
  bg: "slate.200",
  px: 2,
  py: 1,
  borderRadius: "md",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  _hover: {
    bg: "slate.400",
    color: "slate.900",
  },
});
