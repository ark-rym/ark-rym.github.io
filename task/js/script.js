
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  const height = window.innerHeight

  if (width < 768){
    const swiper = new Swiper('.swiper', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      // slidesPerView: 1.15,
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 16,

    })
  }  else {
      // for (var i = 6; i< slidesList.length; i++) {
      //   slidesList[i].classList.add('slide-hidden')
      //   if (width >= 1120 ){
      //     slidesList[6].classList.remove('slide-hidden')
      //     slidesList[7].classList.remove('slide-hidden')
      //     console.log('yes')
      //   }
      // }
      // console.log(slidesList)

      var slider = document.querySelector('.brends-slider');
      var sliderInner = document.querySelector('.brends-slider__wrapper')
      var buttonOpen = document.querySelector('.info__read-more-button')
      var slidesList = document.querySelectorAll('.brends-slider__slide');

      var nElementsInRow = 3
      var sliderInnerPadding = 24
      if (width > 1120) {
        nElementsInRow = 4
        sliderInnerPadding = 32
      }

      buttonOpen.addEventListener('click', function (evt) { 
        evt.preventDefault()
        if (buttonOpen.value == 'Скрыть') {
          buttonOpen.value = 'Показать все'
          var x = 160
          sliderInner.style.height = x + "px"
          document.querySelector('.info__read-more-image').style.transform = 'rotate(0)';
        } else {
          var x = (slidesList.length * (72 + 16) - 16 + sliderInnerPadding * 2) / nElementsInRow
          sliderInner.style.height = x + "px"
          buttonOpen.value = 'Скрыть'
          document.querySelector('.info__read-more-image').style.transform = 'rotate(180deg)';
        }
      });
    }
})

// brends-slider__wrapper



  // var popup = document.querySelector('.popup')

  // var buttonShow = document.querySelector('.button-show')
  // buttonShow.addEventListener('click', function (evt) {
  //   evt.preventDefault()
  //   popup.classList.add('popup--open')
  // })
  
  // var buttonHide = document.querySelector('.button-hide')
  // buttonHide.addEventListener('click', function () {
  //   popup.classList.remove('popup--open')
  // })
  
  // document.addEventListener('keydown', function (evt) {
  //   if (evt.keyCode == 27) {
  //     popup.classList.remove('popup--open')
  //   }
  // })


  // <section class="card">
  //     <h2 class="card__title">Зайчик-попрыгайчик</h2>
  //     <img class="card__img" src="mishka/rabbit.jpg" width="" height="" alt="Зайчик-попрыгайчик">
  //     <p class="card__text">Рост 30 см, вес 200 г</p>
  //     <p><a class="card__button button-show" href="popup.html">Показать подробности</a></p>
  //   </section>

  //   <section class="popup">
  //     <div class="popup__content">
  //       <h2 class="visually-hidden">Подробности о товаре</h2>
  //       <ul class="features">
  //         <li class="feature feature--eco">
  //           <p>Экологически чистые материалы</p>
  //         </li>
  //         <li class="feature feature--handmade">
  //           <p>Связано вручную с любовью и умилением</p>
  //         </li>
  //         <li class="feature feature--gift">
  //           <p>Поставляется в подарочной упаковке</p>
  //         </li>
  //         <li class="feature feature--like">
  //           <p>Увеличивает лайки на фотографиях</p>
  //         </li>
  //       </ul>
  //       <button class="popup__button button-hide" type="button">Закрыть</button>
  //     </div>
  //   </section>
