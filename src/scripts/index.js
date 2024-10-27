document.addEventListener("DOMContentLoaded", () => {
    fetch("./scripts/index-data.json")  // path to data file - DO NOT EDIT
        //checking network response
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })

        // populates fetched data
        .then(data => {

            //define and populate NAV content elements from data
            const navContent = document.getElementById("nav-content");
                navContent.className = "navbar"


                const headerTitle = document.createElement("h2");
                headerTitle.textContent = data.title;
                headerTitle.className = "headerTitle";
                navContent.appendChild(headerTitle);

                const navItemList = document.createElement("ul");
                navItemList.className = "navItemList";
                data.navItems.forEach(item => {
                    const navListItem = document.createElement("li");
                    const navLink = document.createElement("a");

                    navLink.href = item.href;
                    navLink.textContent = item.text;
                    navListItem.appendChild(navLink); 
                    navItemList.appendChild(navListItem);});             
                navContent.appendChild(navItemList);



            //define and populate MAIN content elements from data
            const mainContent = document.getElementById("main-content");
                    mainContent.className = "mainContent";

                // Define and configure the background video
                const bgVideo = document.createElement("video");
                bgVideo.className = "bgVideo";  // Optional: Set a class for styling
                bgVideo.src = data.bgVideoSrc;  // Set video source from JSON data
                bgVideo.autoplay = true;
                bgVideo.loop = true;
                bgVideo.muted = true;
                bgVideo.playsInline = true; // For mobile support

                // Add the video element to the main content
                mainContent.appendChild(bgVideo);



            //define and populate HEADER content elements from data
            const footerContent = document.getElementById("footer-content");
                //insert header content here...
        })

        //error handling
        .catch(error => console.error("Error loading data:", error));
});
