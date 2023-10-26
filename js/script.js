    //script
    function toggleSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");
      
        sidebar.classList.toggle("show");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    }