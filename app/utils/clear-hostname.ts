const clearHostname = (hostname: string) => {
  return hostname.replace(/\^\d/g, "");
};

export default clearHostname;
