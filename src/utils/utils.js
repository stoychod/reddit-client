export const extractGalleryImgUrl = (gallery_data, media_metadata) => {
  const id = gallery_data.items[0].media_id;
  const imgUrl = media_metadata[id].p[4].u;
  return imgUrl;
};
