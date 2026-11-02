import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";const a=[{preview:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",original:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600",description:"Sunrise"},{preview:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",original:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600",description:"Mountains"},{preview:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",original:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",description:"Mountain Lake"},{preview:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",original:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",description:"Beach"},{preview:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",original:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600",description:"Forest"},{preview:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",original:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600",description:"Nature"}],i=document.querySelector(".gallery"),p=a.map(({preview:o,original:e,description:s})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${s}"
          />
        </a>
      </li>
    `).join("");i.innerHTML=p;const l=new t(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,loop:!0,enableKeyboard:!0});l.on("error.simplelightbox",function(o){console.error("Ошибка загрузки изображения:",o)});
//# sourceMappingURL=1-gallery.js.map
