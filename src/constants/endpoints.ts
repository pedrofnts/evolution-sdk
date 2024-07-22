const Endpoints = {
  CREATE: "/instance/create/",
  CONNECT: "/instance/connect/",
  SEND: "/message/sendText/",
  STATUS: "/instance/connectionState/",
} as const;

export default Endpoints;
