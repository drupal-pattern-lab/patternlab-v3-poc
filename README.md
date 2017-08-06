[![Build Status](https://travis-ci.org/drupal-pattern-lab/edition-php-drupal-standard.svg?branch=master)](https://travis-ci.org/drupal-pattern-lab/edition-php-drupal-standard)

# Experimental Pattern Lab Monorepo + POC for Pattern Lab v3 Ideas

To run:
1. `npm run setup` to bootstrap lerna + install composer dependencies (make sure symlinks between packages/pattern-lab and the vendor folder are created)
2. Run `npm run start` in one tap + `npm run start:styleguidekit` in a second tab (temporary workaround to duplicate watch tasks) to start the PL-specific build tasks + watch the Pattern Lab styleguidekit assets pl3 folder for changes


## Prerequistes

- [`composer`](https://getcomposer.org)

## First Time Install

Run this command (Assuming you wanted it in a directory called `FOLDERNAME`):

```bash
composer create-project --repository '{ "type": "vcs", "url": "https://github.com/drupal-pattern-lab/edition-php-drupal-standard" }' pattern-lab/edition-drupal-standard
```

Select a starterkit from menu. If asked about replacing files, do it.

Commit new files generated.

## Using It

After installing and committing, others cloning the repo need to run `composer install` to install dependencies.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### One line start

This will compile PL and watch for changes while running the local server:

    composer start

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    php core/console --generate

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a separate window type:

    php core/console --server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Install a StarterKit

To install a near-empty StarterKit as a starting point for your project type:

    php core/console --starterkit --init

To install a specific StarterKit from GitHub type:

    php core/console --starterkit --install <starterkit-vendor/starterkit-name>

### Updating Pattern Lab

	composer update

## Other Documentation

These are crucial pieces that contains documentation that is good to understand:

- [`pattern-lab/patternengine-twig`](https://github.com/pattern-lab/patternengine-php-twig)
- [`aleksip/plugin-data-transform`](https://github.com/aleksip/plugin-data-transform)
- [Twig templating language](http://twig.sensiolabs.org/documentation)
