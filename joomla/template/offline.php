<?php
defined('_JEXEC') or die;
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
    <jdoc:include type="head" />
</head>
<body style="background:#0f0e0d;color:#ece2d6;font-family:system-ui,sans-serif">
    <div style="max-width:480px;margin:12vh auto;text-align:center">
        <h1 style="color:#f97316">MANGAL61</h1>
        <jdoc:include type="message" />
        <?php echo $this->getBuffer('modules', 'offline'); ?>
    </div>
</body>
</html>
