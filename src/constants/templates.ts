export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/assets/blank-document.svg",
        initialContent: "",
    },
    {
        id: "software-propasal",
        label: "Software developmet proposal",
        imageUrl: "/assets/software-proposal.svg",
        initialContent: `
        <h1>Software Proposal</h1>
    
    <h2>Prepared By</h2>
    <p>Your Name<br>
    Your Company<br>
    123 Your Street<br>
    Your City, ST 12345<br>
    (123) 456-7890<br>
    no_reply@example.com</p>
    
    <h2>Prepared For</h2>
    <p>Client Name<br>
    Client Company<br>
    Client Address<br>
    Client City, ST ZIP</p>
    
    <h2>Project Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    
    <h2>Objectives</h2>
    <ul>
        <li>Objective 1: Lorem ipsum dolor sit amet.</li>
        <li>Objective 2: Sed diam nonummy nibh euismod tincidunt.</li>
        <li>Objective 3: Ut laoreet dolore magna aliquam erat volutpat.</li>
    </ul>
    
    <h2>Scope of Work</h2>
    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
    
    <h2>Timeline</h2>
    <p>Estimated project completion: XX weeks/months</p>
    
    <h2>Budget</h2>
    <p>Estimated cost: $XXXXX</p>
    
    <h2>Conclusion</h2>
    <p>We believe this project will provide significant value and align with your business goals. We look forward to working together.</p>
    
    <p>Sincerely,</p>
    <p>Your Name</p>
        `
    },
    {
        id: "project-propasal",
        label: "Project proposal",
        imageUrl: "/assets/project-proposal.svg",
        initialContent: `
        <h1>Project Name</h1>
    <p>09.04.20XX</p>
    <hr>
    <p>Your Name</p>
    <p>Your Company</p>
    <p>123 Your Street<br>
    Your City, ST 12345</p>
    
    <h2>Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
    
    <h2>Goals</h2>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
        <li>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
    </ul>
    
    <h2>Specifications</h2>
    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
    
    <h2>Lorem Ipsum</h2>
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
    
    <h2>Milestones</h2>
    <ul>
        <li>Lorem ipsum - Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
        <li>Dolor sit amet - Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</li>
    </ul>
        `
    },
    {
        id: "business-letter",
        label: "Business letter",
        imageUrl: "/assets/business-letter.svg",
        initialContent: `
        <p>Your Name</p>
    <p>Your Company<br>
    123 Your Street<br>
    Your City, ST 12345<br>
    (123) 456-7890<br>
    no_reply@example.com</p>
    
    <p>Date: 4th September 20XX</p>
    
    <p>Recipient Name<br>
    Recipient's Position<br>
    Company Name<br>
    123 Address St<br>
    Anytown, ST 12345</p>
    
    <p>Dear [Recipient's Name],</p>
    
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
    
    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
    
    <p>Sincerely,</p>
    <p>Your Name</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/assets/resume.svg",
        initialContent: `
        <h1>Hello</h1>
    <p>I’m Your Name</p>
    <p>123 YOUR STREET<br>
    YOUR CITY, ST 12345<br>
    (123) 456-7890<br>
    NO_REPLY@EXAMPLE.COM</p>
    
    <h2>Skills</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.</p>
    
    <h2>Experience</h2>
    <h3>MONTH 20XX - PRESENT</h3>
    <p><strong>Company Name, Location - Job Title</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed in consequat mi, sed pulvinar lacinia felis eu finibus.</p>
    
    <h3>MONTH 20XX - MONTH 20XX</h3>
    <p><strong>Company Name, Location - Job Title</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi.</p>
    
    <h3>MONTH 20XX - MONTH 20XX</h3>
    <p><strong>Company Name, Location - Job Title</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.</p>
    
    <h2>Education</h2>
    <h3>MONTH 20XX - MONTH 20XX</h3>
    <p><strong>College Name, Location - Degree</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
    
    <h2>Awards</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum nisi.</p>
        `
    },
    {
        id: "cover-letter",
        label: "Cover letter",
        imageUrl: "/assets/cover-letter.svg",
        initialContent: `
        <p>Your Name</p>
    <p>123 Your Street<br>
    Your City, ST 12345<br>
    (123) 456-7890<br>
    no_reply@example.com</p>
    
    <p>4th September 20XX</p>
    
    <p>Ronny Reader<br>
    CEO, Company Name<br>
    123 Address St<br>
    Anytown, ST 12345</p>
    
    <p>Dear Ms. Reader,</p>
    
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
    
    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
    
    <p>Sincerely,</p>
    <p>Your Name</p>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/assets/letter.svg",
        initialContent: `
        <div class="container">
        <div class="address">
            <p>Your Name<br>
            123 Your Street<br>
            Your City, ST 12345<br>
            (123) 456-7890<br>
            no_reply@example.com</p>
        </div>
        
        <div class="date">
            <p>4th September 20XX</p>
        </div>
        
        <div class="recipient">
            <p>Ronny Reader<br>
            CEO, Company Name<br>
            123 Address St<br>
            Anytown, ST 12345</p>
        </div>
        
        <div class="content">
            <p>Dear Ms. Reader,</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>
            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
        </div>
        
        <div class="closing">
            <p>Sincerely,</p>
            <p>Your Name</p>
        </div>
    </div>
        `
    },
]