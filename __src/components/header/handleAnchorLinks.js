const handleAnchorLinks = () => {
    const anchorLinks = document.querySelectorAll(".header__menu a");
    anchorLinks.forEach((item) =>
        item.addEventListener("click", scroll2anchor)
    );

    function scroll2anchor(e) {
        // Проверяем, не активна ли первая ссылка, в зависимости от этого выбираем verticalOffset
        const verticalOffset = document
            .querySelector(".header__menu a[href='#home']")
            .classList.contains("i-active")
            ? 180
            : 97;

        e.preventDefault();
        const aim = e.target.getAttribute("href");
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: aim, offsetY: verticalOffset },
        });
        document.querySelector(".js-mainheader").classList.remove("i-open");
        document.querySelector(".js-hamburger").classList.remove("is-active");
    }
};

export { handleAnchorLinks };
