console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then((data) => {
        data.message.forEach(function(imageUrl) {
            const img = document.createElement('img')
            img.src = imageUrl
            img.width = "500"
            document.getElementById('dog-image-container').appendChild(img);
        });
    })
    
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then((data) => {
        const breeds = Object.keys(data.message)
        const breedLis = []
   
        breeds.forEach(breed => {
            const li = document.createElement('li')
            breedLis.push(li)
            li.addEventListener('click', () => {
                li.style.color = 'red'
            })
            li.innerText = breed
            document.getElementById('dog-breeds').appendChild(li);
        })
        const dropdown = document.getElementById('breed-dropdown')

        dropdown.addEventListener('change', () => {
            breedLis.forEach(li => {
                li.style.display = 'none';
            })
            const letter = document.getElementById('breed-dropdown').value
            const selectedList = breeds.filter(dog => dog.startsWith(`${letter}`))
            selectedList.forEach(breed => {
                const li = document.createElement('li')
                breedLis.push(li)
                li.addEventListener('click', () => {
                    li.style.color = 'red'
                })
                li.innerText = breed
                document.getElementById('dog-breeds').appendChild(li);
            })
            console.log(breedLis)
        })
        
    
    })
    
