SUAI bundled fonts
===================

All fonts in this directory are distributed under the SIL Open Font
License, Version 1.1 (https://scripts.sil.org/OFL). They are bundled
here (variable woff2) so that suai-html/suai.bundle.css is self-contained
and does not depend on a third-party font CDN.

Files:

- roboto-flex-full.woff2
  Family: Roboto Flex (variable: wght 100-1000, wdth 25%-151%)
  Source: Google Fonts / Material Design (googlefonts/roboto-flex)
  Licence: SIL OFL 1.1
  Used by: suai-css/themes/pla.css (--su-font-body)

- noto-sans-thai-flex.woff2
  Family: Noto Sans Thai (variable: wght 100-900, wdth 62.5%-100%)
  Source: Google Fonts (googlefonts/noto-fonts)
  Licence: SIL OFL 1.1
  Used by: suai-css/themes/nok.css (--su-font-body)

- DM-Sans-flex.woff2
  Family: DM Sans (variable: wght 100-1000, opsz 9-40)
  Source: https://github.com/googlefonts/dm-fonts
           (Sans/fonts/variable/DMSans[opsz,wght].ttf)
  Licence: SIL OFL 1.1
  Converted from ttf to woff2 with `fonttools ttLib.woff2 compress`.
  Used by: suai-css/themes/kob.css (--su-font-body, --su-font-display)

- Saira-flex.woff2
  Family: Saira (variable: wght 100-900, wdth 50%-125%)
  Source: https://github.com/google/fonts/blob/main/ofl/saira
           (Saira[wdth,wght].ttf)
  Licence: SIL OFL 1.1
  Converted from ttf to woff2 with `fonttools ttLib.woff2 compress`.
  Used by: suai-css/themes/kob.css (--su-font-brand)

The @font-face declarations for all of the above live in
suai-css/themes/fonts/fonts.css.
