<?php
defined('_JEXEC') or die;

use Joomla\CMS\Uri\Uri;

$templateUrl = Uri::root(true) . '/templates/' . $this->template;
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $this->error->getCode(); ?> — MANGAL61</title>
    <style>
        body { margin:0; background:#0f0e0d; color:#ece2d6; font-family: system-ui, sans-serif;
               display:flex; min-height:100vh; align-items:center; justify-content:center; text-align:center; }
        h1 { font-size:4rem; margin:0; color:#f97316; }
        a  { color:#f97316; }
    </style>
</head>
<body>
    <div>
        <h1><?php echo $this->error->getCode(); ?></h1>
        <p><?php echo htmlspecialchars($this->error->getMessage(), ENT_QUOTES, 'UTF-8'); ?></p>
        <p><a href="<?php echo Uri::root(); ?>">Вернуться на главную</a></p>
    </div>
</body>
</html>
