<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '3.0.3',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'verbb/super-table' => 
  array (
    'class' => 'verbb\\supertable\\SuperTable',
    'basePath' => $vendorDir . '/verbb/super-table/src',
    'handle' => 'super-table',
    'aliases' => 
    array (
      '@verbb/supertable' => $vendorDir . '/verbb/super-table/src',
    ),
    'name' => 'Super Table',
    'version' => '3.0.7',
    'description' => 'Super-charge your Craft workflow with Super Table. Use it to group fields together or build complex Matrix-in-Matrix solutions.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/super-table',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/super-table/craft-4/CHANGELOG.md',
  ),
  'sebastianlenz/linkfield' => 
  array (
    'class' => 'lenz\\linkfield\\Plugin',
    'basePath' => $vendorDir . '/sebastianlenz/linkfield/src',
    'handle' => 'typedlinkfield',
    'aliases' => 
    array (
      '@lenz/linkfield' => $vendorDir . '/sebastianlenz/linkfield/src',
    ),
    'name' => 'Typed link field',
    'version' => '2.1.5',
    'description' => 'A Craft field type for selecting links',
    'developer' => 'Sebastian Lenz',
    'developerUrl' => 'https://github.com/sebastian-lenz/',
  ),
  'craftcms/contact-form' => 
  array (
    'class' => 'craft\\contactform\\Plugin',
    'basePath' => $vendorDir . '/craftcms/contact-form/src',
    'handle' => 'contact-form',
    'aliases' => 
    array (
      '@craft/contactform' => $vendorDir . '/craftcms/contact-form/src',
    ),
    'name' => 'Contact Form',
    'version' => '3.0.0',
    'description' => 'Add a simple contact form to your Craft CMS site',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/contact-form/blob/v2/README.md',
    'components' => 
    array (
      'mailer' => 'craft\\contactform\\Mailer',
    ),
  ),
  'craftcms/contact-form-honeypot' => 
  array (
    'class' => 'craft\\contactform\\honeypot\\Plugin',
    'basePath' => $vendorDir . '/craftcms/contact-form-honeypot/src',
    'handle' => 'contact-form-honeypot',
    'aliases' => 
    array (
      '@craft/contactform/honeypot' => $vendorDir . '/craftcms/contact-form-honeypot/src',
    ),
    'name' => 'Contact Form Honeypot',
    'version' => '2.0.0',
    'description' => 'Add a honeypot captcha to your Craft CMS contact form',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/contact-form-honeypot/blob/main/README.md',
  ),
  'hybridinteractive/craft-contact-form-extensions' => 
  array (
    'class' => 'hybridinteractive\\contactformextensions\\ContactFormExtensions',
    'basePath' => $vendorDir . '/hybridinteractive/craft-contact-form-extensions/src',
    'handle' => 'contact-form-extensions',
    'aliases' => 
    array (
      '@hybridinteractive/contactformextensions' => $vendorDir . '/hybridinteractive/craft-contact-form-extensions/src',
    ),
    'name' => 'Contact Form Extensions',
    'version' => '4.2.2',
    'description' => 'Adds extensions to the Craft CMS contact form plugin.',
    'developer' => 'Hybrid Interactive',
    'developerUrl' => 'https://hybridinteractive.io',
    'documentationUrl' => 'https://github.com/hybridinteractive/craft-contact-form-extensions/blob/master/README.md',
    'changelogUrl' => 'https://github.com/hybridinteractive/craft-contact-form-extensions/blob/master/CHANGELOG.md',
    'components' => 
    array (
      'contactFormExtensionsService' => 'hybridinteractive\\contactformextensions\\services\\ContactFormExtensionsService',
    ),
  ),
  'verbb/image-resizer' => 
  array (
    'class' => 'verbb\\imageresizer\\ImageResizer',
    'basePath' => $vendorDir . '/verbb/image-resizer/src',
    'handle' => 'image-resizer',
    'aliases' => 
    array (
      '@verbb/imageresizer' => $vendorDir . '/verbb/image-resizer/src',
    ),
    'name' => 'Image Resizer',
    'version' => '3.0.4',
    'description' => 'Image Resizer resizes your assets when they are uploaded.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/image-resizer',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/image-resizer/craft-4/CHANGELOG.md',
  ),
  'spicyweb/craft-neo' => 
  array (
    'class' => 'benf\\neo\\Plugin',
    'basePath' => $vendorDir . '/spicyweb/craft-neo/src',
    'handle' => 'neo',
    'aliases' => 
    array (
      '@benf/neo' => $vendorDir . '/spicyweb/craft-neo/src',
    ),
    'name' => 'Neo',
    'version' => '3.6.2',
    'schemaVersion' => '3.6.2',
    'description' => 'A Matrix-like field type that uses existing fields',
    'developer' => 'Spicy Web',
    'developerUrl' => 'https://github.com/spicywebau',
    'documentationUrl' => 'https://github.com/spicywebau/craft-neo/blob/3.6.2/README.md',
    'changelogUrl' => 'https://github.com/spicywebau/craft-neo/blob/3.x/CHANGELOG.md',
    'downloadUrl' => 'https://github.com/spicywebau/craft-neo/archive/refs/tags/3.6.2.zip',
  ),
  'ether/seo' => 
  array (
    'class' => 'ether\\seo\\Seo',
    'basePath' => $vendorDir . '/ether/seo/src',
    'handle' => 'seo',
    'aliases' => 
    array (
      '@ether/seo' => $vendorDir . '/ether/seo/src',
    ),
    'name' => 'SEO',
    'version' => 'v4.0.3',
    'description' => 'SEO utilities including a unique field type, sitemap, & redirect manager',
    'developer' => 'Ether Creative',
    'developerUrl' => 'https://ethercreative.co.uk',
    'documentationUrl' => 'https://github.com/ethercreative/seo/blob/v3/README.md',
  ),
);
