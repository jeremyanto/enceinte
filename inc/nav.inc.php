<div id="snav">
    <a class="close" onClick="closeNav(this)">&times;</a>

    <ul class="navigation">
        <li><a href="accueil.html">Accueil</a></li>
        <li><a href="playlist.php">Playlist</a></li>
        <li><a href="recherche.php">Recherche</a></li>
        <?php if( userConnect() ) : ?>
        <li><a href="#">Déconnexion</a></li>
        <?php else : ?>
        <li><a href="connexion.php">Connexion</a></li>
        <?php endif; ?>

    </ul>

</div>