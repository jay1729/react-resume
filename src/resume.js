const resume = {
    name: 'Jayantha G V',
    email: 'jayantha.gumballi@gmail.com',
    github: 'https://github.com/jay1729',
    linkedin: 'https://www.linkedin.com/in/jayantha-gumballi/',
    about: {
        desc: 'Self-motivated, persistent, analytical software developer who is always looking for new challenges. Started developing software as a hobby, now making a career out of it.'
    },
    work: [
        {
            title: 'Software Development Intern',
            company: 'Zenefits',
            from: '5/12/2018',
            to: '18/01/2019',
            location: 'Bangalore',
            description :[
                'Integrated insurance status of all employees after termination into company’s timeline.',
                'Wrote tasks which in a Django framework which generates filled Affordable Care Act applications (in XML) for required employees and sends it to IRS using a SOAP web service.',
                'Designed a utility web page for Operations team, which gets delta of data snapshots sent to insurance carriers.'
            ]
        },
        {
            title: 'Software Development Intern',
            company: 'Zenefits',
            from: '9/05/2018',
            to: '20/07/2019',
            location: 'Bangalore',
            description :[
                'Built a platform as a POC, where customers of Zenefits could cross-sell their products to each other. Used Redis for caching, implemented basic CRUD, implemented pagination. Built Front-End in React.js, backend in Django with a GraphQL server for communication between the two.', 
                'Added features to existing search bar to make Zenefits’ URLs searchable internally (for Zenefits’ employees).'
            ]
        }
    ],
    education: [
        {
            university: 'Indian Institute of Technology (BHU), Varanasi',
            degree: 'BTech-MTech',
            major: 'Engineering Physics',
            from: '2015',
            to: '2020'
        }
    ],
    skills: {
        languages: ['Python', 'Java', 'JavaScript', 'CPP', 'Python', 'Java'],
        tech: ['Django', 'ReactJS', 'Android']
    },
    portfolio: [
        {
            title: 'ftplib',
            desc: 'ftplib is a java library that you can use to make an ftp client',
            bulletPoints: [
                'Both Active and Passive mode supported',
                'Search files by regex to get a files in a tree structure',
                'Download files/folders by regex'
            ],
            url: 'https://github.com/jay1729/ftplib'
        },
        {
            title: 'File Share',
            desc: 'An app which uses the android WiFi P2P interface to share files between two devices.',
            url: 'https://github.com/jay1729/ShareFiles'
        },
        {
            title: 'Class Manager',
            desc: 'An Android app which helps you track your Attendance in class',
            bulletPoints: [
                'Add new classes',
                'Add and delete attendance records',
                'Will remind you to mark attendance by sending you a notification after class ends'
            ],
            url: 'https://github.com/jay1729/Class-Manager'
        },
        {
            title: 'react-resume',
            desc: 'This Website',
            bulletPoints: [
                'A react app to display resume',
                'Only need to write resume details into one central file, the app then renders this resume into a web page'
            ],
            url: 'https://github.com/jay1729/react-resume'
        }
    ]
}

export default resume;