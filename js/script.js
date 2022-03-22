window.addEventListener("DOMContentLoaded", () => {

   // Loader ------->
   const loader = document.querySelector('.loader');
   setTimeout(() => {
      loader.style.opacity = 0
      setTimeout(() => {
         loader.style.display = "none"
      }, 0)
   }, 0);



   // Tabs -------->

   const tabcontent = document.querySelectorAll('.tabcontent'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabsParent = document.querySelector('.tabheader__items');

   function hideContentHendler() {
      tabcontent.forEach(item => {
         item.style.display = "none"
      });
      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      })
   }
   function showContentHendler(i = 0) {
      tabcontent[i].style.display = "block"
      tabs[i].classList.add('tabheader__item_active')
   }
   hideContentHendler()
   showContentHendler()

   tabsParent.addEventListener('click', (event) => {
      console.log(event.target);
      tabs.forEach((item, i) => {
         if (event.target == item) {
            console.log(item);
            hideContentHendler()
            showContentHendler(i)
         }
      })
   })

   // Modal--------------->
   // const btns = document.querySelectorAll("[data-btn]"),
   //    modal = document.querySelector('.modal'),
   //    closeModalBtn = document.querySelector('.modal__close');

   // const timer = setTimeout(openModal, 5000)

   // btns.forEach(btn => {
   //    btn.addEventListener('click', openModal)
   // });

   // closeModalBtn.addEventListener('click', hideModal);

   // modal.addEventListener('click', (e) => {
   //    if(e.target === modal) {
   //       hideModal()
   //    }
   // })
   // function openModal() {
   //    modal.classList.remove('hide')
   //    modal.classList.add('show');
   //    document.body.style.overflow = "hidden"
   //    clearInterval(timer)
   // }
   // function hideModal() {
   //    modal.classList.remove('show');
   //    modal.classList.add('hide');
   //    document.body.style.overflow = ""
   // }


   // Class------------------>
   class Car {
      constructor(title, src, disc, price, parent) {
         this.title = title;
         this.src = src;
         this.disc = disc;
         this.price = price;
         this.parent = document.querySelector(parent)
      }
      render() {
         const elemInner = document.createElement('div');

         elemInner.innerHTML = `
         <div class = "menu__item" >
         <img src=${this.src} alt="vegy" />
         <h3 class="menu__item-subtitle">${this.title}</h3>
         <div class="menu__item-descr">
         ${this.disc}
         </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Price:</div>
            <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>
         </div>
         `
         this.parent.append(elemInner)
      }
   }

   new Car(
      '2021 Mercedes-Benz C-Class',
      'img/tabs/1.jpg',
      `The 2021 Mercedes-Benz C-Class finishes in the top half of our
      luxury small car rankings. It's powerful and upscale, but it has
      so-so handli...`,
      '199.000',
      ".menu .container"
   ).render();
   new Car(
      '2021 Mercedes-Benz C-Class',
      'img/tabs/2.jpg',
      `The 2021 Mercedes-Benz C-Class finishes in the top half of our
      luxury small car rankings. It's powerful and upscale, but it has
      so-so handli...`,
      '199.000',
      ".menu .container"
   ).render();
   new Car(
      '2021 Mercedes-Benz C-Class',
      'img/tabs/3.jpg',
      `The 2021 Mercedes-Benz C-Class finishes in the top half of our
      luxury small car rankings. It's powerful and upscale, but it has
      so-so handli...`,
      '199.000',
      ".menu .container"
   ).render();

   // Easy Slider
      const slides = document.querySelectorAll('.offer__slide'),
         prev = document.querySelector('.offer__slider-prev'),
         next = document.querySelector('.offer__slider-next'),
         current = document.querySelector('#current');
      
      let slideIndex = 1;
      show(slideIndex);

      function show(s) {
         if(slideIndex > slides.length) {
            slideIndex = 1
         }
         if(slideIndex < 1) {
            slideIndex = slides.length
         }
         slides.forEach(item => {
            item.style.display = "none"
         });
         slides[slideIndex - 1].style.display = "block";
         if(slides.length < 10){
            current.textContent = `0${slideIndex}`
         }else {
            current.textContent = `${slideIndex}`
         }
      }

      next.addEventListener('click', () => {
         show(slideIndex += 1)
      });
      prev.addEventListener('click', () => {
         show(slideIndex--)
      })

   // Data
      let deadline = "05.15.2022";

      // Vaqt hisoblash uchun Func
      function getTime(endtime) {
         let timer = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(timer / (1000 * 60 * 60 * 24)),
            seconds = Math.floor((timer / 1000) % 60),
            minutes = Math.floor((timer / 1000 / 60) % 60),
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
         return {
            timer: timer,
            days: days,
            seconds: seconds,
            minutes: minutes,
            hours: hours
         }
      }
      function withNol(number) {
         if(number < 10) {
            return number = `0${number}`
         }else {
            return number
         }
      }
      // Vaqtni ekranga chiqarish uchun Func
      function setTime(deadline1) {
         const daysEkran = document.querySelector('#days'),
            hoursEkran = document.querySelector('#hours'),
            minutesEkran = document.querySelector('#minutes'),
            secondsEkran = document.querySelector('#seconds');

            
            setInterval(() => {
               daysEkran.textContent = getTime(deadline1).days // 150
               hoursEkran.textContent = withNol(getTime(deadline1).hours) // 4
               minutesEkran.textContent = getTime(deadline1).minutes
               secondsEkran.textContent = getTime(deadline1).seconds
            }, 100)
      }

   setTime(deadline)





























   // const next = document.querySelector('.offer__slider-next'),
   //    prev = document.querySelector('.offer__slider-prev'),
   //    slides = document.querySelectorAll('.offer__slide'),
   //    current = document.querySelector('#current');





















   // let slideIndex = 1;

   // showSlide(slideIndex);

   // function showSlide(s) {
   //    if( s < 1 ) {
   //       slideIndex = slides.length;
   //    }
   //    if( s > slides.length ) {
   //       slideIndex = 1;
   //    }
   //    slides.forEach(item => {
   //       item.style.display = 'none';
   //    })
   //    slides[slideIndex-1].style.display = "block";
   //    if (slideIndex < 5) {
   //       current.textContent = `0${slideIndex}`
   //    } else {
   //       current.textContent = slideIndex
   //    }
   // }

   // function sliderPlus() {
   //    showSlide(slideIndex = slideIndex + 1);
   // }
   // function sliderMinus() {
   //    showSlide(slideIndex = slideIndex - 1);
   // }
   // next.addEventListener('click', () => {
   //    sliderPlus(1);
   // })
   // prev.addEventListener('click', () => {
   //    sliderMinus(1);
   // })

   // // Data
   // const dedline = "06.06.2022";

   // // Vaqtni olishimiz uchun funksiya
   // function getTime(endtime) {
   //    const total = Date.parse(endtime) - Date.parse(new Date()),
   //       days = Math.floor(total / (1000 * 60 * 60 * 24)),
   //       seconds = Math.floor((total / 1000) % 60),
   //       minutes = Math.floor((total / 1000 / 60) % 60),
   //       hours = Math.floor((total / (1000 * 60 * 60)) % 24);
   //    return {
   //       total: total,
   //       days: days,
   //       hours: hours,
   //       minutes: minutes,
   //       seconds: seconds,
   //    }
   // }

   // // Vaqtni ekranda hosil qilishimiz uchun funksiya
   // function setClock(endtime) {
   //    const timer = document.querySelector(".timer"),
   //       days = timer.querySelector("#days"),
   //       hours = timer.querySelector("#hours"),
   //       minutes = timer.querySelector("#minutes"),
   //       seconds = timer.querySelector("#seconds"),
   //       clock = setInterval(updateClock, 100);

   //    updateClock(endtime);

   //    function updateClock() {
   //       const time = getTime(endtime);
   //       days.innerHTML = time.days;
   //       hours.innerHTML = time.hours;
   //       minutes.innerHTML = time.minutes;
   //       seconds.innerHTML = time.seconds;
         
   //       // vaqt tugashi bn interval tugashi uchun
   //       if (time.total <= 0) {
   //          clearInterval(timeInterval);
   //       }
   //    }
   // }
   // setClock(dedline)
})

