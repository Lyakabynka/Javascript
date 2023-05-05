
class MovieService{
    static async search(title,type,page)
    {
        const url = new URL('https://www.omdbapi.com/');
        const params = {
            apikey: apiKey,
            s: title,
            type: type,
            page: page
        };
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    static async getMovie(id)
    {
        const url = new URL('https://www.omdbapi.com/');
        const params = {
            apikey: apiKey,
            i: id
        };
        url.search = new URLSearchParams(params).toString();

        
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }
}

const apiKey = '1fbad59';


const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const typeInput = document.querySelector('#type');
const searchButton = document.querySelector('#search');


const resultsElement = document.querySelector('#results');
const paginationElement = document.querySelector('#pagination');

let loadingElement = document.createElement('div');
loadingElement.innerHTML = "Loading!";

searchButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
    resultsElement.appendChild(loadingElement)
    await MovieService.search(titleInput.value, typeInput.value, 1)
        .then((data) => {
            resultsElement.removeChild(loadingElement);
            displayResults(data);
        })
        .catch(error => console.log(error));
});

function createCard(element){
  // card
  const poster = (element.Poster !== 'N/A') ? 
    `url('${element.Poster}')` : "url('StaticData\\image-not-available.jpg')";

  var card = document.createElement('div');
  card.setAttribute("class", "movie-card");
  card.style.backgroundImage = poster;
  
  card.id = element.imdbID;
  
  // title
  var title = document.createElement('h1');
  title.innerText = element.Title;
  card.appendChild(title);
  
  // rating
    //   var star = document.createElement("i");
    //   star.setAttribute("class", "fas fa-star");
    var type = document.createElement('span');
    type.innerText = capitalize(element.Type);
    // rating.appendChild(star);
    card.appendChild(type);

    card.appendChild(document.createElement('br'));

  // runtime
  var year = document.createElement('span');
  year.innerText = element.Year;
  card.appendChild(year);

  
  card.addEventListener('mouseenter',async ()=>{
        if(card.isDescriptionDisplayed == true) return;

        card.isDescriptionDisplayed = true;

        const movie = await MovieService.getMovie(card.id);

        // rating
        var star = document.createElement("i");
        star.setAttribute("class", "fas fa-star");
        var rating = document.createElement('span');
        rating.innerText = movie.imdbRating + " ";
        rating.appendChild(star);

        type.parentElement.insertBefore(rating, type.nextSibling);

        type.innerText += `, ${movie.Runtime}`


        var genre = document.createElement('span');
        genre.innerText = movie.Genre;
        card.appendChild(genre);


        var plot = document.createElement('p');
        plot.style.marginTop = '10px';
        plot.style.display = 'inline-block';
        plot.innerText = movie.Plot;
        card.appendChild(plot);

        var actors = document.createElement('span');
        actors.style.display = 'inline-block';
        actors.style.width = '30%';
        actors.style.marginRight = '0';
        actors.style.marginTop = '10px';
        actors.style.marginLeft = '10px';
        actors.style.verticalAlign = 'top';
        actors.innerText = movie.Actors;

        card.appendChild(actors);
    });

  return card;
}

function displayResults(results) {

    resultsElement.innerHTML = '';
    paginationElement.innerHTML = '';


    if (results.Response === 'False') {
        const messageElement = document.createElement('p');
        messageElement.textContent = 'Movie not found!';
        resultsElement.appendChild(messageElement);
        return;
    }


    results.Search.forEach(movie => {
        
        const card = createCard(movie);

        console.log(movie.imdbID)

        card.id = movie.imdbID;        

        
        resultsElement.appendChild(card);
    });


    const totalPages = Math.ceil(results.totalResults / 10);
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.style.marginRight = '10px';
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', async () => {

            resultsElement.appendChild(loadingElement)

            await MovieService.search(titleInput.value, typeInput.value, i)
                .then((data) => {
                    resultsElement.removeChild(loadingElement);
                    displayResults(data);
                })
                .catch(error => console.log(error));
        });
        paginationElement.appendChild(pageLink);
    }
}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}