Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

## Code conventions
### Ademruimte en inspringen in HTML
* Inspringen altijd met een tab, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/d65206fb5a9bef7a9d5c0a9ee8f50549df385da0/index.html#L107-L124)
* Inline elementen op dezelfde regel, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/d65206fb5a9bef7a9d5c0a9ee8f50549df385da0/index.html#L39-L54)
* Block elementen op aparte regels, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/d65206fb5a9bef7a9d5c0a9ee8f50549df385da0/index.html#L431-L434)

### Volgorde en nesten van CSS selectors
* CSS gestructureerd op volgorde van HTML. Dus: start met `header`, daarna `nav`, etc. Zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/ae04b5e13ff5ced125c26bf9f8b5cd8961363782/styles/style.css#L1)
* Alle genesten elementen in HTML, zijn ook in CSS genest (onder de betreffende `section` `div` of `header` `nav` `footer`, etc.) en in volgorde van HTML [Zie bijvoorbeeld de nesting van de `section` 'vacancies'](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/ae04b5e13ff5ced125c26bf9f8b5cd8961363782/styles/style.css#L380-L705) 

### Nesten van media queries
* Alle media queries zijn genest in de betreffende CSS selectoren, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/ae04b5e13ff5ced125c26bf9f8b5cd8961363782/styles/style.css#L1-L19)
* De media queries staan onderaan in de styling van de betreffende selector. In dit [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/ae04b5e13ff5ced125c26bf9f8b5cd8961363782/styles/style.css#L21-L41) staat de media query dus onderaan de algemene styling van de `nav`, daarna volgen de genesten selectoren. 

### Naamgeving
* Kebab-casing in HTML en CSS, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/9a30182f18ccecb6b1a8aa75443a3f05bc151d6d/styles/stylesheet.css#L61-L64)
* Naamgeving classes beschrijven (informatie) inhoud van betreffende sectie, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/f82baa1e0b1a3a04611fd139ed3aee0423a79acf/index.html#L128). De class heet hier 'vacancy' en beschrijft hiermee de inhoud van deze sectie, namelijk een vacature
* Naamgeving custom properties overgenomen vanuit [styleguide Drukwerkdeal](https://styleguide.printdeal.cloud/packages/ui-library/6.7.2/?path=/docs/fundamentals-colors--docs), zie [stylesheet](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/f82baa1e0b1a3a04611fd139ed3aee0423a79acf/styles/stylesheet.css#L35-L58)
* CamelCase in JS, zie [voorbeeld](https://github.com/julia-stevens/the-startup-responsive-interactive-website/blob/f82baa1e0b1a3a04611fd139ed3aee0423a79acf/scripts/script.js#L1-L12)

This project is licensed under the terms of the [MIT license](./LICENSE).
