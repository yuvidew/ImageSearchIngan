const accessKey = "IkMsmUrqFx0S2L19NnKFkJ0RpdHNjpCJhYvGDmUyUiU";

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchresult.innerHTML = "";
    }

    const results = data.results;
    console.log(results)

    const imagedata = results.map((result) =>{
        return( `<div class="col-lg-4 col-md-6 col-sm-12 mt-4">
            <div class="box">
                <img src= ${result.urls.small} alt="">
                <div class="linkbox">
                    <a href=${result.links.html} target= "_blank">
                        Vist site <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        </div>`)

})
    console.log(imagedata)
    searchresult.innerHTML += imagedata.join("")
    showmorebtn.style.display = "block" 
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;

    searchImage();
})

showmorebtn.addEventListener("click", () =>{
    page++;
    searchImage();
})