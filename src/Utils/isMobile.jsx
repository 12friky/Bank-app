// src/utils/isMobile.js
const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iPad|iPhone|iPod/i.test(userAgent);
};

export default isMobile;
