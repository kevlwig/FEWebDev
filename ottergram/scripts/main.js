var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_SELECTOR = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;


function setDetail(imageUrl, titleText){
  'use strict';
  var detailImg = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImg.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
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
    showDetails();
  });
}
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function hiddenDetails(){
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_SELECTOR);
}
function showDetails(){
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_SELECTOR);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function(){
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);

}
function addKeyPressHandler(){
  'user strict';
  document.body.addEventListener('keyup', function(e){
    e.preventDefault();
    if(e.keyCode === ESC_KEY){
      hiddenDetails();
    }
  });
}
function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach((thumbnail, i) => {
    addThumbnailClickHandler(thumbnail);
  });
  addKeyPressHandler();

}


//initialize Events
initializeEvents();
