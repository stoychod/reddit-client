export const extractGalleryImgUrl = (gallery_data, media_metadata) => {
  const id = gallery_data.items[0].media_id;
  const imgArray = media_metadata[id].p;
  // check the length of the array, do not asume hi-res images available
  const imgIndex = imgArray.length < 5 ? imgArray.length - 1 : 4;
  const imgUrl = imgArray[imgIndex].u;
  return imgUrl;
};

// JavaScript convert numbers to K M B. Format a number thousand or more 1K
// https://www.html-code-generator.com/javascript/shorten-long-numbers

export const formatNumber = (num) => {
  num = num.toString().replace(/[^0-9.]/g, "");
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: "k" },
    { v: 1e6, s: "m" },
    // { v: 1e9, s: "B" },
    // { v: 1e12, s: "T" },
    // { v: 1e15, s: "P" },
    // { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
};

// generate a random value between two numbers min and max included
// https://stackoverflow.com/a/7228322

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// a simple throttle implementation
// https://stackoverflow.com/questions/27078285/simple-throttle-in-javascript
export const throttle = (callback, limit) => {
  let waiting = false; // Initially, we're not waiting
  return function () {
    // We return a throttled function
    if (!waiting) {
      // If we're not waiting
      callback.apply(this, arguments); // Execute users function
      waiting = true; // Prevent future invocations
      setTimeout(function () {
        // After a period of time
        waiting = false; // And allow future invocations
      }, limit);
    }
  };
};

// a simple debounce function
// https://www.freecodecamp.org/news/javascript-debounce-example/
export const debounce = (func, timeout = 250) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
