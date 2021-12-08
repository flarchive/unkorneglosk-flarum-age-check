<?php

/*
 * This file is part of webbinaro/flarum-age-check.
 *
 * Copyright (c) 2021 Eddie Webbinaro.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Unkorneglosk\AgeCheck;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/src/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/src/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
];
