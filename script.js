/* =========================================
   ASSY5 MEMORIES
   SCRIPT.JS
========================================= */


/* =========================================
   LIGHTBOX - MỞ ẢNH
========================================= */

function openImage(imageSource) {

    const viewer =
        document.getElementById("imageViewer");

    const largeImage =
        document.getElementById("largeImage");


    if (!viewer || !largeImage) {
        return;
    }


    largeImage.src = imageSource;

    viewer.classList.add("active");


    // Không cho trang cuộn khi đang xem ảnh

    document.body.style.overflow = "hidden";
}


/* =========================================
   LIGHTBOX - ĐÓNG ẢNH
========================================= */

function closeImage() {

    const viewer =
        document.getElementById("imageViewer");


    if (!viewer) {
        return;
    }


    viewer.classList.remove("active");


    // Cho phép cuộn trang lại

    document.body.style.overflow = "";
}


/* =========================================
   PHÍM ESC ĐỂ ĐÓNG ẢNH
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeImage();

        }

    }
);


/* =========================================
   KHÔNG ĐÓNG KHI CLICK VÀO ẢNH
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const largeImage =
            document.getElementById(
                "largeImage"
            );


        if (largeImage) {

            largeImage.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                }
            );

        }

    }
);


/* =========================================
   HIỆU ỨNG CUỘN TRANG
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const elements =
            document.querySelectorAll(
                ".intro-content, .section-title, .photo-card, .trip-story"
            );


        const observer =
            new IntersectionObserver(
                function(entries) {

                    entries.forEach(
                        function(entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(
            function(element) {

                element.classList.add(
                    "scroll-hidden"
                );

                observer.observe(element);

            }
        );

    }
);