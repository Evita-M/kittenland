const global = {
  fontSize: "16px",
  radius: 3,
  radiusMd: 10,
  radiusLg: 25,
  transitionTime: "0.3s",
};

const breakpoints = {
  phoneSm: 384,
  phone: 576,
  tablet: 768,
  laptop: 992,
  largeDevices: 1200,
};

const shadows = {
  boxShadowGray: "0 0 4px 1px rgba(169, 169, 169, 0.4)",
};

const colors = {
  celadonBlue: "hsla(198, 63%, 38%, 1)",
  turquoiseGreen: "hsla(174, 100%, 41%, 1)",
  green: "hsla(131, 76%, 63%)",
  cream: "hsla(71, 100%, 87%, 1)",
  radicalPink: "hsla(338, 83%, 62%, 1)",
  white: "#ffffff",
  gray: "rgb(169, 169, 169)",
  black: "hsla(131, 0%, 10%)",
};

const mediaQueries = {
  phoneSm: `@media only screen and (max-width: ${breakpoints.phoneSm}px)`,
  phone: `@media only screen and (max-width: ${breakpoints.phone}px)`,
  tablet: `@media only screen and (max-width: ${breakpoints.tablet}px)`,
  laptop: `@media only screen and (max-width: ${breakpoints.laptop}px)`,
  largeDevices: `@media only screen and (max-width: ${breakpoints.largeDevices}px)`,
};

export { global, breakpoints, shadows, colors, mediaQueries };
