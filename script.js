//Global variables/element aliases
const mainTile = $("#mainTile");
const portfolioArray = [
   {
      src: "Assets/Art_Tracker_App.jpg",
      desc: "This application was the first group project I worked on in my coding bootcamp. The concept is to provide a user with a way to look up an artist's works across multiple galleries without having to filter through the \"fluff\" of a full-scope search engine. My primary contribution was the component populating results from The Metropolitan Museum."
   },
   {
      src: "Assets/Weather_Dashboard.jpg",
      desc: "This application was built as part of a homework assignment relating to using API calls. It is a simple weather dashboard app that takes a queried city and populates the current conditions and 5-day forecast for that city, while remembering recent searches for quick access in the future."
   },
   {
      src: "Assets/Scheduler_App.jpg",
      desc: "This application was built for another homework assignment relating to utilizing local storage with user inputs and modifying those inputs. I incorporated additional functionality for resetting the schedule, as well as disabling the ability to add a task for an hour that has already passed."
   },
   {
      src: "Assets/Code_Quiz.jpg",
      desc: "This application was built for another homework assignment relating to manipulating the DOM to dynamically generate content with JavaScript, as well as storing some more basic local storage concepts. It was the first \"real\" project given as homework in my coding bootcamp intended to incorporate knowledge spanning all three main elements of a webpage (HTML, CSS (Bootstrap), and JavaScript)."
   }
]

const projectLinkArr = [
   {
      name: "Art Tracking App",
      src: "https://jmcdonald112358.github.io/Art-tracking-app/",
      id: "artTracker",
   },
   {
      name: "Weather Dashboard",
      src: "https://jmcdonald112358.github.io/Weather-Dashboard/",
      id: "weatherApp",
   },
   {
      name: "Work Day Scheduler",
      src: "https://jmcdonald112358.github.io/Work-Day-Scheduler/",
      id: "schedulerApp",
   },
   {
      name: "Code Quiz",
      src: "https://jmcdonald112358.github.io/Code-Quiz/",
      id: "codeQuiz",
   }
]

//Function for redrawing page when 'portfolio' button is clicked
function drawPortfolio() {

   //Empty contents of main tile to replace with porfolio cards
   mainTile.empty();

   //Insert title text
   let portfolioTitle = $("<p>").addClass("title has-text-grey-light").text("My Portfolio");
   mainTile.append(portfolioTitle);

   let portfolioContainer = $("<div>").addClass("table-container is-fluid").attr("id", "portfolioContainer");
   mainTile.append(portfolioContainer);

   let portfolioTable = $("<table>").addClass("table has-background-info-dark").attr("id", "portfolioTable");
   $("#portfolioContainer").append(portfolioTable);

   let tableBody = $("<tbody>").attr("id", "tableBody");
   $("#portfolioTable").append(tableBody);

   let tableRow = $("<tr>").attr("id", "tableRow");
   $("#tableBody").append(tableRow);

   //Build portfolio image tiles
   for (let i = 0; i < portfolioArray.length; i++){

      let portfolioItem = $("<td>").attr("id", "item" + i).attr("style", "border: 1px; min-width: 350px;");
      $("#tableRow").append(portfolioItem);

      let portfolioCard = $("<div>").addClass("card has-background-grey-dark").attr("id", "card" + i);
      $("#item" + i).append(portfolioCard);
      
      let cardImage = $("<div>").addClass("card-image").attr("id", "cardImage" + i);
      $("#card" + i).append(cardImage);
      let portfolioImage = $("<figure>").addClass("image is-3by3").attr("id", "image" + i);
      $("#cardImage" + i).append(portfolioImage);
      let imageObj = $("<img>").attr("src", portfolioArray[i].src);
      $("#image" + i).append(imageObj);

      let cardContent = $("<div>").addClass("card-content").attr("id", "cardContent" + i);
      $("#card" + i).append(cardContent);
      let content = $("<div>").addClass("content has-text-light").attr("id", "content" + i).text(portfolioArray[i].desc);
      $("#cardContent" + i).append(content);

   }

   //Empty and redraw nav buttons
   $("#navigation").empty();

   let aboutBtn = $("<button>").addClass("button is-link is-fullwidth mb-4").attr("id", "aboutBtn").text("About me");
   $("#navigation").append(aboutBtn);   

   let contactBtn = $("<button>").addClass("button is-link is-fullwidth").attr("id", "contactBtn").text("Contact me!");
   $("#navigation").append(contactBtn);   

   //Event listeners for nav buttons
   $("#aboutBtn").click(function(event) {
      event.preventDefault();
      drawAboutMe();
   })

   $("#contactBtn").click(function(event){
      event.preventDefault();
      drawContactForm();
   })

}

//Function for redrawing page when 'contact' button is clicked
function drawContactForm() {

   //Empty contents of main tile to replace with portfolio cards
   mainTile.empty();

   //Insert title text
   let contactTitle = $("<p>").addClass("title has-text-grey-light").text("Contact me:");
   mainTile.append(contactTitle);

   //Construct form elements
   //Note: form elements don't actually save and get submitted anywhere yet

   //Contact name field
   let contactName = $("<div>").addClass("field").attr("id", "contactName");
   mainTile.append(contactName);

   let nameLabel = $("<label>").addClass("label").text("Your name:");
   $("#contactName").append(nameLabel);

   let nameControl = $("<div>").addClass("control").attr("id", "nameControl");
   $("#contactName").append(nameControl);

   let nameInput = $("<input>").addClass("input").attr("type", "text").attr("placeholder", "Enter first and last name");
   $("#nameControl").append(nameInput);

   //Email address field
   let emailAddress = $("<div>").addClass("field").attr("id", "emailAddress");
   mainTile.append(emailAddress);

   let emailLabel = $("<label>").addClass("label").text("Email address:");
   $("#emailAddress").append(emailLabel);

   let emailControl = $("<div>").addClass("control").attr("id", "emailControl");
   $("#emailAddress").append(emailControl);

   let emailInput = $("<input>").addClass("input").attr("type", "text").attr("placeholder", "Enter email address where I can direct my response");
   $("#emailControl").append(emailInput);

   //Message field
   let message = $("<div>").addClass("field").attr("id", "message");
   mainTile.append(message);

   let messageLabel = $("<label>").addClass("label").text("Message:");
   $("#message").append(messageLabel);

   let messageControl = $("<div>").addClass("control").attr("id", "messageControl");
   $("#message").append(messageControl);

   let messageInput = $("<textarea>").addClass("textarea").attr("placeholder", "Add the details of your inquiry");
   $("#messageControl").append(messageInput);

   //Action buttons
   let actionButtons = $("<div>").addClass("field is-grouped is-justify-content-center my-6").attr("id", "actionButtons");
   mainTile.append(actionButtons);

   let submitControl = $("<div>").addClass("control").attr("id", "submitControl");
   $("#actionButtons").append(submitControl);

   let submitBtn = $("<button>").addClass("button is-success").text("Submit!");
   $("#submitControl").append(submitBtn);

   let cancelControl = $("<div>").addClass("control").attr("id", "cancelControl");
   $("#actionButtons").append(cancelControl);

   let cancelBtn = $("<button>").addClass("button is-light").text("Cancel");
   $("#cancelControl").append(cancelBtn);


   //Empty and redraw nav buttons
   $("#navigation").empty();

   let aboutBtn = $("<button>").addClass("button is-link is-fullwidth mb-4").attr("id", "aboutBtn").text("About me");
   $("#navigation").append(aboutBtn);  

   let portfolioBtn = $("<button>").addClass("button is-link is-fullwidth").attr("id", "portfolioBtn").text("My portfolio");
   $("#navigation").append(portfolioBtn);

   //Event listeners for nav buttons
   $("#aboutBtn").click(function(event) {
      event.preventDefault();
      drawAboutMe();
   })

   $("#portfolioBtn").click(function(event){
      event.preventDefault();
      drawPortfolio();
   })

}

//Function for drawing 'About me' and redrawing when button is clicked
function drawAboutMe() {
   
   mainTile.empty();
   
   let aboutMeTitle = $("<p>").addClass("title has-text-grey-light").attr("id", "aboutMeTitle").text("About me");
   mainTile.append(aboutMeTitle);

   let contentP1 = $("<p>").text("My name is Justin McDonald and I am a student learning to be a web developer! Currently, I work in technology for a local sales enablement company called Primary Intelligence as a Product Manager. As a Product Manager, I oversee the design and implementation of roughly 40% of our (very large) proprietary web app, TruVoice, which is a robust dashboard and analytics tool we built to support the service we provide to our clients.");
   mainTile.append(contentP1).append("<br>");

   let contentP2 = $("<p>").text("I decided to pursue learning web dev partly because I've always been interested in coding, partially because I feel it's the logical next step in my career path, and partially because I'm hoping to stay with my company and join the dev team to do the actual coding of our system, instead of just speccing the logic for it. But at the very least, the knowledge from this class will benefit my role as Product Manager too, having a deeper understanding of the underlying technologies that are used to implement the features I design.");
   mainTile.append(contentP2).append("<br>");

   let contentP3 = $("<p>").text("Now that I have progressed through the web dev bootcamp a ways, I am updating this portfolio page to showcase some of the skills I've learned thus far. Feel free to poke around and check out some of the improvements I've managed to work in outside the obvious UI changes!");
   mainTile.append(contentP3);

   //Project link buttons
   let projectBtns = $("<div>").addClass("buttons are-medium is-grouped is-justify-content-center my-6").attr("id", "projectBtns");
   mainTile.append(projectBtns);

   for (let i = 0; i < projectLinkArr.length; i++){
      let link = $("<a>").addClass("button is-rounded is-primary mx-5").attr("href", projectLinkArr[i].src).attr("id", projectLinkArr[i].id).attr("target", "_blank").text(projectLinkArr[i].name);

      $("#projectBtns").append(link);
   }

   //Empty and redraw nav buttons
   $("#navigation").empty();

   let portfolioBtn = $("<button>").addClass("button is-link is-fullwidth mb-4").attr("id", "portfolioBtn").text("My portfolio");
   $("#navigation").append(portfolioBtn);
   
   let contactBtn = $("<button>").addClass("button is-link is-fullwidth").attr("id", "contactBtn").text("Contact me!");
   $("#navigation").append(contactBtn);  

   //Event listeners for buttons
   $("#portfolioBtn").click(function(event){
      event.preventDefault();
      drawPortfolio();
   })

   $("#contactBtn").click(function(event) {
      event.preventDefault();
      drawContactForm();
   })
}

//Initial page load routes to About Me
drawAboutMe();