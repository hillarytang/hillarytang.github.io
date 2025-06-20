export type NavLink  = {
    // Interface type defining what NavLinks should have in order to be rendered
    title: string,
    link: string,
    tooltip?: string
}

export const _NavLinks: NavLink[] = [
    { title: 'Home', link: '/home', tooltip: 'Home'},
    { title: 'The lore', link: '/about-me', tooltip: 'About me'},
    { title: 'Quest log', link: '/experience', tooltip: 'Work experience & projects'},
    { title: 'Off the clock', link: '/gallery', tooltip: 'Outside of work experiences'},
    { title: 'Send an owl', link: 'mailto:hillary.s.tang@gmail.com', tooltip: 'Contact me via email'},
    { title: 'Scroll of Credentials', link: '/resume', tooltip: 'Download my resume'},
]

export type Quest = {
    questType: string,
    questTitle: string,
    icon?: string,
    iconAltText?: string,
    blurb: string,
    date: string,
    company: string,
}

export const _QuestLog: Quest[] = [
    {
        questType: 'Current main quest',
        questTitle: 'Full-Stack Software Developer',
        icon: '',
        iconAltText: 'Ontario government logo',
        blurb: '',
        date: 'September 2023 - Present',
        company: 'Government of Ontario',
    },
    {
        questType: 'Completed quest',
        questTitle: 'Software Developer Intern',
        icon: '',
        iconAltText: 'Oracle logo',
        blurb: '',
        date: 'May 2021 - April 2022',
        company: 'Oracle Canada',
    },
    {
        questType: 'Completed quest',
        questTitle: 'Lead Teaching Assistant',
        icon: '',
        iconAltText: 'Oracle logo',
        blurb: '',
        date: 'May 2021 - April 2022',
        company: 'Oracle Canada',
    },
]