/*Script menu Burger*/


document.querySelector("#nav-toggle")
    .addEventListener("click", function () {
        this.classList.toggle("active");
    });

/*__________API_________________________*/

/*_______________________________________*/

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            const artist = data.items[0].artists[0].name


            const artistSecond = data.items[0].artists[0].name


            const artists = artist+' feat '+artistSecond
            console.log(artists)



            const date= data.items[0].release_date
            console.log(date)


            /*Boucle for qui récupère toutes les images*/

            const nbitems = data.items.length

            for(let i=0; i< nbitems ; i++)
            {
                const nbimages = data.items[i]


                const itemsimage= data.items[i].images.length

                for(let j= 0 ; j< itemsimage ; j++)
                {
                    const resultimages = data.items[i].images[j].url
                    console.log(resultimages)
                }
            }


            /*Boucle qui récupère Les images de taille moyenne + titre des chansons qui corespond à chaque image*/

            const nbitems_moyen = data.items.length

            for(let i=0; i< nbitems_moyen ; i++)
            {
                const nbimages_moyen = data.items[i].images[1].url
                console.log(nbimages_moyen)


                const single_name = data.items[i].name
                console.log(single_name)


                document.querySelector('.img'+[i]).innerHTML = '<img src='+nbimages_moyen+'  alt="image_single">'




            } /*fin boucle*/

            /*Boucle for qui récupère le titre des chansons*/
            const nbitems_name = data.items.length

            for(let n=0; n< nbitems_name ; n++) {
                const nbsingles = data.items[n]


                const single_name = data.items[n].name


                console.log(single_name)
                document.querySelector('.title'+[n]).innerHTML = single_name


            }/*Fin boucle*/



        }

    }




    xhr.open('GET', 'https://api.spotify.com/v1/me/playlists?limit=12&offset=5')


    xhr.send()
}



getApiData()

