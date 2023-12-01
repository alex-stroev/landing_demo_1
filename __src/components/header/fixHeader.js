function fixHeader(headerElem, fixinClass = "i-fixed", additionalPadding = 20) {
    // TODO: учесть возможные верхний паддинг сиблинга и возможность нахождения перед хедером других блоков

    console.log(headerElem);
    let header = document.querySelectorAll(headerElem);
    if (header.length) {
        header = header[0];

        const afterHeader = header.nextElementSibling;
        // const afterHeaderPaddingTop = afterHeader.style;

        const toggleFixedClass = () => {
            console.log(header.offsetTop);
            if (window.scrollY > header.offsetHeight) {
                header.classList.add(fixinClass);
                afterHeader.style.paddingTop =
                    header.offsetHeight + additionalPadding + "px";
            } else {
                header.classList.remove(fixinClass);
                afterHeader.style.paddingTop = "";
            }
        };

        toggleFixedClass(); // for load
        window.addEventListener("scroll", toggleFixedClass);
    }
}

export { fixHeader };
