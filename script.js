//Element alias
const mainTile = $("#mainTile");

//Array of portfolio content
const portfolioArray = [
   {
      name: "Art Tracking App",
      src: "https://jmcdonald112358.github.io/Art-tracking-app/",
      repo: "https://github.com/jmcdonald112358/Art-tracking-app",
      img: "Assets/Art_Tracker_App.jpg",
      desc: "This application was the first group project I worked on in my coding bootcamp. The concept is to provide a user with a way to look up an artist's works across multiple galleries without having to filter through the \"fluff\" of a full-scope search engine. My primary contribution was the component populating results from The Metropolitan Museum."
   },
   {
      name: "Weather Dashboard",
      src: "https://jmcdonald112358.github.io/Weather-Dashboard/",
      repo: "https://github.com/jmcdonald112358/Weather-Dashboard",
      img: "Assets/Weather_Dashboard.jpg",
      desc: "This application was built as part of a homework assignment relating to using API calls. It is a simple weather dashboard app that takes a queried city and populates the current conditions and 5-day forecast for that city, while remembering recent searches for quick access in the future."
   },
   {
      name: "Work Day Scheduler",
      src: "https://jmcdonald112358.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/jmcdonald112358/Work-Day-Scheduler",
      img: "Assets/Scheduler_App.jpg",
      desc: "This application was built for another homework assignment relating to utilizing local storage with user inputs and modifying those inputs. I incorporated additional functionality for resetting the schedule, as well as disabling the ability to add a task for an hour that has already passed."
   },
   {
      name: "Code Quiz",
      src: "https://jmcdonald112358.github.io/Code-Quiz/",
      repo: "https://github.com/jmcdonald112358/Code-Quiz",
      img: "Assets/Code_Quiz.jpg",
      desc: "This application was built for another homework assignment relating to manipulating the DOM to dynamically generate content with JavaScript, as well as using some basic local storage concepts. It was the first \"real\" project given as homework in my coding bootcamp intended to incorporate knowledge spanning all three main elements of a webpage (HTML, CSS (Bootstrap), and JavaScript)."
   }
]

//Array of project links for populating buttons
// const projectLinkArr = [
//    {
//       id: "artTracker",
//    },
//    {
//       id: "weatherApp",
//    },
//    {
//       id: "schedulerApp",
//    },
//    {
//       id: "codeQuiz",
//    }
// ]

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
      let imageObj = $("<img>").attr("src", portfolioArray[i].img);
      $("#image" + i).append(imageObj);

      let cardContent = $("<div>").addClass("card-content").attr("id", "cardContent" + i);
      $("#card" + i).append(cardContent);

      let cardTitle = $("<div>").addClass("subtitle has-text-light").attr("id", "title" + i).text(portfolioArray[i].name);
      $("#cardContent" + i).append(cardTitle);

      let content = $("<div>").addClass("content has-text-light").attr("id", "content" + i).text(portfolioArray[i].desc);
      $("#cardContent" + i).append(content);

      //Add project link buttons
      let projectBtns = $("<div>").addClass("buttons are-small is-grouped is-justify-content-center mt-5").attr("id", "projectBtns" + i);
      $("#content" + i).append(projectBtns);

      let deployedLink = $("<a>").addClass("button is-rounded is-primary mx-3").attr("href", portfolioArray[i].src).attr("target", "_blank").text("View project");
      $("#projectBtns" + i).append(deployedLink);

      let repoLink = $("<a>").addClass("button is-rounded is-info mx-3").attr("href", portfolioArray[i].repo).attr("target", "_blank").text("View repo");
      $("#projectBtns" + i).append(repoLink); 

   }

   //Redraw nav buttons
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

//Function for updating page when 'contact' button is clicked
function drawContactForm() {

   //Empty contents of main tile to replace with portfolio cards
   mainTile.empty();

   //Insert title text
   let contactTitle = $("<p>").addClass("title has-text-grey-light").text("Contact me:");
   mainTile.append(contactTitle);

   //Construct form elements
   //Note: form elements don't actually save and get submitted anywhere on submit yet

   //Contact name field
   let contactName = $("<div>").addClass("field").attr("id", "contactName");
   mainTile.append(contactName);

   let nameLabel = $("<label>").addClass("label has-text-grey-light").text("Your name:");
   $("#contactName").append(nameLabel);

   let nameControl = $("<div>").addClass("control").attr("id", "nameControl");
   $("#contactName").append(nameControl);

   let nameInput = $("<input>").addClass("input").attr("type", "text").attr("placeholder", "Enter first and last name");
   $("#nameControl").append(nameInput);

   //Email address field
   let emailAddress = $("<div>").addClass("field").attr("id", "emailAddress");
   mainTile.append(emailAddress);

   let emailLabel = $("<label>").addClass("label has-text-grey-light").text("Email address:");
   $("#emailAddress").append(emailLabel);

   let emailControl = $("<div>").addClass("control").attr("id", "emailControl");
   $("#emailAddress").append(emailControl);

   let emailInput = $("<input>").addClass("input").attr("type", "text").attr("placeholder", "Enter email address where I can direct my response");
   $("#emailControl").append(emailInput);

   //Message field
   let message = $("<div>").addClass("field").attr("id", "message");
   mainTile.append(message);

   let messageLabel = $("<label>").addClass("label has-text-grey-light").text("Message:");
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

   //Eventually: add form validation to disable button until valid input is received on all form fields
   let submitBtn = $("<button>").addClass("button is-success modal-button").attr("id", "contactSubmit").attr("data-target", "#modal-conf").attr("aria-haspopup", "true").text("Submit!");
   $("#submitControl").append(submitBtn);

   let cancelControl = $("<div>").addClass("control").attr("id", "cancelControl");
   $("#actionButtons").append(cancelControl);

   //Eventually: add functionality to clear form fields if not null on click; maybe just change to a 'reset' button instead?
   let cancelBtn = $("<button>").addClass("button is-light").text("Cancel");
   $("#cancelControl").append(cancelBtn);


   //Confirmation dialog content
   let confDialog = $("<div>").addClass("modal").attr("id", "modal-conf");
   mainTile.append(confDialog);

   let modalBkgd = $("<div>").addClass("modal-background");
   $("#modal-conf").append(modalBkgd);

   let modalCard = $("<div>").addClass("modal-card my-6");
   $(".modal-background").append(modalCard);

   let modalHeader = $("<header>").addClass("modal-card-head has-background-grey");
   $(".modal-card").append(modalHeader);

   let modalHeadContent = $("<p>").addClass("modal-card-title has-text-danger-dark").text("Inquiry Failed!");
   $(".modal-card-head").append(modalHeadContent);

   let modalBody = $("<section>").addClass("modal-card-body has-background-grey-light has-text-grey-dark").text("Oh no! Your inquiry has NOT been received! Something went wrong here - please email directly at jmcdonald112358@gmail.com");
   $(".modal-card").append(modalBody);

   let modalFoot = $("<footer>").addClass("modal-card-foot has-background-grey");
   $(".modal-card").append(modalFoot);

   let modalAck = $("<button>").addClass("button is-success").attr("id", "modalAck").text("Got it!");
   $(".modal-card-foot").append(modalAck);

   //Event listener to close modal
   $("#modalAck").click(function(event) {
      event.preventDefault();
      $(".modal").removeClass("is-active");
   })

   //Event listener for form submit button
   $("#contactSubmit").click(function(event)  {
      event.preventDefault();

      //Store form data to a contact object on server, once knowledge of storing stuff to a server is obtained, and/or stick data into an email and send to self once knowledge of how to tie in an email service like Postmark is obtained

      //Show confirmation dialog/modal
      $(".modal").addClass("is-active");
   })

   //Redraw nav buttons
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
   
   //Empty contents of main tile to replace with about me content 
   mainTile.empty();
   
   //Insert title text
   let aboutMeTitle = $("<p>").addClass("title has-text-grey-light").attr("id", "aboutMeTitle").text("About me");
   mainTile.append(aboutMeTitle);

   //Insert first paragraph of about me content
   let contentP1 = $("<p>").text("My name is Justin McDonald and I am a student learning to be a web developer! Currently, I work in technology for a local sales enablement company called Primary Intelligence as a Product Manager. As a Product Manager, I oversee the design and implementation of roughly 40% of our (very large) proprietary web app, TruVoice, which is a robust dashboard and analytics tool we built to support the service we provide to our clients.");
   mainTile.append(contentP1).append("<br>");

   //Insert second paragraph of about me content
   let contentP2 = $("<p>").text("I decided to pursue learning web dev partly because I've always been interested in coding, partially because I feel it's the logical next step in my career path, and partially because I'm hoping to stay with my company and join the dev team to do the actual coding of our system, instead of just speccing the logic for it. But at the very least, the knowledge from this class will benefit my role as Product Manager too, having a deeper understanding of the underlying technologies that are used to implement the features I design.");
   mainTile.append(contentP2).append("<br>");

   //Insert third paragraph of about me content
   let contentP3 = $("<p>").text("Now that I have progressed through the web dev bootcamp a ways, I am updating this portfolio page to showcase some of the skills I've learned thus far. Feel free to poke around and check out some of the improvements I've managed to work in outside the obvious UI changes! To see some of the projects I've completed as part of the course, check out my portfolio by clicking the button on the left!");
   mainTile.append(contentP3);



   //Redraw nav buttons
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