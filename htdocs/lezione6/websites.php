<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>websites</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


</head>

<body>



    <?php
    $urls = [
        [
            "#" => "1",
            "name" => "Nasa",
            "url" => "https//www.nasa.gov",
            "commento" => "sito della nasa"
        ],
        [
            "#" => "2",
            "name" => "IBM",
            "url" => "https//www.ibm.it",
            "commento" => "sito di IBM"
        ], [
            "#" => "3",
            "name" => "facebook",
            "url" => "https//www.facebook.it",
            "commento" => "sito di facebook"
        ],[
            "#" => "4",
            "name" => "la dolce vita",
            "url" => "https//www.ladolcevita.it",
            "commento" => "sito mio"
        ],
    ];


    echo '<table class="table table-striped" >';

    echo '<thead>';
    echo '<tr>';

    echo '<th>' . "#" . '</th>';
    echo '<th>' . 'name' . '</th>';
    echo '<th>' . "url" . '</th>';
    echo '<th>' . "descrizione" . '</th>';
    echo '</tr>';
    echo '</thead>';

    echo '<tbody>';

    foreach ($urls as $url) {
        echo '<tr>';
        echo '<td>' . $url['#'] . '</td>';
        echo '<td>' . $url['name'] . '</td>';
        echo '<td> <a href="' . $url['url'] . '">' . $url['url'] . '</a> </td>';
        echo '<td>' . $url['commento'] . '</td>';
        echo '</tr>';
    }
    echo '</tbody>';
    echo '</table>' . '<br>';
    ?>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>