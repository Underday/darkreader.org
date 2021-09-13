// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';

const hURL = 'https://www.joinhoney.com/darkreader';

let browserText = 'extension';
if (navigator.userAgent.includes('Firefox')) {
    browserText = 'for Firefox';
} else if (navigator.userAgent.includes('Edg')) {
    browserText = 'for Edge';
} else if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrom')) {
    browserText = 'for Safari';
} else if (navigator.userAgent.includes('OPR')) {
    browserText = 'for Opera';
} else if (navigator.userAgent.includes('Chromium')) {
    browserText = 'for Chromium';
} else if (navigator.userAgent.includes('Chrome')) {
    browserText = 'for Chrome';
}

const titleHTMLText = `
<div class="up-title">
    Sponsored by these<br><strong>wonderful extensions</strong>
</div>
`;

const containerHTMLText = `
<div class="ups"></div>`;

const hHTMLText = `
<div class="up">
    <a href="${hURL}" class="up-logo-link h-logo-link">Honey</a>
    <span class="up-text">
        <a href="${hURL}" class="up-link">Honey ${browserText}</a>,
        a product of <strong class="h-text-pp">PayPal</strong>.
        Automatically find and apply discounts when you purchase online.
        Join for <strong>free</strong> and get coupons.
        <a href="${hURL}">Learn more</a>.
    </span>
</div>
`;

const tURL = 'https://jointoucan.com/partners/darkreader';

const tHTMLText = `
<div class="up">
    <a href="${tURL}" class="up-logo-link t-logo-link">Toucan</a>
    <span class="up-text t-text">
        <a href="${tURL}" class="up-link">Toucan ${browserText}</a>.
        Learn a language more <a class="tr" data-tr="easy" href="${tURL}">fácilmente</a>.
        Immerse yourself in a new <a class="tr" data-tr="language" href="${tURL}">idioma</a> while you browse the web.
        Join for <strong>free</strong>.
        <a href="${tURL}"><span class="tr" data-tr="Learn more\nabout Toucan">Learn más</span></a>.
    </span>
</div>
`;

const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180';

const macHTMLText = `
<div class="up">
    <a href="${safariURL}" class="safari-logo-link">Dark Reader for Safari</a>
    <span class="up-text">
        Are you a <strong>macOS</strong> user?
        <strong>Try</strong>
        <a href="${safariURL}" class="up-link">Dark Reader for Safari</a>.
    </span>
</section>
`;

const svgPlusIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="#53a1b3" d="M3,0 h2 v3 h3 v2 h-3 v3 h-2 v-3 h-3 v-2 h3 z"/></svg>';

function svgDataURL(svgText) {
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(svgText)}')`;
}

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: color 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
.rec-inplace-h {
    color: var(--color-hover);
    font-weight: bold;
}
.ups {
    border: 0.125rem solid var(--color-control);
    border-radius: 1rem;
    max-width: 35.5rem;
}
.up {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
}
.up + .up {
    border-top: 0.0625rem solid var(--color-control);
}
.up-logo-link {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-block;
    flex: none;
    margin: 0.25rem 0 0.25rem 0.25rem;
    text-indent: -999rem;
    transition: box-shadow 250ms;
}
.up-logo-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.h-logo-link {
    background-color: var(--color-honey);
    background-image: url(/images/honey-logo-white.svg);
    background-position: 50% 52%;
    background-repeat: no-repeat;
    background-size: 6rem auto;
    border-radius: 0.625rem;
    width: 7.5rem;
}
.h-text-pp {
    font-style: italic;
}
.t-logo-link {
    background-color: var(--color-toucan);
    background-image: url(/images/toucan-logo-small.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.625rem;
    width: 7.5rem;
}
.safari-logo-link {
    background-image:
        url(/images/icon-safari-66x66.svg),
        ${svgDataURL(svgPlusIcon)},
        url(/images/darkreader-safari-icon-128.png);
    background-position: 0 50%, center, 4.5rem 50%;
    background-repeat: no-repeat;
    background-size: 3rem, 0.75rem, 3rem;
    border-radius: 0.625rem;
    display: inline-block;
    filter: drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 0)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 0)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 0)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 0)) drop-shadow(0 0 0 var(--color-text));
    flex: none;
    margin: 0.25rem 0 0.25rem 0.25rem;
    text-indent: -999rem;
    transition: filter 250ms;
    min-height: 3rem;
    width: 7.5rem;
}
.safari-logo-link:hover {
    filter: drop-shadow(0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(-0.0625rem 0 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 -0.0625rem 0 hsla(0, 0%, 100%, 1)) drop-shadow(0 0 0.375rem var(--color-text));
}
.up-text {
    flex: auto;
    padding: 1rem;
}
.up-link {
    color: var(--color-highlight);
    font-weight: bold;
}
.up-title {
    font-style: italic;
    max-width: 35.5rem;
    text-align: center;
    text-transform: uppercase;
}
.tr {
    font-style: italic;
    font-weight: bold;
    position: relative;
    transition: all 125ms;
}
.tr:hover {
    background-color: var(--color-toucan);
    color: white;
}
.tr::after {
    background-color: #001b24;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-16 -16 16 16"><path fill="%233da097" d="M-9.582-14.165l-2.471 2.965h-2.836c-.369 0-.666.358-.666.8v4.8c0 .441.297.8.666.8h2.836l2.471 2.964c.418.501 1.137.149 1.137-.565v-11.198c0-.716-.72-1.066-1.137-.566zM-3.899-14.846c2.12 1.5 3.385 4.055 3.385 6.835 0 2.779-1.265 5.334-3.385 6.835-.474.335-1.05.126-1.307-.327-.28-.494-.15-1.147.292-1.459 1.569-1.111 2.506-2.998 2.506-5.049 0-2.052-.937-3.939-2.506-5.05-.442-.313-.572-.966-.292-1.459.279-.494.865-.639 1.307-.326zM-6.92-10.95c.253-.508.83-.69 1.287-.413 1.114.68 1.806 1.967 1.806 3.362s-.692 2.683-1.806 3.363c-.456.278-1.033.097-1.287-.413-.252-.508-.085-1.146.373-1.427.509-.31.826-.893.826-1.522s-.317-1.213-.826-1.523c-.459-.281-.626-.919-.373-1.427z" /></svg>');
    background-position: 0.5rem 0.75rem;
    background-repeat: no-repeat;
    background-size: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem black;
    color: white;
    content: attr(data-tr);
    display: inline-block;
    left: 0;
    opacity: 0;
    padding: 0.5rem 0.5rem 0.5rem 1.75rem;
    pointer-events: none;
    position: absolute;
    top: 100%;
    transition: opacity 125ms;
    white-space: pre;
}
.tr:hover::after {
    opacity: 1;
    pointer-events: all;
}
::selection {
    background-color: var(--color-highlight);
    color: var(--color-text-hover);
}
`;

class BackerHeaderElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', titleHTMLText + containerHTMLText);
        const container = shadowRoot.querySelector('.ups');
        container.insertAdjacentHTML('beforeend', hHTMLText);
        container.insertAdjacentHTML('beforeend', tHTMLText);
        const isMac = navigator.platform.toLowerCase().startsWith('mac');
        if (isMac) {
            container.insertAdjacentHTML('beforeend', macHTMLText);
        }
    }
}

customElements.define('darkreader-backers-header', BackerHeaderElement);
