interface ComponentSidebarPropsType {
    links: string[],
    image: string,

}
const ComponentSidebar = ({ links, image }: ComponentSidebarPropsType) => {
    return (
        <aside>
            <ul>

                {
                    links?.map((link, index) => (
                        <li key={index}>
                            {link}
                        </li>
                    ))
                }

            </ul>

        </aside>
    )
}

export default ComponentSidebar