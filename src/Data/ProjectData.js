const projectData = [
  // ------------------ License Portal-------------------- //
  {
    release: true,

    //Project Cover
    cover: {
      link: "/license-portal",
      description:
        "Designing a self-service portal to manage product licenses to its users.",
      showcase: require("../Images/licenseManager/tile.png"),
    },

    //Project Heading
    header: {
      name: "License Portal",
      company: "Gallagher Security",
      team: ["4 Engineers", "2 Testers", "1 Product Owner"],
      showcase: require("../Images/licenseManager/tile.png"),
    },

    //Project Understand
    understand: {
      context:
        "We released Cardholder Management cloud service product in Early Access for customers to start using for free, but needed to look at a subscription and licensing service that could enable customers to sign up and begin using our product and future products that will be added.",
      discovery:
        "We gathered valuable insights from our stakeholders and some knowledge experts in regards to subscription and license managements, asking questions of how we might implement the license service, and what challenges we may face on the way as this will be the first license management service we will be offering.",
      extra: {
        valid: true,
        heading: "Design Sprint",
        text: [
          {
            tag: "p",
            text: "I took the team on a Design Sprint journey to:",
          },
          {
            tag: "ul",
            text: [
              "Uncover knowledge gaps and challenges.",
              "Do high level research on competitors.",
              "Ideated potential solutions.",
            ],
          },
        ],
      },
      showcase: require("../Images/licenseManager/understand.png"),
    },
    research:
      "Together with the team we set out and tried to research any other services that were similar to what we were wanting to achieve and highlighted any points of interests in terms of functionality and also the interface we might want to explore. \n \n We noted what feature we might want to adopt and also what features we want to stay clear away from.",
    ideate:
      "After gathering what information and research we could get we then set out at ideating different unique ideas that followed the in scope we had set. \n \n We did a few exercises such as quick sketching, and crazy 8’s and then we all sketched a final solution that we believed would be suitable. We placed them on a bored and got everyone to target certain areas or whole ideas they thought would work and began creating a heat map of areas we would adopt in the final design.",

    //Project Validation
    validate: {
      prototyping:
        "I designed a fully functioning high fidelity prototype in Figma that we could demonstrate to our stakeholder and knowledge experts and then finally validate them with customers.",
      testing:
        "After making a few more adjustments based on the feedback from our stakeholders and knowledge experts we then took the final solution and tested them with our customers.\n \n With all tests coming back at 100% completion and satisfaction, we were able to pass along the final solution onto our developers to begin building. \n \n During development we ran into a few “gotcha’s” and had to iterate and refactor minor components to suit the needs.",
      showcase: "",
    },
    researchImage: require("../Images/licenseManager/research.png"),
    ideateImage: require("../Images/licenseManager/ideate.png"),
    finalSolutionImage: require("../Images/licenseManager/final.png"),
  },

  // ------------------ Two Factor Auth ------------------ //
  {
    release: true,

    //Project Cover
    cover: {
      link: "/two-factor-auth",
      description:
        "Revamping and adding a 2FA Solution to a pre-existing mobile credential app for IOS & Android.",
      showcase: require("../Images/twoFactorAuth/tile.png"),
    },

    //Project Heading
    header: {
      name: "Two Factor Auth",
      company: "Gallagher Security",
      team: ["3 Engineers", "2 Testers", "1 Product Owner"],
      showcase: require("../Images/twoFactorAuth/tile.png"),
    },

    //Project Understand
    understand: {
      context:
        "Developing Command Centre Web we needed to create a Two Factor Authenticator to secure the login process using our existing Mobile Credential App - Mobile Connect. Mobile Connects primary use case is used as a digital credential to gain access through secure doors, rather than using a physical access card.",
      discovery:
        "Gathering all the requirements and how the Two Factor Authenticator will be utilised to gain access to Command Centre Web, I began gathering insights about Mobile Connect and how the 2FA could be implemented, by interviewing our stakeholders, and customers.",
      extra: {
        valid: false,
      },
      showcase: "",
    },

    //Project Research
    research:
      "I focused on looking at competitors that are used as Two Factor Authenticators such as Google Auth, Microsoft Authenticator, Adobe Account Access, and Blizzard Authenticator, I found some common ground between them all that can be used within our final solution, I also used the competitor's solutions as inspiration from the UI and would be applying certain key aspects to my solution as well.",
    ideate:
      "I made multiple concept designs of how I would imagine the solution would look like and where core features will be placed and easily accessed by users that are wanting to log in quickly. I took the time to improve on certain features in the app that I believe would further improve the user experience, such as moving items into a secondary menu, collapsing main menu items, and updating icons. \n \n I wanted to add the ability to make “favourites” so that if a user had to have multiple 2FA codes for logging into multiple sites they could manage it quickly and easily. \n \n I went back and forth to my squad and mentors for feedback, critique, and suggestions and made some minor adjustments, and would move it into the prototyping phase.",

    //Project Validation
    validate: {
      prototyping:
        "I began designing hi-fi prototypes. \n \n I designed the prototype in Adobe XD and after going back to my squad for some refinements, feedback, and critiques, I could then move this over to the deliver phase.",
      testing:
        "I tested my solution with our customers that would suit the targeted persona, as well as our stakeholders. I validated that they can find the 2FA code quickly, manage multiple 2FA codes, and also validate the additional UI changes that I made to improve the overall usability.",
      showcase: require("../Images/twoFactorAuth/prototype.png"),
    },
    researchImage: require("../Images/twoFactorAuth/research.png"),
    ideateImage: require("../Images/twoFactorAuth/ideate.png"),
    finalSolutionImage: require("../Images/twoFactorAuth/header.png"),
  },

  // ------------------ Onboarding ------------------ //
  {
    release: true,

    //Project Cover
    cover: {
      link: "/onboarding",
      description:
        "Creating a cloud security management solution for cardholder and building control.",
      showcase: require("../Images/onboarding/tile.png"),
    },

    //Project Heading
    header: {
      name: "Onboarding",
      company: "Gallagher Security",
      team: ["4 Engineers", "2 Testers", "1 Product Owner"],
      showcase: require("../Images/onboarding/tile.png"),
    },

    //Project Understand
    understand: {
      context:
        "One of my squad's main focus was to shift a pre-existing on-premise software to an all-cloud solution while overhauling and improving all usability with new and existing customers. \n \n A large feature that we needed to overcome was an onboarding process of new Cardholder/Users to the site, this would be a new feature compared to the on-premise software but still utilising it’s existing features. \n \n I took to the task working with my squad in an agile environment to iterate on the feature to create a feasible onboarding solution.",
      discovery:
        "We first began reaching out to our external stakeholders and looked at the existing on-premise solution for onboarding cardholders, we identified our target personas and created a journey map that reflects those business processes, we found that it had no clear built-in process for onboarding users as it was built to accommodate any type of business workflow, so every business would have its own set of workflows and could differ vastly from one another so we took the key similarities instead.  \n \n We also discovered this was a usability issue as it would also require extensive training and modules for the customers to be able to use and understand first. \n \n We knew we had to explore and create a solution that could do the same thing but still be easy and intuitive to understand and use without the training and modules.",
      extra: {
        valid: false,
      },
      showcase: require("../Images/onboarding/understand.png"),
    },
    research:
      "I then began speaking and interviewing our existing customers that use this feature on a day-to-day basis, these customers would fit our targeted persona as well so that we knew we are getting information from actual users. \n \n Because the current solution is quite all over the place we found out through our customers that a step-for-step process in onboarding a new Cardholder/User where all the necessary steps can be provided for them seemed to be a potential solution. \n \n I completed my research to look at competitors and how they achieve their solutions, as well as non-competitor research to see how other organisations do step-for-step onboarding.",
    ideate:
      "We proceeded together with the squad on discovering some lo-fi ideas to create a step-for-step solution for onboarding a new Cardholder/User by doing a crazy 8’s session together. \n \n We already had a form of a step-for-step process in mind before this phase but we continued to see if we can find some unique additions to the step-for-step process or even potentially a whole new solution. \n \n After the exercise, the squad voted on their most preferred design ideas and we decided collectively to proceed with a step-for-step wizard and added in some unique add ons from their designs to further enhance and improve the usability for the final solution.",

    //Project Validation
    validate: {
      prototyping:
        "After we put together all the pieces in our ideation phase I then set out to create the final prototype which we could go and test with our customers/users to validate the solution. \n \n I designed a hi-fi prototype in Figma using the design system I created for our entire department for all our different platforms and projects. \n \n After going back to my squad for some refinements, feedback, and critiques I then came up with a final testing solution that I could go test with our customers.",
      testing:
        "I experimented with a new way of testing our prototypes by using a platform called Useberry. Userberry is an online platform where I can upload my Figma prototypes, create questions and give some context as to what the user needs to complete. \n \n Because we have customers all across the world I thought it would be great to create this on Useberry and send out a mass link to all our external customers where they can in their own time complete the test. \n \n I received way more results than expected which was fantastic and viewed all recordings and completion rates, then compiled the results to find that the prototype was a great success. We moved this straight over to development.",
        showcase: require("../Images/onboarding/prototype.png"),
      },
    researchImage: require("../Images/onboarding/research.png"),
    ideateImage: require("../Images/onboarding/ideate.png"),
    finalSolutionImage: require("../Images/onboarding/final.png"),
  },

  // ------------------ Credential Requests ------------------ //
  {
    release: true,

    //Project Cover
    cover: {
      link: "/credential-request",
      description:
        "Creating a new self service credential and access management cloud solution.",
      showcase: require("../Images/credentialRequest/header.png"),
    },

    //Project Heading
    header: {
      name: "Credential Request",
      company: "Gallagher Security",
      team: ["4 Engineers", "2 Testers", "1 Product Owner"],
      showcase: require("../Images/credentialRequest/header.png"),
    },

    //Project Understand
    understand: {
      context:
        "Another squads main focus was to design and develop a full Cloud Access Management solution for credential and access control that was customer driving in user experience. \n \n One of many features, we needed to create an MVP solution for the end requesters (i.e Employees) to enable them to quickly and effectively request new credentials from their organization and could be processed by the corresponding approvers (i.e HR Admins) within the system. \n \n I took to this task working with my squad in an agile environment to iterate on this feature with our customers to create a viable solution.",
      discovery:
        "For this feature we looked to bringing all knowledge from across the teams and internal stakeholders as to what we expect this requesting workflow will look and what the users will experience. \n \n We took all this information and set out to discover what our customers and users will expect and want from this eperience.",
      extra: {
        valid: false,
      },
      showcase: "",
    },
    research:
      "We went out to our customers and users that would fit our persona for this feature and interviewed them to get a broader idea as to what they would expect the requesting service will look like and what will be expected of their users. \n \n I looked at competitors solutions as well and found some common ground between them and how they solved their solution. I would use this as inspiration and make certain aspects a part from my own solution",
    ideate:
      "I took all the knowledge and information taken from the first two phases above and set out to create my own unique solution that would suit and satisfy the problem. \n \n I worked back and forth with customers and my own squad to refine my workings based on their critique, feedback and suggestions and come up with a final solution that can move into the prototyping phase. \n \n I knew this will still need more refinement but needed to begin prototyping so that I can jump straight into testing my solution to truly discover if there are any problems that need ironing out.",

    //Project Validation
    validate: {
      prototyping:
        "After having my final solution ready to go I then set out to create the final prototype and jumps straight into testing with some users. \n \n I designed a hi-fi prototype in Figma using the design system I created for our entire department for all our different platforms and projects. \n \n After going back to my squad for some refinements, feedback and critiques on the workflow I then was ready to take this out into the field to be tested.",
      testing:
        "We went into Wintec and organised a time to get 15 students to work through some scenarios and complete the tasks on my prototype. The students would be a targeted persona and what be a great set of users to get honest feedback from. \n \n We separated the Groups to do one task for requesting a new credential and we had the other group request a replacement credential. \n \n We had a complete 100% completion rate and got some great feedback and suggestions from the students.",
        showcase: require("../Images/credentialRequest/prototype.png"),
      },
    researchImage: require("../Images/credentialRequest/research.png"),
    ideateImage: require("../Images/credentialRequest/ideate.png"),
    finalSolutionImage: require("../Images/credentialRequest/final.png"),
  },

  // ------------------ Design System ------------------ //
  {
    release: false,

    //Project Cover
    cover: {
      link: "/design-system",
      description:
        "Creating and maintaining a new Design System for Gallagher Security Future of Enterprise.",
      showcase: require("../Images/designSystem/tile.png"),
    },

    //Project heading
    header: {
      name: "Design System",
      company: "Gallagher Security",
      team: ["4 Engineers", "2 Testers", "1 Product Owner"],
      showcase: require("../Images/designSystem/tile.png"),
    },

    //Project Understand
    understand: {
      context: "",
      discovery: "",
      extra: {
        valid: false,
      },
      showcase: "",
    },

    //Project Research
    research: "",

    //Project Ideate
    ideate: "",

    //Project Validation
    validate: {
      prototyping: "",
      testing: "",
      showcase: ""
    },
    researchImage: "",
    ideateImage: "",
    finalSolutionImage: "",
  },
];

export default projectData;
