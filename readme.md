# POC for syntax highlight

I would like to share my findings about the JavaScript highlighting library.
There are three libraries available for this task:

- [Highlighting.js](https://github.com/highlightjs/highlight.js)
- [Prism.js](https://prismjs.com)
- [Torchlight](https://torchlight.dev/)

The latter is a paid tool, free only for opensource/no profit, so - to exclude future license problems - I didn't it in this analysis.

In this analysis I considered a few factors:

- Language support
- Themes and customization
- License
- Documentation
- Currently maintained
- Compatibility with Vite bundler
- Bundle size

## Language support

Both libraries support a wide variety of programming languages and markup formats.
However, for our application we currently only need the JavaScript language.

## Themes and Customization

Highlight.js offers many more ready-made theme options compared to Prismjs.

## License

Both libraries have the same license and allow use for commercial use, modification, distribution and private use.
"A permissive license similar to the BSD 2-clause License, but with a third clause that prohibits others from using the name of the copyright holder or its contributors to promote derivative products without written consent."

## Documentation

Highlight.js GitHub has more documentation than Prismjs, but both libraries are well documented.

## Currently maintained

I evaluated actively developed code and actively closed Issues for both libraries.

Looking to the last commits, it looks like Prismjs is not still actively developed because the last commits has been made 2/3 years ago.
Same for the issues: Prismjs have many open issues in the last few years.
The inactivity in Prismjs is because they are working on v2 and hence they have freezed code and support.
But v2 is in development from too many years to look active and to me it looks too risky to commit to the package.

Highlight.js instead it looks actively developed, with the last commit around a week ago.

## Compatibility with Vite bundler

Both libraries are compatible with the Vite bundle.

However only Highlight.js supports tree shaking importing just the language syntax we need.
Prismjs instead - to support optimized bundling/tree shaking - requires a Babel plugin "babel-plugin-prismjs" that requires extra configuration in Vite and rollup.
Ref: <https://github.com/mAAdhaTTah/babel-plugin-prismjs>

## Bundle size

Highlights.js has a very small footprint with just few kB.
I haven't tested Prismjs as it has many disadvantages.

## Final consideration

In my opinion, Highlight.js seems like an appropriate choice for this project.

## PoC

I set up a quick PoC with Highlight.js and it worked perfectly.
Ref: <https://github.com/FP22FD/poc-highlight-js>
Netlify: <https://highlight-js-poc.netlify.app/>

## Extras

- A internal discussion between Prismjs & Highlight.js users: <https://github.com/highlightjs/highlight.js/issues/3625>

## Note

This summary is based from my manual research and not automatically generated from an AI tool like chatGPT.
