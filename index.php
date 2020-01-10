<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Enceinte Spotify</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  
  <div class="login">
    <p>Connectez-vous</p>
  <form method="post" action"#"> 
  <br>  <input type="text" placeholder="  Identifiant" id="username" class="name" name="coname"> </br>
  <br>  <input type="password" placeholder="  Mots de Passe" id="password" class="name" name="password"></br> 
<br>  <input type="submit" class="btn1" value="connexion" name="connexion"></br>
<br>  <input type="submit" class="btn" value="Se connecter avec Spotify"></br>
    <p class="pti">Vous n'avez pas encore de compte? <a title="Titre du lien" href="#">Inscrivez-vous
     </a> dès maintenant</p>
     <a href="#" class="forgot">Mots de Passe oublié</a>
    </form>
    </div>
    <div class="shadow"></div>
</body>
</html>

<?php 
try {
    $bdd = new PDO('mysql:host=localhost;dbname=enceinte;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    
} catch (Exception $e) {
    echo "Erreur: ".$e;
}
if(isset($_POST['connexion'])){
    
    $name = $_POST['coname'];
    $password = $_POST['password'];
    
    
        if(!empty($name) AND !empty($password)){;

            $VerifUser = $bdd->query('SELECT * FROM connexion WHERE coname = "'.$name.'" AND password = "'.$password.'"');
            $UserData = $VerifUser->fetch();
            
            
            if($UserData){

                $_POST['coname'] = $UserData['coname'];
                $_POST['password'] = $UserData['password'];

                echo '<p class="echo1">Vous êtes connecté.(attente de redirection)</p>';
            } else { 
           echo '<p class="echo2">Merci de créer un compte</p>';
            }
        }else echo "Un ou plusieurs champs est manquant";
    }

    

?>
