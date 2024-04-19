export interface NavLink {
    // Interface type defining what NavLinks should have in order to be rendered
    title: string,
    link: string,
}

export const _PortfolioNavLinks: NavLink[] = [
    { title: "Home", link: "/"},
    { title: "Work Experiences", link: "/work_experiences"},
    { title: "Projects", link: "/projects"},
    { title: "Art", link: "/art"},
    { title: "Resume", link: "/resume"},
]
