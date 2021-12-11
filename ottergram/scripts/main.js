var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
var DETAIL__TITLE_SELECTOR = '[data-image-role="title"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

function setDetail(imageUrl, titleText){
  'use strict';
  var detailImg = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImg.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL__TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}
function imageFromThumbnail(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}
function titleFromThumbnail(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}
function setDetailFromThumbnail(thumbnail){
  'use strict';
  setDetail(imageFromThumbnail(thumbnail), titleFromThumbnail(thumbnail));
}
function addThumbnailClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click', function(e){
    e.preventDefault();
    setDetailFromThumbnail(thumb);
  });
}
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach((thumbnail, i) => {
    addThumbnailClickHandler(thumbnail);
  });

}


//initialize Events
initializeEvents();
