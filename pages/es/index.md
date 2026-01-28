---
layout: main.njk
title: La app de Tránsito Universal
description: Move es una aplicación de transporte público universal para Android que permite a los usuarios consultar las estimaciones de tiempo de autobuses, tranvías y otros métodos de transporte de forma rápida y eficiente.
keywords: public transit app, bus app

signUpOpen: false
formUrl: https://mail.movetransit.app
isHero: true
---


<div class="heroContainer oh gc" id="hero">

<div class="vc ac">

# Move

La app de Tránsito Universal

<a class="accentButton" href="#sign-up">{{ strings[page.lang].signUp }}</a>

</div>
{% include "./_includes/components/blobs.njk" %}
</div>

<section class="gc" id="introduction">
<div class="vc ac banner">

## ¿Qué es Move?

Move es una app de transporte público ultrarrápida para Android, diseñada para llevarte a donde necesitas sin las complicaciones ni los retrasos habituales en la mayoría de las herramientas de navegación.

Diseñada con un enfoque local, Move almacena datos esenciales directamente en tu dispositivo para garantizar tiempos de carga instantáneos y un acceso fiable a la información, incluso con mala conexión.

Además, su enfoque en la usabilidad crea una experiencia de transporte fluida que prioriza el acceso inmediato a lo que necesitas. Esto la convierte en la app de transporte universal ideal para quienes se desplazan a diario y valoran la velocidad y la facilidad de uso por encima de todo, ya sea en autobús, tranvía o cualquier otro medio de transporte.

En pocas palabras, es la app de transporte universal para todos.

</div>
</section>

<section class="gc" id="features">
<div class="hc ac reflow jse card">
<div class="vc ac">
<div class="hc oh" id="featureContainer">

<div class="featureEntry vc">

## Nunca vuelvas a perder un bus

Move is fast, giving you the information of your favorite stops as fast as possible so you can always be on time.<br>
Muévete rápido, brindándote la información de tus paradas favoritas lo más rápido posible para que siempre llegues a tiempo.

</div>

<div class="featureEntry vc">

## En un solo lugar

¿Viajas a menudo?<br><br>
Move unifica todos tus servicios de transporte en un solo lugar para que puedas planificar fácilmente tus traslados.

</div>

<div class="featureEntry vc">

## Constantemente creciendo

Constantemente añadimos y planificamos funciones para Move. ¡También estamos añadiendo proveedores para dar soporte a más ubicaciones cerca de ti!

</div>

</div>

<div id="featureIndicator" class="hc"></div>

</div>
{% include "./_includes/components/logoPhone.njk" %}
</div>
</section>

{% include "./_includes/components/providers.njk" %}

<section id="sign-up" class="gc">
<div class="hc ac reflow jse card">

{% if not signUpOpen %}
## Beta Abierta proximamente!
{% else %}
{% include "./_includes/components/signupForm.njk" %}
{% endif %}

{% include "./_includes/components/ssphone.njk" %}

</div>
</section>

{% include "./_includes/components/recentArticles.njk" %}
