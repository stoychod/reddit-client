export const extractGalleryImgUrl = (gallery_data, media_metadata) => {
  const id = gallery_data.items[0].media_id;
  const imgArray = media_metadata[id].p;
  // check the length of the array, do not asume hi-res images available
  const imgIndex = imgArray.length < 5 ? imgArray.length - 1 : 4;
  const imgUrl = imgArray[imgIndex].u;
  return imgUrl;
};
