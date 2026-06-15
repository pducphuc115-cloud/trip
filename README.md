# trip

A responsive travel guide website for 10 popular destinations in China.

## Files

- `index.html`: website entry.
- `login.html`: standalone demo login page.
- `profile.html`: standalone user profile page.
- `styles.css`: responsive layout and visual design.
- `script.js`: home page search, filters, sorting, favorites and detail rendering.
- `account.js`: login and profile interactions.
- `旅行攻略网站需求.md`: product requirements.
- `assets/`: downloaded scenic images.

## Run

Open `index.html` directly in a browser, or serve this folder with any static file server.

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Features

- Search and filter 10 scenic destinations.
- View destination detail guides.
- Save favorites in the browser.
- Use `login.html` to create a local demo profile.
- View profile stats, saved destinations and preference-based recommendations.
