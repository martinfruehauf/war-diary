# War diary of Josef Frühauf

## About
This project aims to create a website that displays the war diary of my grandfather Josef Frühauf during WWII.   
Initially, it will be in the original language German, however I am aiming at a translated (English) version as well. 
  
## Project Ideation
In the following, I'm going to answer questions from [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Thinking_before_coding)
intended for Project Ideation.

#### What exatlcy do I want to accomplish?
1. Display to content of the diary in a convenient manner
2. Display additional information, e.g. explanation of military abbreviations
3. Display the locations on Google Maps
4. Create an interactive timeline
5. Translate the website into English (as well)
6. Create an (offline/standalone) app

# How could a website bring me to my goals?
To create a website seems to be the best solution to achieve all of the goals.
I could simply upload the pdf of the diary, but that would give the reader the freedom to
see the locations right away. Also in seems like a good basis for create the app afterwards.

#### What needs to be done, and in what order, to reach my goals?
1. The diary was originally written with a typewriter. Attempts to use optical character
recognition (OCR) failed. The whole text must be typed in by hand. 
2. Research all abbreviations, former German names of towns etc.
3. Find locations mentioned in the diary and write down coordinates
4. Find a way to create time line bar
5. Translate everything into English. Mainly the diary itself of course
6. I am going to try out services that are capable of converting the HTML etc. into an app.
If this doesn't turn out to be satisfying, it opens up a whole new chapter...
## Implementation
It utilizes HTML, CSS, JavaScript for now.