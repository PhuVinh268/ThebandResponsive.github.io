// getElementById: chỉ dùng thẻ ID
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mb-menu');
// headerHeight giúp sau này thay đổi [height: 46px] thành giá trị khác
var headerHeight = header.clientHeight; 


// ----------------[Đóng/mở] mobile menu-----------------------
mobileMenu.onclick = function() {
    // console.log(header.clientHeight);          kiểm tra chiều cao của #header
    
    var isClosed = header.clientHeight===headerHeight;   // kiểm tra [phải] --> [trái], nếu 46px thì Closed
    if (isClosed) {
        header.style.height = 'auto';          // Nếu đang closed, bấm vào thì mở (auto pixel)
    } else {
        // header.style.height = '46px';
        header.style.height = null;            // Cách này thay cách trên [46px], tự xem lại trong console trên web [Ctrl Shift I]
    }
}


// ----------------Tự động [Đóng] khi chọn menu-----------------------
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
//console.log(menuItems);                        // Ktra có bao nhiêu phần tử 
for (var i=0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    // console.log(menuItem);
    
    
    // console.log(menuItem.nextElementSibling);
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;           
        }          
    }
}

