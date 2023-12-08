function toggleMenu() {
    var mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    var menuItems = document.querySelector('.menu-items');
    
    mobileMenuIcon.classList.toggle('active');
    menuItems.classList.toggle('active');
}





// KOTAK 1


    document.addEventListener("DOMContentLoaded", function() {
        const lihatSemuaFitur = document.getElementById("toggleDropdownkotak1");
        const frame14 = document.getElementById("frame114");
        const frame10 = document.querySelector(".frame-box1");
        const rectangle = document.querySelector(".rectangle");
        const kotakbawah = document.querySelector(".kotak-bawah")
        let expanded = false;
        lihatSemuaFitur.addEventListener("click", function() {
            if (!expanded) {
                
                frame14.style.height = "435px";
                frame14.style.transition = "height 0.3s ease-in-out";
                frame10.style.height = "655px";
                frame10.style.transition = "height 0.3s ease-in-out";
                frame14.style.overflow = "auto";
                rectangle.style.display = "none";

               
                
            } else {

                frame14.style.height = "215px";
                frame14.style.transition = "height 0.3s ease-in-out";
                frame10.style.height = "435px";
                frame10.style.transition = "height 0.3s ease-in-out";
                frame14.style.overflow = "hidden";
                rectangle.style.display = "block";
                
                kotakbawah.style.transition = "top 0.3s ease-in-out";


            }


            expanded = !expanded;
        });
    });



    const expandButton = document.getElementById('toggleDropdownkotak1');
    const hiddenList = document.querySelector('.frame-box1 ul');
    expandButton.addEventListener('click', function() {
        hiddenList.classList.toggle('show');
        expandButton.classList.toggle('expanded');
    });



    // KOTAK 2
    document.addEventListener("DOMContentLoaded", function() {
        const lihatSemuaFitur = document.getElementById("toggleDropdownkotak2");
        const frame214 = document.getElementById("frame214");
        const frame16 = document.querySelector(".frame-box2");
        const rectangle = document.querySelector(".rectangle-2");
        const kotakbawah = document.querySelector(".kotak-bawah")
        let expanded = false;
        lihatSemuaFitur.addEventListener("click", function() {
            if (!expanded) {
                frame214.style.height = "435px";
                frame214.style.transition = "height 0.3s ease-in-out";
                frame16.style.height = "655px";
                frame16.style.transition = "height 0.3s ease-in-out";
                frame214.style.overflow = "auto";
                
                
                rectangle.style.display = "none";

            } else {
                frame214.style.height = "215px";
                frame214.style.transition = "height 0.3s ease-in-out";
                frame16.style.height = "435px";
                frame16.style.transition = "height 0.3s ease-in-out";
                frame214.style.overflow = "hidden";
                rectangle.style.display = "block";

                kotakbawah.style.transition = "top 0.3s ease-in-out";
            }

            expanded = !expanded;
        });
    });

    const expandButton2 = document.getElementById('toggleDropdownkotak2');

    expandButton2.addEventListener('click', function() {
        const imgV2 = document.querySelector('.imgV2');
        imgV2.classList.toggle('rotated');
        expandButton2.classList.toggle('expanded');
    });


    // KOTAK 3
    document.addEventListener("DOMContentLoaded", function() {
        const lihatSemuaFitur = document.getElementById("toggleDropdownkotak3");
        const frame314 = document.getElementById("frame314");
        const frame17 = document.querySelector(".frame-box3");
        const rectangle = document.querySelector(".rectangle-3");
        const kotakbawah = document.querySelector(".kotak-bawah")
        let expanded = false;
        lihatSemuaFitur.addEventListener("click", function() {
            if (!expanded) {
                frame314.style.height = "435px";
                frame314.style.transition = "height 0.3s ease-in-out";
                frame17.style.height = "655px";
                frame17.style.transition = "height 0.3s ease-in-out";
                frame314.style.overflow = "auto";
                
                 
                rectangle.style.display = "none";

            } else {
                frame314.style.height = "215px";
                frame314.style.transition = "height 0.3s ease-in-out";
                frame17.style.height = "435px";
                frame17.style.transition = "height 0.3s ease-in-out";
                frame314.style.overflow = "hidden";
                rectangle.style.display = "block";

                kotakbawah.style.transition = "top 0.3s ease-in-out";
            }

            expanded = !expanded;
        });
    });

    const expandButton3 = document.getElementById('toggleDropdownkotak3');

    expandButton3.addEventListener('click', function() {
        const imgV3 = document.querySelector('.imgV3');
        imgV3.classList.toggle('rotated');
        expandButton3.classList.toggle('expanded');
    });


    // KOTAK 4
    document.addEventListener("DOMContentLoaded", function() {
        const lihatSemuaFitur = document.getElementById("toggleDropdownkotak4");
        const frame414 = document.getElementById("frame414");
        const frame410 = document.querySelector(".frame-box4");
        const rectangle4 = document.querySelector(".rectangle4");
        let expanded = false;
        lihatSemuaFitur.addEventListener("click", function() {
            if (!expanded) {
                frame414.style.height = "310px";
                frame414.style.transition = "height 0.3s ease-in-out";
                frame410.style.height = "520px";
                frame410.style.transition = "height 0.3s ease-in-out";
                frame414.style.overflow = "auto";
                rectangle4.style.display = "none";

            } else {
                frame414.style.height = "215px";
                frame414.style.transition = "height 0.3s ease-in-out";
                frame410.style.height = "435px";
                frame410.style.transition = "height 0.3s ease-in-out";
                frame414.style.overflow = "hidden";
                rectangle4.style.display = "block";
            }

            expanded = !expanded;
        });
    });

    const expandButton4 = document.getElementById('toggleDropdownkotak4');

    expandButton4.addEventListener('click', function() {
        const imgV4 = document.querySelector('.imgV4');
        imgV4.classList.toggle('rotated');
        expandButton4.classList.toggle('expanded');
    });




    // KOTAK 5
    document.addEventListener("DOMContentLoaded", function() {
        const lihatSemuaFitur = document.getElementById("toggleDropdownkotak5");
        const frame514 = document.getElementById("frame514");
        const frame516 = document.querySelector(".frame-box5");
        const rectangle5 = document.querySelector(".rectangle5");
        let expanded = false;
        lihatSemuaFitur.addEventListener("click", function() {
            if (!expanded) {
                frame514.style.height = "310px";
                frame514.style.transition = "height 0.3s ease-in-out";
                frame516.style.height = "520px";
                frame516.style.transition = "height 0.3s ease-in-out";
                frame514.style.overflow = "auto";
                rectangle5.style.display = "none";

            } else {
                frame514.style.height = "215px";
                frame514.style.transition = "height 0.3s ease-in-out";
                frame516.style.height = "435px";
                frame516.style.transition = "height 0.3s ease-in-out";
                frame514.style.overflow = "hidden";
                rectangle5.style.display = "block";
            }

            expanded = !expanded;
        });
    });

    const expandButton5 = document.getElementById('toggleDropdownkotak5');

    expandButton5.addEventListener('click', function() {
        const imgV5 = document.querySelector('.imgV5');
        imgV5.classList.toggle('rotated');
        expandButton5.classList.toggle('expanded');
    });



    // KOTAK 6
    document.addEventListener("DOMContentLoaded", function() {
        const lihatSemuaFitur = document.getElementById("toggleDropdownkotak6");
        const frame614 = document.getElementById("frame614");
        const frame616 = document.querySelector(".frame-box6");
        const rectangle6 = document.querySelector(".rectangle6");
        let expanded = false;
        lihatSemuaFitur.addEventListener("click", function() {
            if (!expanded) {
                frame614.style.height = "310px";
                frame614.style.transition = "height 0.3s ease-in-out";
                frame616.style.height = "520px";
                frame616.style.transition = "height 0.3s ease-in-out";
                frame614.style.overflow = "auto";
                rectangle6.style.display = "none";
            } else {
                frame614.style.height = "215px";
                frame614.style.transition = "height 0.3s ease-in-out";
                frame616.style.height = "435px";
                frame616.style.transition = "height 0.3s ease-in-out";
                frame614.style.overflow = "hidden";
                rectangle6.style.display = "block";
            }

            expanded = !expanded;
        });
    });

    const expandButton6 = document.getElementById('toggleDropdownkotak6');

    expandButton6.addEventListener('click', function() {
        const imgV6 = document.querySelector('.imgV6');
        imgV6.classList.toggle('rotated');
        expandButton6.classList.toggle('expanded');
    });







// var scroll700 = window.matchMedia("(max-width: 700px)")
// var scroll700 = 100;

// function handleScroll() {
//     var scrollY = window.scrollY || window.pageYOffset;

//     if (scrollY > scrollThreshold) {
//         // If scrolled beyond the threshold, hide the float button
//         floatButton.style.opacity = '0';
//     } else {
//         // Otherwise, show the float button
//         floatButton.style.opacity = '1';
//     }
// }




document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');
  
    hamburgerIcon.addEventListener('click', function () {
      this.classList.toggle('menu-open');
      menuItems.classList.toggle('menu-open');
    });
});












document.addEventListener("DOMContentLoaded", function() {
    var floatButton = document.querySelector('.floatbutton');
    var scrollThreshold = 1100; 

  
    function handleScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        if (window.matchMedia("(max-width: 700px)").matches) {
           
            scrollThreshold = 400;
        } else {
           
            scrollThreshold = 1100;
        }

        if (scrollY > scrollThreshold) {
           
            floatButton.style.opacity = '0';
        } else {
    
            floatButton.style.opacity = '1';
        }
    }

   
    window.addEventListener('scroll', handleScroll);

  
    handleScroll();
});
