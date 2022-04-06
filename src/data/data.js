// importation of images
import Pic1 from './images/fronteng.png';
import Pic2 from './images/cond.jpg';
import Pic3 from './images/7killer.png';
import Pic4 from './images/startup.png';
import Pic5 from './images/google.jpeg';
import Pic6 from './images/laptop.jpg';
import Pic7 from './images/gooddev.jpg';
import Pic8 from './images/mask.jpg';
import Pic9 from './images/interview.png';
import Ai from './images/Ai.jpg';
import Ai2 from './images/Ai2.jpg';
import Twitter  from './images/twitter.jpg';

// article datas
const data = [
  {
    id:8001,
    title: ` Google aims at Excel with new Big Data Features`,
    content: `How to work with more Data Rows in Google Data Studio`,
    author: ` Christianlauer`,
    publishedDate: ` April 01, 2022 `,
    description: [ 
      ` Not long ago, I wrote about how Google attacks Power BI with new features in their Self Service BI tool Data Studio — you can find it here. It was one of my most clicked articles,
       so it seems to be an interesting topic among many data enthusiasts.`,
      ` After that, Google has updated Data Studio during the last months, especially with new other connectors. Also, another great news was that Data Studio can now display up to 100 dimensions and metrics,
       before that it was significantly less. This makes Data Studio much more powerful for me. Find the news here.`,
      `Also it was from now on possible to scroll horizontal. Thus, even large data sets can now be displayed in Data Studio. 
      This could ensure that companies can map even more legacy reporting tools in Data Studio.
      `,
      `And now to the actually “Big News”: You can now display up to 50,000 rows in tables in your reports. Previously, tables could display a maximum of 5,000 rows [1].`,
      `And now to the actually “Big News”: You can now display up to 50,000 rows in tables in your reports. Previously, tables could display a maximum of 5,000 rows [1].`
    ],
    url: ` https://medium.com/codex/google-aims-at-excel-with-new-big-data-features-fdabb238f528`,
    image: <img src={Pic5} alt='google'/> , 
    sourceInfo:`medium.com`
  },
  {
    id:73002,
    title: `7 Ways to Take Screenshots on Windows 10 and Windows 11 `,
    content: `You only need a few keystrokes to take screen captures on Windows 10 and Windows 11. Here's how to do it.`,
    author: `  Matt Elliott and Alison DeNisco Rayome `,
    publishedDate: `Mar 31, 2022, 4:26am`,
    description: [
      `Whether you're downloading Windows 11 (find out how to download Windows 11 for free) or sticking with Windows 10 for a while longer, it's easy to take a screenshot to capture part of or the entirety of your display. Maybe you want to save an online receipt, or maybe you want to capture a particularly noteworthy gaming feat to show off to your friends. Windows 10 and 11 offer the same built-in tools (Snip & Sketch and Snipping Tool),
       and several keyboard shortcuts will let you take a screenshot in an instant. `,
      `Here, we'll walk you through how to use both built-in Windows screenshot tools and other shortcuts for taking screenshots in Windows 10 and Windows 11, so you can decide which you like best. `,
      `Plus, here are more top Windows 10 tips and tricks, how to use all of the new features in Windows 11 and what you need to know about upgrading from Windows 10 to Windows 11. `,
      `Snip & Sketch`,
      `The Snip & Sketch tool is easier to access, share and annotate screenshots than the old Snipping Tool. And it can now capture a screenshot of a window on your desktop, a surprising omission when the app was first introduced that kept us on Team Snipping Tool until recently. `,
      `The easiest way to call up Snip & Sketch is with the keyboard shortcut Windows key + Shift + S. You can also find the Snip & Sketch tool listed in in the alphabetical list of apps accessed from the Start button as well as in the notification panel where it listed as Screen snip. Or you can just search for it if you don't commit the keyboard shortcut to memory. (If you're a frequent screenshot taker, we recommend pinning the app to the taskbar.)`
    ],
    url: `https://www.cnet.com/tech/services-and-software/7-ways-to-take-screenshots-on-windows-10-and-windows-11/`,
    image: <img src={ Pic6} alt='laptop'/>,
    sourceInfo:`cnet.com`
  },
  {
    id:8003,
    title: `10 Interview Questions
    Every JavaScript Developer Should Know`,
    content: `The Keys to JavaScript Mastery`,
    author: `Eric Elliot`,
    publishedDate: `Sept 30 2021`,
    description: [
      `Here are some questions that will help you explore the stuff that really matters:`,
      `1. Can you name two programming paradigms important for JavaScript app developers?
      JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.
      Good to hear:
      Prototypal inheritance (also: prototypes, OLOO).
      Functional programming (also: closures, first class functions, lambdas).
      Red flags:
      No clue what a paradigm is, no mention of prototypal oo or functional programming.
      Learn More:
      The Two Pillars of JavaScript Part 1 — Prototypal OO.
      The Two Pillars of JavaScript Part 2 — Functional Programming.`,
      `2. What is functional programming?
      Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.
      Functional programming is an essential concept in JavaScript (one of the two pillars of JavaScript). Several common functional utilities were added to JavaScript in ES5.`
    ],
    url: `https://medium.com/p/6fa6bdf5ad95`,
    image: <img src={Pic9} alt='javascript' />,
    sourceInfo:`medium.com`
  },

  {
    id:10804,
    title: `30 PRACTICES TO BE A GOOD SOFTWARE DEVELOPER`,
    content: `Development and testing best practices`,
    author: `Xavier Rigoulet`,
    publishedDate: ` Jan 18, 2020 `,
    description: [
      `1. YAGNI: “You Aint Gonna Need It”. Don't write code that you think you might need in the future, but don't need yet. This is coding for imaginary future use cases, and inevitably the code will become dead code or need rewriting because the future use case always turns out to work slightly differently from how you imagined it.
      If you put code in for a future use case, I will question it in a code review. (You can, and must, design APIs, for example, to permit future use cases, but that's a different issue.)`,
      `The same is true for commenting-out code; if a block of commented code is going into a release, it shouldn't exist. If it is code that may be restored, make a ticket and reference the commit hash for the code delete. YAGNI is a core element of agile programming. The best reference for this is Extreme Programming Explained, by Kent Beck.`,
      `2. Tests don't need testing. Infrastructure, frameworks, and libraries for testing need tests. Don't test the browser or external libraries unless you really need to. Test the code you write, not other people's code.`,
      `3. The third time you write the same piece of code is the right time to extract it into a general-purpose helper (and write tests for it). Helper functions within a test don’t need testing; when you break them out and reuse them they do need tests. By the third time you've written a similar code, you tend to have a clear idea of what shape the general-purpose problem is that you're solving.`,
      `4. When it comes to API design (external-facing and object API): Simple things should be simple; complex things should be possible. Design for the simple case first, with preferably zero configuration or parameterization, if that's possible. Add options or additional API methods for more complex and flexible use cases (as they are needed).`,
      `5. Fail fast. Check input and fail on nonsensical input or invalid state as early as possible, preferably with an exception or error response that will make the exact problem clear to your caller. Permit “innovative” use cases of your code though (i.e., don't do type checking for input validation unless you really need to).`
    ],
    url:`https://medium.com/@gdprogrammers/30-practices-to-be-a-good-software-developer-c6616f4ecb41`,
    image: <img src={Pic7} alt='software developer' />,
    sourceInfo:`  medium.com`
  },

  {
    id:10205,
    title: `How Artificial Intelligence is Shaping the Future of Education`,
    content: ` Thanks to advances in AI and machine learning, a slow but steady transformation is coming to education — under the hood. `,
    author: `pcMag`,
    publishedDate: `Feb 06, 2018.`,
    description: [
      `When you compare the typical 21st century classroom with that of the early 1900s, the differences aren't terribly obvious. Teachers will be standing in front, giving instructions and sharing notes on a modern-day version of the old blackboard — say, an overhead projector or a shared computer display. Students will be sitting at their desks in the classroom or watching via online video-conferencing software. The technology has changed: A lot of the tools and processes have been digitized, some of it has been automated, and geographical barriers have been removed to some extent — but the actors and elements have remained much the same.`,
      `But thanks to advances in artificial intelligence (AI) and machine learning, a slow but steady transformation is coming to education, under the hood. In a few years, teachers will no longer be alone in shouldering the burden of training the young generation or the workforce at corporations.`,
      `Already, AI algorithms are helping enhance education by collecting, analyzing, and correlating every interaction that takes place in physical and virtual classrooms, and helping teachers to address the specific pain points of each student. This might be the beginning of a revolution in one of the oldest and most valuable social skills that mankind has developed, and an imperative in a world where humans live and work alongside smart machines.`,
      `Measuring Learner Progress
      Instructors have to take into account every reaction to a lecture, every blank or attentive stare, every eager or hesitant response to a question, every assignment that is turned in early or late, and a lot more when assessing a student's grasp of a concept. This is how they can find out where students are lagging and steer them in the right direction.`
    ],
    url: `https://medium.com/p/b0bfc75e3865`,
    image: <img src={ Ai} alt='ai'/>,
    sourceInfo:'medium.com'
  },
  {
    id:1006,
    title: `Software Testers May Soon be Replaced by AI Programs`,
    content: `The future of AI-based software testing appears to be promising`,
    author: `Ikshura Tachintha`,
    publishedDate: `August 10 2021`,
    description: [
      `Artificial Intelligence (AI), has been transforming multiple sectors of industries and impacting several aspects of our daily life. Mostly AI has acted prominently in the fields of automating manual processes. And therefore, we will be investigating how AI has affected the realm of software testing, automated testing in particular.
    What is software testing?
    Software testing is the process of assessing the performance of a program developed to check whether it is developed as per the client's requirements and to find out whether there are faults and improve them before it is deemed ready for use`,
      `The existing challenge
    Each time developers add new code, new tests must be carried out and it is the responsibility of the QAs to spend significant time on ensuring that new code does not break the existing codebase. Regression testing cycles are extremely time-consuming when undertaken manually and can burden QAs to a large extent.
    Traditional QA methods involve checking off a list of tasks that ensure the software is working the way it is meant to. In the beginning, when only a few features have to be tested, this is a feasible task. But as features increase, QAs face difficulty in meeting deadlines while also performing comprehensive tests. The more complex an application, the more difficult it is to make sure it receives full test coverage.
    However, with the surfacing of AI, it has become possible to streamline the testing process. Given that, due to competition, new software and product launches must be accelerated since extended deadlines are not really an option. Thus, there is no option but to test smarter rather than harder.
     `,
      `How AI can overcome these challenges
      The application of AI in software testing tools is focused on making the Software Development Life Cycle(SDLC) easier. Through the application of reasoning, problem-solving, and machine learning, AI can be used to help automate and reduce the amount of mundane and tedious tasks in the development and testing stages.`
    ],
    url: `https://medium.com/p/c7455b078145`,
    image: <img src={ Ai2} alt='ai2'/>,
    sourceInfo:`medium.com`
  },
  {
    id:2007,
    title: `Unlock Your iPhone While Wearing a Mask Using Face ID. Here's How`,
    content: `The days of removing your mask to unlock your phone or to use Apple Pay are gone.`,
    author: "Nelson Aguilar and Jason Cipriani ",
    publishedDate: `March 31 2022`,
    description: [
      `When you're in a public place that requires you to wear a mask and you need to use Face ID, it can be uncomfortable pulling your mask down to get into your iPhone. Instead, you probably just type in your passcode.
      However, thanks to iOS 15.4, you can finally use Face ID and keep your mask on.`,
      `As long as you have an iPhone 12 or later running iOS 15.4, you can now go into your phone's settings and toggle on a new feature that uses the features around your eyes to authenticate that it's really you so that you can finally use Face ID while still wearing a mask.`,
      `However, if you own an older iPhone model or simply don't want to update to iOS 15.4 just yet, there's another way to unlock your iPhone with a mask on -- using your Apple Watch. Check out both methods below. For more, here's everything we know so far about iOS 16, and these are the new emoji in iOS 15.4.`,
      `How to use Face ID with a mask
      This new feature is exclusive to iOS 15.4 and is only available on the iPhone 12, 12 Mini, 12 Pro and 12 Pro Max and the iPhone 13, 13 Mini, 13 Pro and 13 Pro Max. Once you update, you'll see the option to use Face ID with a mask on during the welcome screen, but you can also do the following to enable the new feature:`,
      `1. On your iPhone, open the Settings app.

      2. Next, go into Face ID & Passcode and enter your passcode.
      
      3. Toggle on Face ID With a Mask.
      
      4. On the next page, choose the Use Face ID With a Mask option.
      
      5. Finally, remove your mask, if you have one on, and set up Face ID.
      
      `
    ],
    url: `https://www.cnet.com/tech/mobile/unlock-your-iphone-while-wearing-a-mask-using-face-id-heres-how/`,
    image: <img src={Pic8} alt='mask' />,
    sourceInfo:`cnet.com`
  },
  {
    id:3008,
    title: `45 Front End Developer Tools`,
    content: ` Front End Tools Today we're going to dive into useful UI development tools for developers and designers.`,
    author: ` Niemvuilaptrinh`,
    publishedDate: ` April 03, 2022`,
    description: [
      `1) Checklist Design
      A place to synthesize website design knowledge through providing information and essential elements when designing website elements such as buttons, cards, tables…`,
      `2) Web Gradients
      Where to synthesize beautiful gradient background colors for website design.`,
      ` 3) Webframe
      Collection of beautiful web application designs and updated weekly.`,
      `4) Spline
      The application helps you create 3D effects for websites.`,
      ` 5) Type Anything
      Web application that allows us to design typography for websites such as font selection, font weight, word spacing…`
    ],
    url: `https://medium.com/gitconnected/45-front-end-developer-tools-e496b9c3503`,
    image: <img src={Pic1} alt="45 frontend tools" />,
    sourceInfo:`medium.com`
  },
  {
    id: 3026,
    title: `Stop Using Conditional Statements Everywhere in JavaScript, Use an Object Literal instead`,
    content:`Conditional Statements (If-Else, Switch) can be easily replaced with Object Literals. They make the code better.`,
    author: `Neelesh Arora`,
    publishedDate: ` Oct 22, 2021 `,
    description: [
      `bject Literals
      An Object Literal is one of the most popular and widely used pattern to define objects in JavaScript. It is a collection of key-value pairs. JavaScript being powerful, adds some additional functionalities to the simple objects through object literals.`,
      `How can we use Object Literal as a replacement to Conditional Statements?
      Let us consider an example scenario to understand this.
      A user enters an animal, we need to return the name of its baby (what is is called).
      Look at the following codes:`,
      `The above codes have many lines as we can see. No matter if we write it using if-else or switch case, though switch case reduces the redundant 'animal.toLowerCase()'.`,
        `Now, this code works exactly same as the above two codes do. But the difference is that it looks neater and has lesser conditions to check thereby reducing the load time.
        I think it's pretty nice to use this wherever possible. Any thoughts on this?`
    ],
    url: `https://medium.com/@neelesh-arora/stop-using-conditional-statements-everywhere-in-javascript-use-an-object-literal-instead-e780debcda18`,
    image: <img src={Pic2} alt="45 frontend tools" />,
    sourceInfo:`medium.com`
  },
  {
    id: 8080,
    title:`7 Killer One-Liners in JavaScript`,
    content:`JavaScript is the most crucial pillar of Web Development.`,
    author: `Tapajyoti Bose`,
    publishedDate:`feb 12, 2022`,
    description: [
      `This article contains code snippets hand-picked by sterilized contamination-free gloves and placed onto a satin pillow.
      A team of 50 inspected the code and ensured it was in the highly polished before posting. Our article-posting specialist from Switzerland lit a candle, and a hush fell over the crowd as he entered the code into the finest gold-lined keyboard that money can buy.
      We all had a wonderful celebration, and the whole party marched down the street to the café where the entire town of Kolkata waved “Bon Voyage!” to the article as it was posted online.
      Have a wonderful time reading it!`,
      `Shuffle Array
      While using algorithms that require some degree of randomization, you will often find shuffling arrays quite a necessary skill. The following snippet shuffles an array in place with O(n log n) complexity.`,
      `Copy to Clipboard
      In web apps, copy to clipboard is rapidly rising in popularity due to its convenience for the user.`,
      ` NOTE: The approach works for 93.08% global users as per caniuse. So the check is necessary that the user's browser supports the API. To support all users, you can use an input and copy its contents.`,
      `Unique Elements
      Every language has its own implementation of Hash List, in JavaScript, it is called Set. You can easily get the unique elements from an array using the Set Data Structure.`
    ],
    url: `https://medium.com/@tapajyoti-bose/7-killer-one-liners-in-javascript-33db6798f5bf`,
    image: <img src={Pic3} alt="7 javaScript killer" />,
    sourceInfo:`medium.com`
  },
  {
    id: 6931,
    title: `How I built my tech startup as a solo developer`,
    content: `Time flies! Here are some thoughts, tips, and mistakes after running a tech company as a solo developer for almost a year.`,
    author: `Eric`,
    publishedDate: `March 08, 2022`,
    description: [
      `What am I building? ❓`,
      `I had the idea that I wanted to build a Crossfit training app for gyms and athletes. 
      I named it Dreamwod and just launched it on App Store and Google Play. 
      The things that I have been building are two apps, one for iOS and one for Android, a backend API, 
      and a company web page.
      This article will talk about the tech stack, ways of working, what I have learned and what mistakes I made.`,
      `Deciding on the Tech Stack 🤔`,
      `The requirements I had on the tech stack were the following.`,
      `Backend and operations
      1.Quick development and iteration time.
      2.Easy to run locally.
      3.Easy to scale the backend / be able to handle high load.
      4.Easy to deploy.
      5.Keep it as simple as possible.`,
      `App development
      Easy to learn (I didn't have any experience of iOS app development).`,
        ` The stack
        Backend - Golang 💻
        The language of choice for the backend was golang. I wanted something that was was easy to learn, 
        quick to compile, had a good performance,
         and had a low memory and CPU footprint in production.`
    ],
    url: `https://medium.com/dreamwod-tech/how-i-built-my-tech-startup-as-a-solo-developer-45390f460002`,
    image: <img src={Pic4} alt='startup' />,
    sourceInfo:`medium.com`
  },
  {
    id: 70928,
    title: `Twitter: Here Are 4 Ways to Delete Your Old Tweets`,
    content: `Do you really want someone digging up your song lyric tweets from high school?`,
    author: `Shelby Brown`,
    publishedDate: `April 2, 2022`,
    description: [
      `Twitter's popularity bloomed in the late aughts, when many millennials were still in the MySpace mindset -- sharing vague sad statuses for attention, angsty song lyrics and selfies in a dirty bathroom mirror. And even if you're not a millennial, chances are your tweet history contains some embarrassing gems nevertheless. After all, Twitter has been around for well over a decade now, and if you scroll back long enough, you never know what you'll find.`,
      `If the thought of someone finding your cringe-worthy Twitter origins keeps you up at night -- or if you just promised yourself that you'd clean up your act once and for all this year, don't worry. There are several ways to wipe your past from the annals of Twitter. Keep in mind if you use one of these apps, deleting your tweets is permanent and unless you subscribe to a premium tier, the service will usually limit you to deleting 3,200 tweets. We'll tell you how.`,
      `TweetDelete: Mass delete tweets using age and keyword filters`,
      `TweetDelete is a free web tool that lets you mass delete your Twitter posts with age and text filters. You can also set the tool up to mass delete on a schedule. Here's how to get started with TweetDelete:`,
      `1. Visit TweetDelete.net.

      2. Sign in with Twitter.
      
      3. Read application permissions, privacy settings, T&C.
      
      4. Authorize app.`,
      `From there, you can delete up to 3,200 of your most recent tweets with some limitations. There are drop-down menu options to delete tweets older than one week, three months, a year and more. If you're looking to delete a specific topic, you can use the text field to delete tweets containing a word or phrase. Finally, you can tell TweetDelete to wipe your tweets one or every few days. But be warned: Unless you backed up a data file your tweets can't be recovered after you delete them. `
    ],
    url: `https://www.cnet.com/tech/services-and-software/twitter-here-are-4-ways-to-delete-your-old-tweets/`,
    image: <img src={ Twitter} alt='twitter'/>,
    sourceInfo:`cnet.com`
  }
];

// fuction to return the article data 
export function getData () {
    return data ;
}

// fuction to loop the article data using the find method which return only the first value it get 
export function fetchArticleInfo(info) {
  return data.find((article) => article.id === info )
}