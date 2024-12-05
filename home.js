function changeImg(nameClick) {
    const imgElements = document.querySelectorAll('[id="move-img"]');
    if (nameClick == 'plant') {
        document.getElementById('span-anh1.1').innerHTML = 'Peace Lily';
        document.getElementById('span-anh1.2').innerHTML = 'From $32.50';
        document.getElementById('span-anh2.1').innerHTML = 'Potted Phalaenopsis Orchid';
        document.getElementById('span-anh2.2').innerHTML = 'From $75.00';
        document.getElementById('span-anh3.1').innerHTML = 'Terrarium';
        document.getElementById('span-anh3.2').innerHTML =  'From 100.00$';
        document.getElementById('span-anh4.1').innerHTML = 'Potted Phalaenopsis Orchid';
        document.getElementById('span-anh4.2').innerHTML = 'From $75.00';
        document.getElementById('plant').style.textDecoration = 'underline';
        document.getElementById('mix').style.textDecoration = 'none';
    }
    if (nameClick == 'mix') {
        document.getElementById('span-anh1.1').innerHTML = 'Pick me up';
        document.getElementById('span-anh1.2').innerHTML = 'From $70.00';
        document.getElementById('span-anh2.1').innerHTML = 'Sunflower Bouquet';
        document.getElementById('span-anh2.2').innerHTML = 'From $13.00';
        document.getElementById('span-anh3.1').innerHTML = 'Kellie Bouquet';
        document.getElementById('span-anh3.2').innerHTML =  'From 75.00$';
        document.getElementById('span-anh4.1').innerHTML = 'Mixed Roses';
        document.getElementById('span-anh4.2').innerHTML = 'From $52.00';
        document.getElementById('mix').style.textDecoration = 'underline';
        document.getElementById('plant').style.textDecoration = 'none';
    }
    imgElements.forEach((imgElement) => {
        if (nameClick == 'plant') {
            imgElement.src = imgElement.src.replace('mix', 'plant');
        } 
        if (nameClick == 'mix') {
            imgElement.src = imgElement.src.replace('plant', 'mix');
        }
    });
}

function submitForm(event) {
    event.preventDefault();
    let email = document.getElementById('getEmail').value;

    localStorage.setItem('email', email);
    window.location.href = './continue-log-in.html';
}

function submitForm(event) {
    event.preventDefault();
    let email = document.getElementById('getEmail').value;
    let errorEmail = document.getElementById('error-email'); 

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Kiểm tra email
    if (emailPattern.test(email)) {
        localStorage.setItem('email', email);
        window.location.href = './continue-log-in.html';
    } else {
        errorEmail.textContent = 'Please enter a valid email address'; // Cập nhật thông báo lỗi
        errorEmail.style.display = 'block'; // Hiển thị thông báo lỗi
    }
}

window.onload = function() {
    // Kiểm tra nếu trang hiện tại là 'continue-log-in.html'
    if (window.location.pathname.includes('continue-log-in.html')) {
        let email = localStorage.getItem('email');  // Lấy email từ localStorage
        if (email) {
            let contentSendTo = document.querySelector('.describe-login');
            contentSendTo.innerHTML = `Sent to ${email}`;  // Cập nhật nội dung email
        }
    }
};
