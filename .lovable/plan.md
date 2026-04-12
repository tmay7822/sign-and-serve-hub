

## Create llms.txt and Update robots.txt

### Files

1. **Create `public/llms.txt`** — full content as specified by the user
2. **Modify `public/robots.txt`** — add two lines after the existing `Sitemap:` line:
   ```
   # AI Language Model Support
   LLMs: https://www.signedontime.com/llms.txt
   ```

Since files in `public/` are served statically, `/llms.txt` will be accessible at `https://www.signedontime.com/llms.txt` after deployment.

### Files Created/Modified
- **Created**: `public/llms.txt`
- **Modified**: `public/robots.txt`

