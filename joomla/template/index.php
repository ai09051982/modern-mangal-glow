<?php
/**
 * MANGAL61 — шаблон сайта для Joomla 6.
 * Одностраничное приложение (React/Vite), собранное в /assets.
 */
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Uri\Uri;

/** @var Joomla\CMS\Document\HtmlDocument $this */
$app       = Factory::getApplication();
$wa        = $this->getWebAssetManager();
$templateUrl = Uri::root(true) . '/templates/' . $this->template;

$wa->getRegistry()->addExtensionRegistryFile('templates.' . $this->template);
$wa->usePreset('template.mangal61');

$this->setMetaData('viewport', 'width=device-width, initial-scale=1.0');
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
    <jdoc:include type="metas" />
    <jdoc:include type="styles" />
    <jdoc:include type="scripts" />
</head>
<body class="site">
    <jdoc:include type="modules" name="topbar" style="none" />

    <div id="root"></div>

    <?php if ($this->countModules('main')) : ?>
        <div class="joomla-content container">
            <jdoc:include type="message" />
            <jdoc:include type="component" />
            <jdoc:include type="modules" name="main" style="none" />
        </div>
    <?php endif; ?>

    <jdoc:include type="modules" name="footer" style="none" />
    <jdoc:include type="modules" name="debug" style="none" />
</body>
</html>
