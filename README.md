# DanceMusicApp

I’m so happy to finally finish the first version of the Angular project I have been working on for several months. As a Deep House music fan, I wanted to develop an app with Angular and the Spotify Api to view the latest tracks and playlists found on the platform of my favorite Djs. I wanted the user to beable to hear snippets of the tracks and then beable to click on a link to play the full version on Spotify.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Authenticate with the Spotify api to get the relevant data to the front end.
- Navigate between Home and other dj pages
- Click on audio snippets of the tracks to get a feel for the record
- Click on the image of the track to navigate to the spotify app to hear the full record

### Screenshots

- Header with Spin me button to authenticate with the Spotify Api.
  ![](src/assets/images/screenshots/header.png)

- Slider Component.
  ![](src/assets/images/screenshots/slider.png)

- Screen to auth app with spotify
  ![](src/assets/images/screenshots/Auth-spotify.png)

- Artist playlist component
  ![](src/assets/images/screenshots/playlist.png)

- Artist top track component
  ![](src/assets/images/screenshots/topTrack.png)

- Footer component
  ![](src/assets/images/screenshots/footer.png)

- small and medium screen nav bar
  ![](src/assets/images/screenshots/nav1.png)

- small and medium screen nav bar
  ![](src/assets/images/screenshots/nav2.png)

### Links

- Code URL: [Dance Music App Code on Git hub](https://github.com/J-R77-stack/dance-Music-App-Angular-App)
- Live Site URL: [ Dance Music App live site](https://dance-music-app-angular-app.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- scss styles
- Bootstrap 5
- Mobile-first workflow
- [Spotify API](https://developer.spotify.com/)
- [Angular](https://angular.dev/)

### What I learned

This was a very difficult project and I spent countless hours trying different things and reading stuff online and also researching the spotify docs to find the information I needed, Somehow after much perseverance I managed to get the app working using various bits of information jumbled together.

The Spotify API provides access to user related data, like playlists and music. The base address of Web API is https://api.spotify.com. The API provides a set of endpoints, each with its own unique path. All requests to Web API require authentication. This is achieved by sending a valid OAuth access token in the request header.

In order to centralize requests to Spotify, I have created a Service called spotify-auth.service.ts, in which I used the PKCE extension to keep my 'client secret' a secret. I created a spotify app in the api to obtain a 'client secret and client id'. This then allowed me to obtain a new access token whenever I made get requests to the api. I then set up the redirect URI to “http://localhost:4200/callback” for development and 'https://dance-music-app-angular-app.vercel.app/callback' for production.

I installed sha.js which will be used to hash with Sha256 which is needed for PKCE in the spotify-auth.service.ts. It allowed me to get a new access token everytime i authenticated with the spotify api instead of having to manually insert it every hour.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
