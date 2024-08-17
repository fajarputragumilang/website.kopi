const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');
// =========================================
// Footer ==================================
const tombolcoffe = document.querySelector('#tombolcoffe');
const footer1 = document.querySelector('#footer1');
const up1 = document.querySelector('#up1');
const bungkus1 = document.querySelector('#bungkus1');
// ======================================
const tombol2 =  document.querySelector('#tombol2');
const footer2 = document.querySelector('#footer2');
const up2 = document.querySelector('#up2');
const bungkus2 = document.querySelector("#bungkus2");
// =======================================
const tombol3 = document.querySelector('#tombol3');
const footer3 = document.querySelector('#footer3')
const up3 = document.querySelector('#up3');
const bungkus3 = document.querySelector("#bungkus3");
// ==========================================

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('hamburger-active');
    hamburger.classList.toggle('bounce');

});

document.addEventListener('click', function (e) {
    if (e.target.closest('#hamburger') != e.target.closest('#navbar')) return ;
    navbar.classList.add('hidden');
    hamburger.classList.remove('hamburger-active');
    hamburger.classList.remove('bounce')
})

tombolcoffe.addEventListener( 'click', function () {
    footer1.classList.toggle('hidden');
    tombolcoffe.classList.add('hidden');
    up1.style.display = 'block';
    bungkus1.style.border = 'none';
    footer1.classList.add('border-b-[1px]');
    footer1.classList.add('border-gray-700');
    up1.addEventListener('click', function () {
        footer1.classList.add('hidden');
        tombolcoffe.classList.remove('hidden');
        up1.style.display = 'none';
        bungkus1.style.border = '';
    })
})

tombol2.addEventListener( 'click', function () {
    footer2.classList.toggle('hidden');
    tombol2.classList.add("hidden");
    bungkus2.style.border = "none";
    footer2.classList.add("border-b-[1px]");
    footer2.classList.add("border-gray-700");
    up2.style.display = "block";
    up2.addEventListener("click", function () {
        footer2.classList.add("hidden");
        tombol2.classList.remove("hidden");
        up2.style.display = "none";
        bungkus2.style.border = "";
        });
    
})
tombol3.addEventListener('click', function () {
    footer3.classList.toggle('hidden');
    tombol3.classList.add("hidden");
    bungkus3.style.border = "none";
    footer3.classList.add("border-b-[1px]");
    footer3.classList.add("border-gray-700");
    up3.style.display = "block";
    up3.addEventListener("click", function () {
        footer3.classList.add("hidden");
        tombol3.classList.remove("hidden");
        up3.style.display = "none";
        bungkus3.style.border = "";
        });
})

// scrol fixed
window.onscroll = function () {
    const header = document.querySelector("#sectionTop");
    const fixedNav = header.offsetTop;
    if ( window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}










// tombolcoffe.addEventListener('click', function () {
//     footer1.style.display = 'none'
//     info.classList.remove('translate-y-[13rem]')
// })



// const hoverContainer = document.getElementById('hoverContainer');
// const hoverContent = document.getElementById('hoverContent');

// hoverContainer.addEventListener('mouseenter', function() {
//     hoverContent.style.display = 'block';
// });

// hoverContainer.addEventListener('mouseleave', function() {
//     hoverContent.style.display = 'none';
// });




// menu
hamburger.addEventListener('click', function () {
    navbar.classList.toggle('hidden')
});
