function fixHeader(
    headerClass,
    fixinClassOnDesktop = "i-fixed",
    openClassForMobile = "i-open",
    hamburgerClass = ".js-hamburger",
    additionalPadding = 20,
    breakpoint = 1024
) {
    // TODO: учесть возможные верхний паддинг сиблинга и возможность нахождения перед хедером других блоков

    console.log(headerClass);
    let header = document.querySelectorAll(headerClass);
    let hamburger = document.querySelectorAll(hamburgerClass)[0];

    if (header.length) {
        header = header[0];
        breakpoint = parseInt(breakpoint);

        const afterHeader = header.nextElementSibling;

        hamburger.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("is-active");
            header.classList.toggle("i-open");
        });

        toggleFixedClass(afterHeader); // for load
        window.addEventListener("scroll", () => toggleFixedClass(afterHeader));

        ////////////////////////////////////////////////////////////////////////////
        //  ONRESIZE
        ////////////////////////////////////////////////////////////////////////////
        window.addEventListener("resize", () => {
            if (window.matchMedia(`(max-width: ${breakpoint}px)`).matches) {
                ////////////////////////////////////////////////////////////////////////////
                //  MOBILE
                ////////////////////////////////////////////////////////////////////////////
                // console.log("MOBILE");
                header.classList.remove(fixinClassOnDesktop);
            } else {
                ////////////////////////////////////////////////////////////////////////////
                //  DESKTOP
                ////////////////////////////////////////////////////////////////////////////
                // console.log("DESKTOP");
                header.classList.remove(openClassForMobile);
                hamburger.classList.remove("is-active");

                // const afterHeaderPaddingTop = afterHeader.style;
            }

            // end resize
        });
    }

    function toggleFixedClass(afterHeader) {
        if (!window.matchMedia(`(max-width: ${breakpoint}px)`).matches) {
            if (window.scrollY > header.offsetHeight) {
                header.classList.add(fixinClassOnDesktop);
                afterHeader.style.paddingTop =
                    header.offsetHeight + additionalPadding + "px";
            } else {
                header.classList.remove(fixinClassOnDesktop);
                afterHeader.style.paddingTop = "";
            }
        }
    }
}

export { fixHeader };
