# WebHomePage

This repository contais the files deployed on my personnal web site.

## What is it ?

It's an enhanced *resumé* (CV) including things like:
* CV, long version (can't fit on a one-pager)
* Skill list, as exhaustive as possible
* a section about me, hobbies, values, ...
* an extranal links section (to my blog, my github,....)

Navigation is done through a navigation bar.

Two languages (english and french) are available.

## how it's done ?

Mostly static webpages, in the sense no processing is done server side.

Most pages are pure static, as an exception, the skills page is generated (client-side) from javascript data.
This listing is largely more maintenable.

For each page/language combinaison, a separate file must be created, which name SHALL be in the form:

    <pagename>.<language_code>.html

This scheme allows genrating navigation links of the navbar automatically.
Also, adding a language should be technically easy (But need manual translation !), impliing only few modification in navbar HTML skeleton.

