import "bootstrap"

const gallery = [
    {
        "id": 1,
        "alt": "snowboard trick",
        "URL": "https://images.unsplash.com/photo-1612734748753-eec35ee8ad57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 2,
        "alt": "ski sunset",
        "URL": "https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 3,
        "alt": "group on chairlift",
        "URL": "https://images.unsplash.com/photo-1596473536056-91eadf31189e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 4,
        "alt": "skiier going down run",
        "URL": "https://images.unsplash.com/photo-1504827274833-7db1774520e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 5,
        "alt": "skiier",
        "URL": "https://images.unsplash.com/photo-1596473535762-ce7f43470748?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 6,
        "alt": "snowboarder",
        "URL": "https://images.unsplash.com/photo-1518085050105-3c33befa5442?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 7,
        "alt": "snowboarder in powder",
        "URL": "https://images.unsplash.com/photo-1488580923008-6f98dfbd7a25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 8,
        "alt": "snowboarder kicking up powder",
        "URL": "https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 9,
        "alt": "snowboarding run",
        "URL": "https://images.unsplash.com/photo-1418662589339-364ad47f98a2?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 10,
        "alt": "celebrating snowboarder",
        "URL": "https://images.unsplash.com/photo-1662925518821-1834a9fa2f44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 11,
        "alt": "ski view",
        "URL": "https://images.unsplash.com/photo-1642167867106-bb25831de3cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 12,
        "alt": "gondola",
        "URL": "https://images.unsplash.com/photo-1659892603525-c04bf9e758f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 13,
        "alt": "park city lift",
        "URL": "https://images.unsplash.com/photo-1632042160467-2fea64e1bd4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 14,
        "alt": "mountain side",
        "URL": "https://images.unsplash.com/photo-1670611554923-ee1deeff7ab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 15,
        "alt": "snowboard group",
        "URL": "https://images.unsplash.com/photo-1565857725478-54d38420aaa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 16,
        "alt": "snowboarder flipping",
        "URL": "https://images.unsplash.com/photo-1600765282502-2ccd9543f0d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

for (let g of gallery) {
    let g_image = document.getElementById('g' + g.id)
    g_image.innerHTML = `
        <img src="${g.URL}" alt="${g.alt}" class="img-thumbnail" />
    `
}