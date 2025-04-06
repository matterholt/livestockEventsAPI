const rules = {
  livestock_read: {
    allowedReadRoutes: ["livestock"],
  },
};

export const permissionScope = [
  {
    name: "consumerGest",
    prefix: "your123",
    permissions: ["livestock_read"],
    validApiKey: "your1234-api-key-1",
  },
  {
    name: "main",
    permissions: ["read", "write"],
    prefix: "your5678",
    validApiKey: "your5678-api-key-2",
  },
  {
    name: "testing",
    permissions: ["read", "write"],
    prefix: "testYour",
    validApiKey: "testYour-api-key-XX",
  },
];
