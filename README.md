## Data Science @ SC website.

Uses Next.js, generates a static site at <https://datasciencesc.netlify.app/>

### Modification Instructions

Clone this repo down to your computer.

Install `yarn` and run `yarn` in the root directory.

Make changes/add markdown files to `posts`. If a post is a blog post, set `blog: true`, else if its an information/general page, set `blog:false` and add it to the `navBar` array in [`config.tsx`](./config.tsx)

Test to see if changes look right locally, test with `yarn dev`.

Run `yarn export` to make sure everything compiles properly, and `yarn serve` to test the exported website (at `./out`)

Run `yarn deploy` to compile to static site and push to `gh-pages` branch. Site should update in a few minutes.

### Structure

Home Page is done in [`./pages/index.tsx`](./pages/index.tsx), some of the paragraphs are done in-line, and should be simple enough to edit. The data that would be changed commonly is defined in [`data.tsx`](./data.tsx). Images for each person should be stored in [`./public/images/person/[id].png`](./public/person), where the `id` is some version of their name set in `data.tsx`.

All the other pages are done in Markdown, in `posts`. The `blog` key at the top of each markdown posts defines whether or not this is shown in the blog feed or not.

The `about.md` page is special, `./pages/posts/[id].tsx` tries to match against the `about` pageId (name of file) and adds the officer cards to that page. Any other markdown file is just compiled with `remark` from markdown into HTML.
