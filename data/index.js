import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

export const serviceDetailsList = [
    {
        id: 'service-1',
        image: '/services/mobile_dev.svg',
        title: 'MOBILE APP DEVELOPMENT',
        shortDescription: 'Flutter, React Native, Java, Kotlin, Objective-C',
        description: 'Mobile app development is a key part of our business. We have a team of iOS and Android developers who are capable of building apps for any platform. We have experience in building apps for iOS and Android using Flutter, React Native, Java, Kotlin, and Objective-C.',
    },
    {
        id: 'service-2',
        image: '/services/web_dev.svg',
        title: 'FRONTEND WEB DEVELOPMENT',
        shortDescription: 'React.js, Next.js, HTML, CSS, Node.js',
        description: 'We have a team of frontend web developers who are capable of building websites for any platform. We have experience in building websites using React.js, Next.js, Angular, HTML, CSS, Python, and Node.js.',
    },
    {
        id: 'service-3',
        image: '/services/backend_dev.svg',
        title: 'BACKEND DEVELOPMENT',
        shortDescription: 'Node.js, C++, Dart, Python, Java, Go',
        description: 'We have a team of backend developers who are capable of building backend systems for any platform. We have experience in building backend systems for web, mobile, and desktop platforms.',
    },
    {
        id: 'service-4',
        image: '/services/desktop_dev.svg',
        title: 'DESKTOP APP DEVELOPMENT',
        shortDescription: 'C++, Java, Python, Dart',
        description: 'We have a team of software developers who are capable of building applications for desktop platforms. We have experience in building applications for Windows, Mac, and Linux.',
    },
];

export const projectList = [
    {
        _id: 'rippl-app',
        image: '/rippl_screenshots/icon.png',
        icon: '/rippl_screenshots/icon.png',
        title: 'Rippl App',
        type: 'Mobile Application',
        projectType: 'mobileApp',
        shortDescription: 'A social media app.',
        description: "Rippl is a social media app for sharing and connecting with people around the world. It is a mobile app that allows users to share their photos and videos with other users.",
        technologies: ['Flutter', 'Dart', 'GetX', 'Rive'],
        screenshots: [
            '/rippl_screenshots/1.png',
            '/rippl_screenshots/2.png',
            '/rippl_screenshots/3.png',
            '/rippl_screenshots/4.png',
            '/rippl_screenshots/5.png',
            '/rippl_screenshots/6.png',
            '/rippl_screenshots/7.png',
            '/rippl_screenshots/8.png',
            '/rippl_screenshots/9.png',
            '/rippl_screenshots/10.png',
        ],
        features: [
            "Login and Signup",
            "Create and edit profile",
            "Follow and unfollow users",
            "Create and edit posts and polls",
            "Like and unlike posts and polls",
            "Comment on posts and polls",
            "Share posts and polls",
            "View posts of users you follow",
            "View posts of users you don't follow",
            "Search users and posts",
            "View user profiles",
            "View user followers and following",
            "View posts of a user",
            "View and edit your profile",
        ],
        githubLink: 'https://github.com/nixrajput/social-media-app-flutter',
        demoLink: 'https://github.com/nixrajput/social-media-app-flutter/releases/latest',
        downloadUrl: 'https://github.com/nixrajput/social-media-app-flutter/releases/download/v1.0.1%2B29/app-release.apk',
        totalDownloads: 1000,
    },
    {
        _id: 'livebox-app',
        image: '/livebox_screenshots/icon.png',
        icon: '/livebox_screenshots/icon.png',
        title: 'LiveBox App',
        type: 'Mobile Application',
        projectType: 'mobileApp',
        shortDescription: 'A video calling and video streaming app.',
        description: "LiveBox is a video calling and video streaming app for sharing and connecting with people around the world. It is a mobile app that allows users to share their photos and videos with other users.",
        technologies: ['Flutter', 'Dart', 'Agora SDK', 'GetX'],
        features: [
            "Login and Signup",
            "Create and edit profile",
            "Make video calls",
            "Multi-party video calls",
            "Mute and unmute audio",
            "Switch camera",
            "View and edit your profile"
        ],
        githubLink: 'https://github.com/nixrajput/video-calling-app-flutter',
        demoLink: 'https://github.com/nixrajput/video-calling-app-flutter/releases/latest',
        downloadUrl: 'https://github.com/nixrajput/video-calling-app-flutter/releases/download/v1.0.1%2B03/app-release.apk',
        totalDownloads: 200,
    },
    {
        _id: 'nixlab-website',
        image: '/nixlab_shop_screenshots/icon.png',
        icon: '/nixlab_shop_screenshots/icon.png',
        title: 'NixLab Shop',
        type: 'Web Application',
        projectType: 'webApp',
        shortDescription: 'An e-commerce web app.',
        description: 'NixLab Shop is an e-commerce web app that allows users to do shopping online. It is a web app that allows users to check out their cart and checkout their orders with ease.',
        technologies: ['React.js', 'HTML', 'CSS', 'Node.js', 'Express', 'Mongo'],
        features: [
            "Login and Signup",
            "Create and edit profile",
            "Add and remove products from cart",
            "Checkout products",
            "View orders",
            "View products",
            "View product details",
            "View product reviews",
            "Create and edit product reviews",
            "Search products"
        ],
        githubLink: 'https://github.com/nixrajput/ecommerce-mern',
        demoLink: 'https://nixlab-shop.cyclic.com',
        websiteUrl: 'https://nixlab-shop.cyclic.com',
    },
];

export const projectCategories = [
    "business", "education", "entertainment",
    "finance", "food", "games", "health",
    "lifestyle", "medical", "music", "news",
    "photography", "productivity", "shopping",
    "social", "sports", "travel", "utilities",
    "weather", "other"
];

export const description = "NixLab Technologies is a software development company based in the India. We are a team of passionate developers who are passionate about building high quality software. We are always looking for talented and creative people to join our team.";

export const serviceList = [
    'Mobile application development',
    'Web application development',
    'Desktop application development',
    'Backend development',
];

export const missionList = [
    'We understand needs and requirements of our customer and make technology to resolve the needs.',
    'We believe to explore new opportunities that maximize the business value, consistent growth, and sustainability.',
    'Empower our clients to respond faster and more intuitively to changing market dynamics.',
    'Enable them to become more agile and competitive through leveraging new technologies.',
    'Help our clients to bring great products to market in less time and at less cost.',
    'Collaborate with our clients in their continued success.'
];

export const socialLinks = [
    {
        id: 1,
        url: 'https://instagram.com/nixrajput/',
        icon: <InstagramIcon />
    },
    {
        id: 2,
        url: 'https://facebook.com/nixrajput07/',
        icon: <FacebookIcon />
    },
    {
        id: 3,
        url: 'https://twitter.com/nixrajput07/',
        icon: <TwitterIcon />
    },
    {
        id: 4,
        url: 'https://linkedin.com/in/nixrajput/',
        icon: <LinkedInIcon />
    },
    {
        id: 4,
        url: 'https://github.com/nixrajput/',
        icon: <GitHubIcon />
    },
    {
        id: 4,
        url: 'https://telegram.me/nixlab_in/',
        icon: <TelegramIcon />
    },
];

export const communityGuidelines = {
    hateSpeechAndDiscrimination: [
        {
            id: 1,
            title: 'Promoting enmity',
            description: 'Section 153A of the Indian Penal Code, 1860 punishes people who promote or attempt to promote disharmony or hatred based on caste, place of birth, religion, race, region language etc. Any act or statement that disrupts the harmony between different religious groups, casts or communities or disturbs public tranquility is punishable. In other words, organising any exercise, movement, drill or activity to train participants to stir violence, induce fear or insecurity against any religious, racial, regional, language, caste or community is punishable with imprisonment. The term of this can be upto 3 years.',
        },
        {
            id: 2,
            title: 'Criminal Intimidation',
            description: 'Section 503 of the Indian Penal Code, 1860 punishes a person who threatens to injure another person, their property or reputation. In other words, if one person intentionally insults and provokes another to disrupt public peace or commit any offence: the former is liable under this provision. If found liable, a person maybe imprisoned or fined as per Section 506 of the Indian Penal Code, 1860. This imprisonment may be upto 2 years. If a person threatens to severely injure or kill another person, destroy their property by fire or impute unchastity to a woman: that person will be punished with criminal intimidation with an imprisonment sentence that extends to 7 years. If a person anonymously threatens to injure another person, their property or reputation, they can be punished under Section 507 of the Indian Penal Code, 1860.',
        },
        {
            id: 3,
            title: 'Outraging the modesty of women',
            description: 'When a person intends to insult the modesty of a woman. In other words, it is a punishable offense to intrude on a woman’s privacy by uttering any word, making any sound or gesture. This is punishable under Section 509 of the Indian Penal Code, 1860.',
        },
        {
            id: 4,
            title: 'Public Mischief',
            description: 'Any person who intentionally circulates and publishes any statement that causes fear or alarms any section of the public, because of which a person commits an offense against the state or against public tranquility is liable under Section 505(b) of the Indian Penal Code, 1860.',
        },
        {
            id: 5,
            title: 'Defamation',
            description: 'Under Section 499 of the Indian Penal Code, 1860, publication, in writing or by way of speech, of content in relation to any person, with the intention of or being aware of the likelihood that such content will harm their reputation, amounts to defamation and is punishable with imprisonment of up to two years and/or fine. Statements made with an intent to injure another person’s reputation, or statements prejudicial to the maintenance of harmony may be violative of this guideline and invite the aforementioned offences. Only a court of law can adjudicate if content is defamatory.',
        },
    ],
    religiouslyOffensiveContent: [
        {
            id: 1,
            title: 'Insult To Religions',
            description: 'Section 295-A of the Indian Penal Code, 1860 punishes a person who intentionally hurt the religious feelings of others by injuring or defiling a place of worship. In other words, a deliberate and malicious act through words that intend to outrage religious feelings of any class, by insulting its religion or religious beliefs is punishable.'
        },
        {
            id: 2,
            title: 'Promoting Enmity',
            description: 'Section 153A of the Indian Penal Code, 1860 punishes people who promote or attempt to promote disharmony or hatred based on caste, place of birth, religion, race, region language etc. Any act or statement that disrupts the harmony between different religious groups, casts or communities or disturbs public tranquility is punishable. In other words, organising any exercise, movement, drill or activity to train participants to stir violence, induce fear or insecurity against any religious, racial, regional, language, caste or community is punishable with imprisonment. The term of this can be upto 3 years.'
        },
        {
            id: 3,
            title: 'Deliberate Intent To hurt Religious Feelings',
            description: 'Under Section 298 of the Indian Penal Code, 1860, a deliberate intent to hurt any person’s religious feelings by uttering any word, sound in the hearing of that person or gesture in the sight of that person is punishable with an imprisonment, fine or both.'
        },
    ],
    selfHarmAndSuicide: [
        {
            id: 1,
            title: 'Abetment of Suicide',
            description: 'As per Section 306 of the Indian Penal Code, 1860, if a person assisted another in committing suicide, that person is liable to be punished. In the form of furnishing a fine or being imprisoned upto 10 years.'
        },
        {
            id: 2,
            title: 'Mental Illness',
            description: 'As per Section 2(s) of The Mental Healthcare Act, 2017, a person is diagnosed with a mental illness when they suffer from a substantial disorder of thinking, mood, perception, orientation or memory that grossly impairs judgment, behaviour, capacity to recognize reality or ability to meet the ordinary demands of life, mental conditions associated with the abuse of alcohol and drugs, but does not include mental retardation which is a condition of arrested or incomplete development of mind of a person, specially characterised by sub normality of intelligence.'
        },
        {
            id: 3,
            title: 'Right to Access Mental Healthcare',
            description: 'As per Section 18(1) of The Mental Healthcare Act, 2017, every person shall have a right to access mental healthcare and treatment from mental health services run or funded by the appropriate Government.'
        },
    ],
    violentContent: [
        {
            id: 1,
            title: 'Punishment For Publishing or Transmitting Obscene Material',
            description: 'As per Section 67 of the Information and Technology Act, 2000, a person may be punished if they are found publishing, transmitting any material that appeals to prurient and corrupt persons. Such an act is punishable with a fine and an imprisonment that may extend to 5 years.',

        },
        {
            id: 2,
            title: 'Criminal Intimidation',
            description: 'Section 503 of the Indian Penal Code, 1860 punishes a person who threatens to injure another person, their property or reputation. In other words, if one person intentionally insults and provokes another to disrupt public peace or commit any offence: the former is liable under this provision. If found liable, a person maybe imprisoned or fined as per Section 506 of the Indian Penal Code, 1860. This imprisonment may be upto 2 years.',
            children: [
                'If a person threatens to severely injure or kill another person, destroy their property by fire or impute unchastity to a woman, the person will be punished with criminal intimidation with an imprisonment sentence that extends to 7 years.',
                'If a person anonymously threatens to injure another person, their property or reputation, they can be punished under Section 507 of the Indian Penal Code, 1860.'
            ]
        },
        {
            id: 3,
            title: 'Punishment for Publishing or Transmitting Obscene Material',
            description: 'As per Section 67 of the Information and Technology Act, 2000, a person may be punished if they are found publishing, transmitting any material that appeals to prurient and corrupt persons. Such an act is punishable with a fine and an imprisonment that may extend to 5 years.'
        },
        {
            id: 4,
            title: 'Public Mischief',
            description: 'Any person who intentionally circulates and publishes any statement that causes fear or alarms any section of the public, because of which a person commits an offense against the state or against public tranquility is liable under Section 505(b) of the Indian Penal Code, 1860.'
        },
    ],
    sexualContent: [
        {
            id: 1,
            title: 'Punishment for Publishing or Transmitting Obscene Material',
            description: 'As per Section 67 of the Information and Technology Act, 2000, a person may be punished if they are found publishing, transmitting any material that appeals to prurient and corrupt persons. Such an act is punishable with a fine and an imprisonment that may extend to 5 years.'
        },
        {
            id: 2,
            title: 'Punishment for publishing or transmitting sexually explicit material',
            description: 'As per Section 67A of the Information and Technology Act, 2000, a person may be punished if they are found publishing, transmitting any material that contains sexually explicit acts and conducts. Such punishment may extend to five years with fine that may extend to 10 lakhs.'
        },
        {
            id: 3,
            title: 'Punishment for publishing or transmitting obscene content',
            description: 'As per Section 67B of the Information and Technology Act, 2000, a person can be punished for publishing or transmitting material depicting children in sexually explicit acts in electronic forms.This includes:',
            children: [
                'Creating text, digital images, collecting, downloading, advertising, promoting exchanges or distributing material in any electronic form depicting children in obscene or indecent or sexually explicit manner.',
                'Cultivating, enticing, or inducing children to online relationship with one or more children for sexually explicit acts in a manner that offends any reasonable adult is punishable.',
                'If a person is found to have records of the above content in any electronic form, they may be imprisoned for a term of 5 years, if a first time offender.'
            ]
        },
        {
            id: 4,
            title: 'Due Diligence by a social media intermediary',
            description: 'As per Rule 3(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, If a complaint is made against any content that shows such individual in full or partial nudity or shows or depicts such individual in any sexual act or conduct. The social media intermediary will disable access to such content within 24 hrs.'
        },
    ],
    invasionOfPrivacy: [
        {
            id: 1,
            title: 'Fundamental Right',
            description: 'The Right to Privacy is an intrinsic part of the Right to Life under Article 21 of the Constitution of India.'
        },
        {
            id: 2,
            title: 'Punishment of Violating Privacy',
            description: 'As per Section 66E of the Information and Technology Act, 2000, any person who intentionally captures, publishes or transmits the image of a private area of any person without their consent, violates the other’s right to privacy. This is punishable with imprisonment that may extend to three years or with a fine.'
        },
        {
            id: 3,
            title: 'Penalty for Breach of Confidentiality and Privacy',
            description: 'As per Section 72 of the Information and Technology Act, 2000, any person who secures access to any electronic record, book, register, correspondence, information, document or other material without the consent of the person concerned discloses such electronic record, book, register, correspondence, information, document or other material to any other person is liable to be punished. The punishment may be imprisonment or fine.'
        },
    ],
    illegalActivities: [
        {
            id: 1,
            title: 'Prohibition of Improper use of Certain Emblems and Names',
            description: 'As per Section 3 of The Emblems and Names (Prevention of Improper Use) Act, 1950, people are prohibited from using any trademark, design, name or emblem specified in Schedule to this Act.'
        },
        {
            id: 2,
            title: 'Access to Prescription Drugs',
            description: 'Rule 65 of the Drugs and Cosmetics Rules, 1945, lays down the conditions of licenses. This includes the fact that drugs specified in certain Schedules must be supplied with a valid license or prescription.'
        },
        {
            id: 3,
            title: 'Prohibition of Advertisement of Certain Drugs and Magic for the Treatment of Certain Diseases and Disorders',
            description: 'As per Section 3 and Section 5 of The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, a person must publish any advertisement that certain drugs or magic remedies cures any condition stipulated in Section 3 of the Act.'
        },
        {
            id: 4,
            title: 'No Advertisements of liquor and Tobacco',
            description: 'As per Section 5 of The Cigarettes and Other Tobacco Products (Prohibition of Advertisement and Regulation of Trade and Commerce, Production, Supply and Distribution) Act, 2003, a person who produces, supplies and distributes cigarettes or tobacco products cannot advertise these products, directly or indirectly.'
        },
    ],
    identityTheft: [
        {
            id: 1,
            title: 'Punishment for Identity Theft',
            description: 'As per Section 66C of the Information and Technology Act, 2000, if a person fraudulently or dishonestly uses electronic signatures, passwords or any other unique identification feature of any other person: they may be punished with imprisonment which may extend to three years and shall also be liable for a fine.'
        },
        {
            id: 2,
            title: 'Punishment for Cheating by Impersonation',
            description: 'As per Section 66D of the Information and Technology Act, 2000, any person who cheats by impersonating for any communication or computer resource will be punished. The punishment may be an imprisonment, fine or both.'
        },
    ],
    propertyInfringement: [
        {
            id: 1,
            title: 'Copyrights',
            description: 'As per Section 13 of The Copyright Act, 1957, a person owns copyrights of: original literary, dramatic, musical and artistic works. In other words, paintings, drawings, photographs, computer programs, sound recordings, films and similar creative expressions are entitled to copyright protection.'
        },
        {
            id: 2,
            title: 'Rights of Copyright Holders',
            description: 'To hold a copyright means to posses the exclusive right to do the following:',
            children: [
                'To reproduce the work in any material form.',
                'To issue copies of the work to the public.',
                'To perform the work in public.',
                'To communicate the work to the public.',
                'To make cinematograph film or sound recording in respect of the work.',
                'To make any translation of the work.',
                'To make any adaptation of the work.'
            ]
        },
        {
            id: 3,
            title: 'Copyright Violations',
            description: 'Under Section 51 of the Copyrights Act, 1957, a person infringes on copyrights by:',
            children: [
                'Violating the rights of a copyright holder.',
                'Making infringing copies for sale or hire or selling or letting them for hire.',
                'Permitting any place for the performance of works in public where such performance constitutes infringement of copyright.',
                'Distributing infringing copies for the purpose of trade or to such an extent so as to affect prejudicially the interest of the owner of copyright.',
                'Exhibiting in public infringing copies by way of trade',
                'Importing infringing copies into India.'
            ]
        },
        {
            id: 4,
            title: 'Fundamentals',
            description: 'As per Section 2(1)(zb) of the Trademarks Act, 1999, a trademark is a mark capable of being represented graphically to distinguish services or goods from one person from those of others. A person is the proprietor of the trademark if it is a registered mark or is a mark used in relation to goods or services to indicate a connection in the course of trade between the goods or services.'
        },
        {
            id: 5,
            title: 'Trademark Infringement:',
            description: 'As per Section 29 of the Trademarks Act, 1999, a person infringes a registered mark when they use the mark without authorization. This could occur in many ways. Including, if one person uses a trademark that is identical or confusingly similar to a trademark owned by another. Such use could be in relation to products or services which are identical or similar to those covered by registration.'
        },
    ],
    maliciousSoftware: [
        {
            id: 1,
            title: 'Penalty for Damage of Computer Systems',
            description: 'As per Section 43(c) of the Information and Technology Act, 2000, if a person introduces any computer contaminant or computer virus into any computer system or computer network: they will be punished.'
        },
        {
            d: 2,
            title: 'Penalty for Damage of Computer Systems',
            description: 'As per Section 43(j) of the Information and Technology Act, 2000, if a person teal, conceals, destroys or alters or causes any person to steal, conceal, destroy or alter any computer source code used for a computer resource with an intention to cause damage: they are liable to be punished.'
        }
    ],
    childSafety: [
        'Visual depictions of children engaged in obscene, indecent, sexually explicit acts or conduct.',
        'Links to third-party sites that host child pornographic content.',
        'Facilitating child abuse.',
        'Sending sexually explicit media to a child.',
        'Recruiting or advertising an interest in a commercial sex act involving a child, or in harboring and/or transporting a child for sexual purposes.'
    ]
}