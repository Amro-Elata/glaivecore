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
                bgVideo.muted = false;
                bgVideo.playsInline = true; // For mobile support
                mainContent.appendChild(bgVideo);
                
                //Site introduction Description
                const introDiv = document.createElement("div");
                introDiv.className = "introDiv";
                mainContent.appendChild(introDiv);
                    
                    introDivTitle = document.createElement("h1");
                    introDivTitle.className = "introDivTitle";
                    introDivTitle.textContent = data.introTitle
                    introDiv.appendChild(introDivTitle)

                //section One
                const sectionOne = document.createElement("div");
                sectionOne.className = "musicSectionOne";
                mainContent.appendChild(sectionOne);

                    const imgOneContainer = document.createElement("div");
                    imgOneContainer.className = "imageContainer";
                    sectionOne.appendChild(imgOneContainer);
                    


                        const imgOne = document.createElement("img");
                        imgOne.className = "imgOne";
                        imgOne.src = data.imgOneSrc;
                        imgOneContainer.appendChild(imgOne);

                        const imgOneDesc = document.createElement("p");
                        imgOneDesc.className = "imgOneDesc";
                        imgOneDesc.textContent = data.imgOneDesc;
                        imgOneDesc.innerHTML = data.imgOneDesc.replace(/\n/g, "<br>");
                        imgOneContainer.appendChild(imgOneDesc);

                //section Two
                const sectionTwo = document.createElement("div");
                sectionTwo.className = "musicSectionTwo";
                mainContent.appendChild(sectionTwo);

                    const imgTwoContainer = document.createElement("div");
                    imgTwoContainer.className = "imageContainer";
                    sectionTwo.appendChild(imgTwoContainer);
                    


                        const imgTwo = document.createElement("img");
                        imgTwo.className = "imgTwo";
                        imgTwo.src = data.imgTwoSrc;
                        imgTwoContainer.appendChild(imgTwo);

                        const imgTwoDesc = document.createElement("p");
                        imgTwoDesc.className = "imgTwoDesc";
                        imgTwoDesc.textContent = data.imgTwoDesc;
                        imgTwoDesc.innerHTML = data.imgTwoDesc.replace(/\n/g, "<br>");
                        imgTwoContainer.appendChild(imgTwoDesc);

                //section Three
                const sectionThree = document.createElement("div");
                sectionThree.className = "musicSectionThree";
                mainContent.appendChild(sectionThree);

                    const imgThreeContainer = document.createElement("div");
                    imgThreeContainer.className = "imageContainer";
                    sectionThree.appendChild(imgThreeContainer);
                    


                        const imgThree = document.createElement("img");
                        imgThree.className = "imgThree";
                        imgThree.src = data.imgThreeSrc;
                        imgThreeContainer.appendChild(imgThree);

                        const imgThreeDesc = document.createElement("p");
                        imgThreeDesc.className = "imgThreeDesc";
                        imgThreeDesc.textContent = data.imgThreeDesc;
                        imgThreeDesc.innerHTML = data.imgThreeDesc.replace(/\n/g, "<br>");
                        imgThreeContainer.appendChild(imgThreeDesc);





        })

        //error handling
        .catch(error => console.error("Error loading data:", error));
});
