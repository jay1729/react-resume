const resume = {
    work: [
        {
            title: 'Software Development Intern',
            company: 'Zenefits',
            from: '5/12/2018',
            to: '18/01/2019',
            location: 'Bangalore',
            description :['Played a vital role']
        },
        {
            title: 'Software Development Intern',
            company: 'Zenefits',
            from: '9/05/2018',
            to: '20/07/2019',
            location: 'Bangalore',
            description :['Played a vital role', 'Played another vital role']
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
        languages: ['Python', 'Java', 'JavaScript', 'CPP'],
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
            ]
        }
    ]
}

export default resume;