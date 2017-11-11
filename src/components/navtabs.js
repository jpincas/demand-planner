import { h } from 'hyperapp'

const NavTabs = ({}, links) => (
    <div class="navtabs-container">
        { links.map(
        (link) => 
            <div class="navtab">
                { link }
            </div>
        ) }
    </div>
)

export { NavTabs }