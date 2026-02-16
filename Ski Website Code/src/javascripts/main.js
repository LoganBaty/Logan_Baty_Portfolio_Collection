//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


const resorts = [
    {
        "id": 1,
        "title": "Powder Mountain",
        "URL": "https://images.unsplash.com/photo-1610827624209-c7639bf88c0c?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$149-$199",
        "Size": "Over 8,464 acres",
        "avsnow": "500 inches",
        "Location": "Eden, UT"
    },

    {
        "id": 2,
        "title": "Park City Mountain",
        "URL": "https://images.unsplash.com/photo-1592428067555-fbaaa69df4b2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$225-$250",
        "Size": "7,300 acres",
        "avsnow": "360 inches",
        "Location": "Park City, UT"
    },

    {
        "id": 3,
        "title": "Snowbird",
        "URL": "https://images.unsplash.com/photo-1679330133692-603088131844?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$175-$206",
        "Size": "3,500 acres",
        "avsnow": "500 inches",
        "Location": "Snowbird, UT"
    },

    {
        "id": 4,
        "title": "Snowbasin",
        "URL": "https://images.unsplash.com/photo-1635011119565-0c5a580b6432?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$159-$209",
        "Size": "3,000 acres",
        "avsnow": "300 inches",
        "Location": "Eden, UT"
    },

    {
        "id": 5,
        "title": "Alta",
        "URL": "https://images.unsplash.com/photo-1644768606813-72eca4750d8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$164-$189",
        "Size": "2,614 acres",
        "avsnow": "540 inches",
        "Location": "Alta, UT"
    },

    {
        "id": 6,
        "title": "Beaver Mountain",
        "URL": "https://images.unsplash.com/photo-1549735472-7ecf06a74d5f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$70",
        "Size": "828 acres",
        "avsnow": "400 inches",
        "Location": "Logan, UT"
    },

    {
        "id": 7,
        "title": "Brighton",
        "URL": "https://images.unsplash.com/photo-1610827624209-c7639bf88c0c?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$79+",
        "Size": "1,050 acres",
        "avsnow": "500 inches",
        "Location": "Brighton, UT"
    },

    {
        "id": 8,
        "title": "Nordic Valley",
        "URL": "https://images.unsplash.com/photo-1662925429325-cd579a0a8ff1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$12-$67",
        "Size": "500 acres",
        "avsnow": "300 inches",
        "Location": "Eden, UT"
    },

    {
        "id": 9,
        "title": "Solitude",
        "URL": "https://images.unsplash.com/photo-1600356604423-426d3363ffb7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Price": "$89-$120",
        "Size": "1,200 acres",
        "avsnow": "500 inches",
        "Location": "Solitude, UT"
    },
]

for (let r of resorts) {
    let r_thumb = document.getElementById('r' + r.id)
    r_thumb.innerHTML = `
        
        <div class="text-bg-secondary p-3 my-3 text-center">
            <h1>${r.title}</h1>
        </div>
    `
    r_thumb.onclick = function() {
        displayResort(r)
    }
}

let featured_resort = document.querySelector(".featured")

function displayResort(r) {
    featured_resort.innerHTML = `
    <div class="card" style="col-md-5 mx-auto">
        <img src="${r.URL}" class="card-img-top" alt="${r.title}">
        <div class="card-body d-flex">
            <div>
                <h2 class="card-title">${r.title}</h2>
                <h5 class="card-text">Resort Information</h5>
                <h6 class="card-text">Location: ${r.Location}</h6>
                <h6 class="card-text">Price: ${r.Price}</h6>
                <h6 class="card-text">Size: ${r.Size}</h6>
                <h6 class="card-text">Average Snowfall: ${r.avsnow}</h6>
            </div>
        </div>
    </div>
    `
}





