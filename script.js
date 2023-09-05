var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },

    pagination: {
      el: '.blog-slider_pagination',
      clickable: true,
    }
  });

let items=document.querySelectorAll('.item');

// 设置选中态样式
function setActive(){
    // 遍历所有.item元素，移出active样式
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    // 为当前选中项添加active样式
    this.classList.add('active');
}
// 遍历所有.item元素，分别为其设置点击事件
items.forEach((item)=>{
    item.addEventListener('click',setActive);
})

const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=> {
        panel.classList.remove('active')
    })
}