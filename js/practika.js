window.addEventListener("DOMContentLoaded", () => {
    const tabcontent = document.querySelectorAll('.tabcontent'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabParent = document.querySelector('.tabheader__items'),
    slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    current = document.querySelector('#current'),
    total=document.querySelector('#total')
    //==========================================TAB========================================
    function hide() {
        tabcontent.forEach(item => {
            item.style.display="none"
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }
    function show(i=0) {
        tabcontent[i].style.display = "block"
        tabs[i].classList.add('tabheader__item_active')
    }
    hide()
    show()
    tabParent.addEventListener('click', (event) => {
        tabs.forEach((item,i) => {
            if (event.target === item) {
                hide()
                show(i)
            }
        })
    })
    //==========================================SLIDER========================================
    total.textContent = `${slides.length}`
    let index = 1
    shows(index)
    function shows(a) {
        if (index > slides.length) {
            index=1
        }
        if (index < 1) {
            index=slides.length
        }
        slides.forEach(item => {
            item.style.display="none"
        })
        slides[index - 1].style.display = "block"
        if (slides.length >= 10) {
            current.textContent=`${index}`
        } else {
            current.textContent=`0${index}`
        }
    }
    next.addEventListener('click', () => {
        shows(index++)
    })
    prev.addEventListener('click', () => {
        shows(index--)
    })
    //==========================================BANNER========================================
    class Banner{
        constructor(img, model, opisanie, price, mesto, style) {
            this.img = img
            this.model = model
            this.opisanie = opisanie
            this.price = price
            this.mesto = document.querySelector(mesto)
        }
        render() {
            const dv=document.createElement('div')
            dv.innerHTML = `
            <div class="menu__item" style="position: relative; left: -200px;">
            <img src="img/tabs/${this.img}.jpg" alt="vegy" />
            <h3 class="menu__item-subtitle">${this.model}</h3>
            <div class="menu__item-descr">
            ${this.opisanie}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Price:</div>
            <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>
        </div>
            `
            this.mesto.append(dv)
        }
    }
    new Banner(
        `6`,
        `Кадилак`,
        `Джип`,
        `27000.00`,
        `.menu .container`,
    ).render()
    new Banner(
        `6`,
        `Кадилак`,
        `Джип`,
        `27000.00`,
        `.menu .container`,
    ).render()
    new Banner(
        `6`,
        `Кадилак`,
        `Джип`,
        `27000.00`,
        `.menu .container`,
    ).render()
    new Banner(
        `6`,
        `Кадилак`,
        `Джип`,
        `27000.00`,
        `.menu .container`,
    ).render()
    new Banner(
        `6`,
        `Кадилак`,
        `Джип`,
        `27000.00`,
        `.menu .container`,
    ).render()
    //==========================================TIMER========================================
    const d = document.querySelector('#days')
    const h=document.querySelector('#hours')
    const m=document.querySelector('#minutes')
    const s = document.querySelector('#seconds')
    let dt=new Date('01.22.2022')
    function tm() {
        let now = new Date();
        gap = dt - now;
        let  days = Math.floor(gap / (1000 * 60 * 60 * 24)),
            seconds = Math.floor((gap / 1000) % 60),
            minutes = Math.floor((gap / 1000 / 60) % 60),
            hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        if (gap < 0) {
            d.textContent = "00"
            h.textContent = "00"
            m.textContent = "00"
            s.textContent = "00"
            document.querySelector('#akcia').textContent = "Конец акции!!"
        } else {
            d.textContent = days
            h.textContent = hours
            m.textContent = minutes
            s.textContent = seconds
        }
        
    }
    tm()
    setInterval(tm, 100)
    



























})