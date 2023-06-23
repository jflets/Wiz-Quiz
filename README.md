# WizQuiz

Welcome to WizQuiz, where coding meets excitement! Immerse yourself in our HTML and JavaScript quizzes, featuring five mind-boggling questions each. Put your coding skills to the test and aim for a top score as you explore the intricacies of HTML or dive into the world of JavaScript. Challenge yourself, expand your coding prowess, and embark on an exhilarating quest for knowledge. Whether you're a coding novice or an experienced developer, WizQuiz offers an engaging platform to enhance your HTML and JavaScript expertise. Join us now and experience the thrill of code-based quizzes at WizQuiz!

![Responsive Mockup](/assets/images/responsive-mockup.png)

# User Experience (UX)

WizQuiz offers immense value to users by providing a platform where they can enhance their coding skills, specifically in HTML and JavaScript.

By participating in the quizzes, users can test their knowledge and understanding of these programming languages in a fun and interactive way. The quizzes consist of questions that challenge users to think critically and apply their coding expertise. Through this process, users can identify areas for improvement and further expand their coding prowess. WizQuiz enables users to track their progress, strive for higher scores, and ultimately gain confidence in their coding abilities. Whether users are beginners seeking to learn or experienced developers aiming to sharpen their skills, WizQuiz delivers value by facilitating an engaging and educational coding experience.

## Key Points

- Information what the game is and how to play.
- Two games are available to play based around HTML and JavaScript.
- A quit button so users can leave the game at anytime.
- A reload button to allow users to try get a higher score.

## Target Audience

- Coding enthusiasts.
- Beginners learning HTML and JavaScript.

## User Stories

1. As a first-time visitor, I want to easily understand what Wizquiz offers, so that I can improve my coding skills.

2. As a client, I want to access the Wizquiz website on any device and have a consistent user experience.

3. As a returning visitor, I want to do different quizzes based on different coding languages.

4. As a first-time visitor, I want to be able to find the social links for Wizquiz easily.

# Design

## Color Scheme

![Color Pallet](/assets/images/new-coolors.png)

The website uses a simple color pallet with high contrasting colors. The color pallet was created using the [Coolors](https://coolors.co) website.

## Typography

Google Fonts was used for the following fonts:

- Anton regular 400 was used across the site.

## Wireframe

The wireframe was created for the overall site using [Figma](https://www.figma.com)

![Wireframe](/assets/images/index-page-wireframe.png)
![Wireframe](/assets/images/game-page-wireframe.png)
![Wireframe](/assets/images/score-page-wireframe.png)

# Mobile Wireframe

![Wireframe](/assets/images/mobile-index-page-wireframe.png)
![Wireframe](/assets/images/mobile-game-page-wireframe.png)
![Wireframe](/assets/images/mobile-score-page-wireframe.png)

# Features

- _Favicon_

  - The page has a custom favicon. This reassures the user that this is a legitimate site. Promoting a positive user experience.

    ![favicon](/assets/images/favicon.png)

- _Landing Page Description_

  - On the landing page there is a description of what the site offers and how the games work. This provides the user with an understanding on how the site works. This will result in the a positive user experience.
    ![Landing page text](/assets/images/landing-page-text.png)

- _Player Name Input_

- The landing page includes a player name input that allows the player to add their name before they can start a quiz. The user must input their name to start a quiz, this makes sure that their nam is displayed throughout the game page. This creates a more personalized user experience.
  ![Player Name](/assets/images/player-name.png)

- _Player Name Display_

- On the game page, the name input by the player will be displayed at the top of the page. This gives the player a more personalized user experience.
  ![Player Name Display](/assets/images/player-name-game-page-screenshot.png)

- _Quiz Choice Buttons_

  - The landing page includes two quiz choice buttons. This allows the user to decide what quiz the would like to take.
  - The buttons have a hover effect that will change the background color of the button to green. This will make it easy for the user to know what button they are clicking. This will result in a positive user experience.
    ![Choice Buttons](/assets/images/choice-buttons.png)

- _Quit Button_

  - On the game page there is a quit button that will allow the user to quit the game at anytime. The button will trigger a popup that asks the sure if they are sure they want to quit. This makes sure that the user doesn't accidentally quit the game. This gives provides a good user experience.
    ![Popup](/assets/images/popup.png)

- _Quiz_

  - The quizzes are made up of 5 questions and each have 4 multiple choice answers. They are based around HTML and JavaScript. The user will select their answer and the next question will be prompted. This make it easy for users to navigate, promoting a good user experience.
    ![HTML Quiz](/assets/images/html-quiz.png)
    ![JavaScript](/assets/images/javascript-quiz.png)

- _Score Page_

  - The score page tells the user how many questions out of five they got right. This lets the user know how well they did but, does not give away any answers allowing the user to learn.
  - The score page also starts with the users inputted name. This creates a more personalized user experience.
    ![Score Page](/assets/images/score-page.png)

- _Reload Button_

  - On the bottom of the score page there is a reload button, that will reload the current game from the beginning. This give the user the option to retry and get a higher score than the last game. This promotes a good user experience.
    ![Reload Button](/assets/images/reload-button.png)

- _The Footer_

  - The footer section includes social links and another clickable logo. The links will open in a new tab allowing easy navigation. The clickable logo takes the user back up to the landing page section for easy navigation.
  - The footer is valuable to the user as it encourages them to connect via social media.
    ![Footer](/assets/images/socialmedia-links.png)

- _Error 404 Page_

  - The site includes a dedicated Error 404 page, that will redirect a user back to the landing page after 10 seconds. This makes sure the user does not get lost and creates a good user experience.
    ![Error 404](/assets/images/404-page.png)

## Features Left to Implement

- _More Quizzes_

  - Add more coding quizzes based on other languages to give more verity to the user. This will also allow users to test their knowledge of different coding languages.

- _Quiz Difficulty_

  - Add the option for a user to choose the level of difficulty for the chosen quiz. This will allow a user to improve their skills as they learn more.

# Accessibility

Throughout coding this site I kept accessibility in mind, to ensure that the website is user friendly for any user. I did this by:

- Using semantic HTML.
- Using descriptive aria labels for all links.
- Providing information for screen readers when using icons - such as footer icons.

# Technologies Used

HTML, CSS and JavaScript where used to create the whole site.

# Frameworks, Libraries and Programs Used

Figma - To create wireframe.

Git - For version control.

Github - To save and share files for the site.

VScode - IDE used to code the site.

Google Fonts - To import fonts used on the site.

Font Awesome - To import the icons used on the site.

Google Dev Tools - To test and trouble shoot features and solve issues withe the responsiveness of the site.

[TechSini](https://techsini.com/multi-mockup/) - To create responsive mockups.

# Testing

## Screen Size Testing

- I used chrome developer tools to make sure that the site was responsive and worked on multiple screen sizes.

## Lighthouse Testing

I used Lighthouse in the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

Index.html
![Index Lighthouse Score](/assets/images/index-lighthouse-test.png)

Game-page.html
![Game Page Lighthouse Score](/assets/images/game-page-lighthouse-test.png)

404.html
![Error 404 Page](/assets/images/404-page-lighthouse-test.png)

Mobile test
![Mobile Test](/assets/images/mobile-lighthouse-test.png)

In the mobile test the accessibility is reduced due to not having enough contrast. I do not feel that this is an issue as the colors used have high contrast and the site is easily readable.

## Validator Testing

- _HTML_

  - No errors or warnings returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjflets.github.io%2FWiz-Quiz%2F)

- _CSS_

  - No errors or warnings returned when passing through the official [W3C Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjflets.github.io%2FWiz-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- _JavaScript_
  - No errors or warnings returned when passing through the official [jshint](https://jshint.com/)

## Solved Bugs

1. When choosing a quiz the title on the game page would not display the name of the quiz the user had chosen. To fix this I added an if else statement that decides if the user has chosen the javascript quiz else it will will display HTML Quiz.

2. When playing the selected quiz both sets of questions would show, despite the users choice. To fix this i added a localStorage object to the start buttons on th index page. Then create the selectedQuizType variable that determines which set of quiz data to use (quizDataHTML or quizDataJavaScript).

3. When running a lighthouse test on the index.html pager the following error came up in the console, script.js:131 Uncaught TypeError: Cannot set properties of null (setting 'innerText'). The error is caused because the I was trying to load the JavaScript before the element. To fix this i removed the script ath the bottom of the index.html page.

## Testing User Stories

1. As a first-time visitor, I want to easily understand what Wizquiz offers, so that I can improve my coding skills.
   ![Landing page text](/assets/images/landing-page-text.png)

2. As a client, I want to access the Wizquiz website on any device and have a consistent user experience.
   ![Responsive Mockup](/assets/images/responsive-mockup.png)

3. As a returning visitor, I want to do different quizzes based on different coding languages.
   ![HTML Quiz](/assets/images/html-quiz.png)
   ![JavaScript](/assets/images/javascript-quiz.png)

4. As a first-time visitor, I want to be able to find the social links for Wizquiz easily.
   ![Footer](/assets/images/socialmedia-links.png)

## Full Testing

To fully test the site I carried out the following tests using a multiple browsers (Google Chrome, Safari, Microsoft Edge) and different devices (Macbook Pro 13 inch, Iphone XS max, Ipad, Window Desktop with 28 inch monitor)

| Feature                                     | Expected Outcome                                                                                | Testing Performed | Result                                                              | Pass/Fail |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------- | --------- |
| Player name input                           | Allow user to enter a player name                                                               | Type player name  | User can type a player name                                         | Pass      |
| Quiz choice buttons, no player name entered | If the user has not entered a player name and alert will show and the quiz will not start       | Click button      | User is prompted to enter player name and quiz does not start       | Pass      |
| Quiz choice buttons                         | Take the user to the corresponding quiz and only displays the questions for that specific quiz. | Click button      | User is taken to corresponding quiz                                 | Pass      |
| Quit button                                 | Triggers a modal pop up. The user cannot click outside the modal                                | Click button      | Modal pops up and user cannot click outside modal                   | Pass      |
| Modal yes button                            | Takes user back to landing page                                                                 | Click button      | User is taken back to landing page                                  | Pass      |
| Modal no button                             | Closes modal                                                                                    | Click button      | Modal closes                                                        | Pass      |
| Quiz answer buttons                         | User can only select one answer                                                                 | Click answer      | Only one answer can be selected                                     | Pass      |
| Submit button                               | Submits user answer and moves to next question                                                  | Click button      | User is taken to next question                                      | Pass      |
| Reload button                               | Reloads the quiz with a different random set of questions                                       | Click button      | Quiz is restarted and a different set of random questions is loaded |
| Social media icon link                      | Opens a separate tab and loads social media page                                                | Click icon        | Opens social media page in new tab                                  | Pass      |

# Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, go to the Settings tab.
- Scroll down the page to pages, then navigate to the branch dropdown menu.
- From the menu select main/master branch.
- once selected press save and the page will automatically refresh with a detailed banner om the top to indicate successful deployment.

The live link can be found here - https://jflets.github.io/Wiz-Quiz/

# Credits

## Content

- The modal pop up functionality was taken from [Youtube](https://youtu.be/MBaw_6cPmAw), the code was adjusted and changed to suit my needs.
- The quizzes on the game page where taken from [Youtube](https://youtu.be/CqddbIrEM5I), the code was adjusted and changed to suit my needs.
- The social media links in the footer where taken from [Fletfit Project](https://github.com/jflets/FletFit-project-1-).
