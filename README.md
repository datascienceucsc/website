## WIP

SSG'd site at <https://datascienceslugs.github.io/website/> works.

### instructions

Install with `yarn` in the root directory.

Test locally with `yarn dev`, `yarn deploy` to compile to static site and push to `gh-pages` branch.

### Structure

Home Page is done in [`./pages/index.tsx`](./pages/index.tsx), some of the paragraphs are done in-line, and should be simple enough to edit. The data that would be changed commonly is defined in [`data.tsx`](./data.tsx). Images for each person should be stored in [`./public/images/person/[id].png`](./public/person), where the `id` is some version of their name set in `data.tsx`.

All the other pages are done in Markdown, in `posts`. The `blog` key at the top of each markdown posts defines whether or not this is shown in the blog feed or not.
