'use strict';

module.exports = `
/*!
 * @version {{ pkg.name }} - {{ pkg.version }}
 * @hash {{ meta.hash }}
 * @width {{meta.width}}
 * @height {{meta.height}}
 * @sprite_path {{meta.sprite_path}}
 * @sprite_path_lossy {{meta.sprite_path_lossy}}
 */
{%- for icon in frames %}
{%- if icon.name.indexOf('ww-online') == 0 %}
.srp-page .ww-small .ww-online,
{%- endif %}
{%- if icon.name.indexOf('ww-offline') == 0  %}
.srp-page .ww-small .ww-offline,
{%- endif %}
.{{ meta.prefix }}{{ icon.name }}{%- if not loop.last %},{%- endif %}
{%- endfor %} {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  font-size: 0;
  background: url({{ meta.sprite_path }});
  background-repeat: no-repeat;
{%- if meta.sprite_path_lossy %}
  _background-image: url({{meta.sprite_path_lossy}});
{%- endif %}
}
/* 坐标信息 */
{%- for icon in frames %}
{%- if icon.name.indexOf(':hover') != -1 %}
.icon-tag:hover .{{ meta.prefix }}{{ icon.name|replace(':hover','') }},
.icon-hover .{{ meta.prefix }}{{ icon.name|replace(':hover','') }},
.{{ meta.prefix }}{{ icon.name|replace(':hover', '-parent:hover') }} .{{ meta.prefix }}{{ icon.name|replace(':hover','') }},
.{{ meta.prefix }}{{ icon.name|replace(':hover', '-parent-hover') }} .{{ meta.prefix }}{{ icon.name|replace(':hover','') }},
.{{ meta.prefix }}{{ icon.name|replace(':hover','-hover') }},
{%- endif %}
{%- if icon.name.indexOf('ww-online') == 0 %}
.srp-page .ww-small .ww-online,
{%- endif %}
{%- if icon.name.indexOf('ww-offline') == 0  %}
.srp-page .ww-small .ww-offline,
{%- endif %}
.{{ meta.prefix }}{{ icon.name }}{
  background-position:{{ icon.frame.x }}px {{ icon.frame.y}}px;
  width:{{ icon.frame.w }}px;
  height:{{ icon.frame.h }}px;
}
{%- endfor %}`;