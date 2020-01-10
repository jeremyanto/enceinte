/*document.querySelector("#nav-toggle")
    .addEventListener("click", function () {
        this.classList.toggle("active");
    });*/

function openNav(){
    document.getElementById("snav").style.left="0vw";

    document.querySelector("#nav-toggle").style.opacity="0%" ;

}
function closeNav(c){
    /*c.style.left="-90vw"*/
    document.getElementById("snav").style.left = "-110vw";
    document.querySelector("#nav-toggle").style.opacity="100%" ;

}




function btnMedia() {
    const x = document.getElementById("dot");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


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



                document.querySelector('.im'+[i]).innerHTML = '<img src='+img+'  alt="image_single"><iframe  width="80" height="80" class="lecture" src="https://open.spotify.com/embed/playlist/'+id+'"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><div class="PlayPartage"><h3>'+name+'</h3></div>'




            }

        }

    }


    xhr.open('GET', 'https://api.spotify.com/v1/me/playlists?limit=12')
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer BQAmLqfoRF-s89niEAbqu_0kzkxgSRofdTml3W5f6vb48M3BjFg9l7V1f3h-lu4cpIM_EJfbOsSjWpGKBkMevvWvCOojmzF_N_nqGi7CJcpEEAblQ0qwU_M3OdgKdBRPweVY1sblfF3tSWeUePPuv9lBLFSm9mRBhKC-wmeDGRmuZvJISL-05npljIiwwB8_iCBjzyXrNvhZDocXy1SWwejFfiZvV7ZWDkE08GYMQc3dpWA55bUTOFGCWaIihUl9AVHNjAvn2U49n1PXHui2");


    xhr.send()
}



getPlaylist()
