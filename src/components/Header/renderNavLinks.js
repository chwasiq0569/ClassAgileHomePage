export function renderNavLinks(t, changeRoute, scrollToSection){
      return t('menu.menuItems', { returnObjects: true }).map(item => {
            if(item.key === "not_scrollableDemo"){
               return <li data-ga-tag="demo" className="dropdown linkClick navLinkIem" onClick={() => changeRoute("/demo")}>{item.name}</li>
            }
            else if(item.key === "not_scrollableFaq"){
               return <li data-ga-tag="faq" className="dropdown linkClick navLinkIem" onClick={() => changeRoute("/faq")}>{item.name}</li>
            }
            else if(item.key === "not_scrollableLegal"){
               return <li data-ga-tag="legal" className="dropdown linkClick navLinkIem" onClick={() => changeRoute("/legal")}>{item.name}</li>
            }
            else return <li key={item.name} data-ga-tag={item.name} className="dropdown linkClick navLinkIem" onClick={() => scrollToSection(item.ClassName)}>{item.name}</li>
        })
}