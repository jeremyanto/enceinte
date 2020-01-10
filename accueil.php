<!DOCTYPE html>
<html>

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name ="viewport" content="width=device-width,initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet"  href="stylebis.css">
</head>


<body class="body">
	 <div class="showcase">
         <nav class="navaccueil">
           <a id="nav-toggle" href="#" onclick="openNav()"><span></span></a>
           <div class="profil"><img src="img/profil.png"/></div>
         </nav>


     </div>
     <div id="snav">
         <a id="nav-toggle2" class="close" onClick="closeNav(this)">&times;</a>

         <ul class="navigation">
             <li><a href="accueil.php">Accueil</a></li>
             <li><a href="playlist.html">Playlist</a></li>
             <li><a href="recherche.php">Recherche</a></li>
             <li><a href="tracks.php">Playlist's tracks</a></li>
             <li><a href="inscription.php">Log out</a></li>
             <li><a href="inscription.php">S'inscrire</a></li>
             <li><a href="inscription.php">Se connecter</a></li>

         </ul>

     </div>

  
  <section class="services" style="height: 200px;">
    <div class="containeraccueil grid-2 center">
      <div>
        <i class="fab fa-twitter fa-3x"></i>
        
        <h3 class="h3">Twitter</h3>
       <img src="img/twitter.png" style="height: 100px;">
      </div>
      <div>
        <i class="fas fa-spotify fa-6x"></i>
        <h3 class="h">Spotify</h3>
        <img src="img/spotify.png" style="height: 100px;">

      </div>
     
    </div>
  </section>

  <!-- About -->
  <section class="about bg-light">
    <div class="containeraccueil">
      <div class="grid-2">
        <div class="center">
          <i class="fas fa-laptop-code fa-10x"></i>

          <img src="img/enceinte.jpg"  >
        </div>
        <div>
          <h3></h3>
          <p>

          </p>
        </div>
      </div>
    </div>
  </section>

     <script src="script.js"></script>

  <footer class="center bg-dark">
    
  </footer>

</body>
</html>
