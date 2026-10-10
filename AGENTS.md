<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep professional journey facts, communication competencies and visual evidence in browser-safe data modules under src/lib, separate from the interactive components, so attribution and filtering can be tested independently of presentation.
- Render the interactive About section inside the existing home page and preserve its anchor, so shared links and the surrounding portfolio stay intact.
- Keep project summaries, thematic cover mappings, work tools and education in browser-safe src/lib modules; this separates factual content from its presentation and keeps category filters testable.
- Treat institutional logos as contextual education references, not the portfolio brand or favicon; this avoids implying university ownership or endorsement.
