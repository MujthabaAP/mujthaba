// $(function () {
//   $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
// });
document.addEventListener("DOMContentLoaded", function () {
    var readMoreLink1 = document.querySelector('.read-more-1');
    var elementsToHide1 = document.querySelectorAll('.extra-content-1');
    readMoreLink1.addEventListener('click', function (event) {
        event.preventDefault();
        elementsToHide1.forEach(function (element) {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                readMoreLink1.textContent = 'Read less >>';
            } else {
                element.style.display = 'none';
                readMoreLink1.textContent = 'Read more >>';
            }
        });
    });

    var readMoreLink2 = document.querySelector('.read-more-2');
    var elementsToHide2 = document.querySelectorAll('.extra-content-2');
    readMoreLink2.addEventListener('click', function (event) {
        event.preventDefault();
        elementsToHide2.forEach(function (element) {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                readMoreLink2.textContent = 'Read less >>';
            } else {
                element.style.display = 'none';
                readMoreLink2.textContent = 'Read more >>';
            }
        });
    });

    var readMoreLink3 = document.querySelector('.read-more-3');
    var elementsToHide3 = document.querySelectorAll('.extra-content-3');
    readMoreLink3.addEventListener('click', function (event) {
        event.preventDefault();
        elementsToHide3.forEach(function (element) {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                readMoreLink3.textContent = 'Read less >>';
            } else {
                element.style.display = 'none';
                readMoreLink3.textContent = 'Read more >>';
            }
        });
    });
});