<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* _includes/forms/password */
class __TwigTemplate_b6b0b58a924adc01877d71a761db104c57f66b428eee430fc7ce1dcbf24b0d58 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        craft\helpers\Template::beginProfile("template", "_includes/forms/password");
        // line 1
        echo "<div class=\"passwordwrapper\">";
        // line 2
        $this->loadTemplate("_includes/forms/text", "_includes/forms/password", 2)->display(twig_array_merge($context, ["class" => $this->extensions['craft\web\twig\Extension']->pushFilter(craft\helpers\Html::explodeClass(((        // line 3
$context["class"]) ?? ([]))), "password"), "type" => "password"]));
        // line 6
        echo "</div>
";
        craft\helpers\Template::endProfile("template", "_includes/forms/password");
    }

    public function getTemplateName()
    {
        return "_includes/forms/password";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 6,  41 => 3,  40 => 2,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"passwordwrapper\">
    {%- include '_includes/forms/text' with {
        class: (class ?? [])|explodeClass|push('password'),
        type: 'password',
    } -%}
</div>
", "_includes/forms/password", "/Users/hassanmahmood/Documents/krafft/dev/portfolio/deploy/vendor/craftcms/cms/src/templates/_includes/forms/password.twig");
    }
}
