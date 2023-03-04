export const extractGalleryImgUrl = (metaObj) => {
  const firstMediaObject = Object.values(metaObj)[0];
  const hiResLink = firstMediaObject.s.u;
  const imgUrl = hiResLink.replace(/&amp;/g, "&");
  return imgUrl;
};
