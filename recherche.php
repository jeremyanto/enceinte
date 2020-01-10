<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="stylebis.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
<header>

   <nav>
        <a id="nav-toggle" href="#" onclick="openNav()"><span></span></a>
        <div class="profil"><img src="img/profil.png"/></div>
   </nav>


</header>

<main>

    <div id="snav">
        <a id="nav-toggle2" class="close" onClick="closeNav(this)">&times;</a>
        <ul class="navigation">
            <li><a href="accueil.html">Accueil</a></li>
            <li><a href="playlist.html">Playlist</a></li>
            <li><a href="recherche.html">Recherche</a></li>
             <li><a href="tracks.html">Playlist's tracks</a></li>

            <li><a href="inscription.php">Log in</a></li>



        </ul>
    </div>

    
    <div id="searchbar">
        <!--h1>What would you like to search?</h1-->

        <form action="" class="formulaire">
            <input class="champ" type="text" value="Search..."/>
            <input class="bouton" type="button" value=" " />
        </form>

    </div> <br><br>



<!-- Cette secion apparait une fois quel'utilisateur à choisi la tracks -->
    <section class="musiquenlecture">

    <div class="tracksenlecture"></div>
        <div class="titretracksenlecture">
            <p>Titre</p>
        </div>


    </section>
    <!-- -->


    <h1>À découvrir</h1>
    <section class="suggestions">
        <div class="trackspictures img0">
            <h3 class="opactitre titre0"></h3>
            <h3 class="opacartist">Titre</h3>
        </div>

        <div class="trackspictures img1">
            <h3 class="opactitre titre1">Titre</h3>
            <h3 class="opacartist">Titre</h3>
        </div>

        <div class="trackspictures img2">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img3">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img4">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img5">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>
        <div class="trackspictures img6">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img7">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img8">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img9">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img10">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures  img11">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img12">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img13">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>


        <div class="trackspictures img14">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>

        <div class="trackspictures img15">
            <h3 class="opactitre">Titre</h3>
            <h4 class="opacartist">Titre</h4>
        </div>











    </section>
</main>

<script src="script.js"></script>
</body>
</html>