

/*Script menu Burger*/

/*
document.querySelector("#nav-toggle")
    .addEventListener("click", function () {
        this.classList.toggle("active");
    });*/

/*_____________*/




 /*________side_______*/
function openNav(){
    document.getElementById("snav").style.left="0vw";

    document.querySelector("#nav-toggle").style.opacity="0%" ;

}
function closeNav(c){
    /*c.style.left="-90vw"*/
    document.getElementById("snav").style.left = "-110vw";
    document.querySelector("#nav-toggle").style.opacity="100%" ;

}



/*__________API_________________________*/

/*_______________________________________*/

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)


            /*Boucle for qui récupère le nom de l'artiste, le titre de l'album et sa pochette*/

            const nbsuggestions = data.albums.items.length

            for(let i=0; i< nbsuggestions ; i++)
            {
                const name = data.albums.items[i].artists[0].name
                console.log(name)

                const image = data.albums.items[i].images[0].url
                console.log(image)

                const tite = data.albums.items[i].name
                console.log(tite)

                document.querySelector('.img'+[i]).innerHTML = '<img src='+image+'  alt="image_single"><h3 class="opactitre titre0">'+tite+'</h3><h3 class="opacartist">-'+name+'</h3> '




            }

        }

    }


    xhr.open('GET', 'https://api.spotify.com/v1/browse/new-releases?country=FR&limit=16')
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer BQCX_E_OETihcYgPuNkzJU3buMlPAOdAh5wjMLzzPMMciwvysfH9JP8yqJ7nwLoyqrsKsbBQ53nuVlojoQ8fB6yxZ77YwneP3LBZKvXuGetdiMFXND2Y6_XSFCRK0P0Mku5PA_ACfQyXL5S9ZY8nssd2-URCvh8jegRQE-upbm-KCPFw3Izyj24i9nHvJMCiPw5GIasQXYYkYYrT7nff8Ne2J7ier_QeIuRfVq6nNsntc9G8PEYFen64b75Z_a7hNONenzFb3TsN_2p_pSAZ");


    xhr.send()
}



getApiData()


/*_______________________________________Playlist________________*/

function getPlaylist() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)


            /*Boucle for qui récupère le nom de l'artiste, le titre de l'album et sa pochette*/

            const nbplaylists = data.items.length

            for(let i=0; i< nbplaylists ; i++)
            {
                const img = data.items[i].images[0].url
                console.log(img)

                const name= data.items[i].name
                console.log(name)
                const id = data.items[i].id
                console.log(id)



                document.querySelector('.im'+[i]).innerHTML = '<img src='+img+'  alt="image_single"><div class="PlayPartage"><h3>'+name+'</h3><iframe class="lecture" src="https://open.spotify.com/embed/playlist/'+id+'"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'




            }

        }

    }


    xhr.open('GET', 'https://api.spotify.com/v1/me/playlists?limit=12')
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer BQCCkzXO4NG5I418Pw9dnTojIgsqd4rAVaFJfrOMQQmb_1Hv2MDDD2pW_y29phtKf9cTFLBiYdcatOQw4he6fjrU5qfOAq9sKbmmIT2E2tUtb-4SC2uTB_U9oa3ccX_u2xcDbaCDdtESROqjHHzUJ-xsEgUgIUc5u0wGR1q5TqRIbtNBmejz51TyuBKqz_5zRn2JW_3uUVTmkDv96WklgxKPjeYJEDzKP7E7k7pQh6imLnsK8VkoFM0HnmNOULvSIeZ0h6X0b3OCJlQa9Cgn");


    xhr.send()
}



getPlaylist()

/*_______________________________Recent played tracks*____________________*/

function getLastTrack() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            const lastTrackImg = data.items[0].track.album.images[1].url
            console.log(lastTrackImg)


            const lastTrackName = data.items[0].track.name
            console.log(lastTrackName)


            const lastTrackId = data.items[0].track.id
            console.log(lastTrackId)

            const artist = data.items[0].track.artists[0].name
            console.log(artist)




              /*  document.querySelector('.tracksenlecture').innerHTML = '<iframe src="https://open.spotify.com/embed/track/'+lastTrackId+'" width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'*/
            document.querySelector('.musiquenlecture').innerHTML = '<div class="tracksenlecture"><iframe class="recentplay" src="https://open.spotify.com/embed/track/'+lastTrackId+'" width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div><div class="titretracksenlecture"><p>'+lastTrackName+'</p><p>'+artist+'</p></div>'






        }

    }


    xhr.open('GET', 'https://api.spotify.com/v1/me/player/recently-played?limit=1')
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer BQBFJs6Pm7uJa2tnakwjPRy54ZQFms5O-cufPM5S6AP626cMQWilsJEK2sVnv_w0Q25OfBkKu5Brjx_o7_qSubZhgKrvK-c3gtBg-z9LMw0H7ygGmWva6zbbVOf8N69RMOF-Ui67QDFWkaOM8KqHk-fxyXxigFit3tlHHZc_-EMMeef5LwF9nQHw0-G6NBYTfBgLlDw0EMwk5ow3al-bIVQy9SFw_43N0vc62CI6DjUs9-KZQ5Tk7bPjjUfgEnvkeyGjA3qFr8IBW0yEzN2Y");


    xhr.send()
}



getLastTrack()


/*________________Recommandation__________*/

/*______________________Get tracks from playlist______________________*/

function getAdd() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)









            const nbitems= data.items.length

            for(let i=0; i< nbitems ; i++)
            {

                const id = data.items[i].id
                console.log(id)

                const name = data.items[i].name
                console.log(name)













                document.querySelector('.container').innerHTML +=  '<iframe class="iframe" src="https://open.spotify.com/embed/playlist/'+id+'" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
                document.querySelector('.navajouter').innerHTML += '<li class="playlist0"><a  href="https://open.spotify.com/playlist/'+id+'"  onclick="fenetrevolante()" id="lien">'+name+'</a></li>'
                console.log(document.querySelector('.navajouter'));






            }


        }

    }


    xhr.open('GET', 'https://api.spotify.com/v1/me/playlists?limit=12')
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", "");


    xhr.send()
}



getAdd()

/*__________________________*/








