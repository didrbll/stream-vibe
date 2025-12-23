 import './Footer.scss'
import Socials from "@/components/Socials";

const Footer = () => {
  const menuItems = [
    {
      title: 'Home',
      href: '/',
      links: [
        {
          title: 'Categories',
          href: 'movies',
        },
        {
          title: 'Devices',
          href: 'devices',
        },
        {
          title: 'Pricing',
          href: 'subscription',
        },
        {
          title: 'FAQ',
          href: 'support',
        },
      ],
    },
    {
      title: 'Movies',
      href: 'movies',
      links: [
        {
          title: 'Genres',
          href: 'movies',
        },
        {
          title: 'Trending',
          href: 'movies',
        },
        {
          title: 'New Releases',
          href: 'movies',
        },
        {
          title: 'Popular',
          href: 'movies',
        },
      ],
    },
    {
      title: 'Shows',
      href: 'shows',
      links: [
        {
          title: 'Genres',
          href: 'movies',
        },
        {
          title: 'Trending',
          href: 'movies',
        },
        {
          title: 'New Releases',
          href: 'movies',
        },
        {
          title: 'Popular',
          href: 'movies',
        },
      ],
    },
    {
      title: 'Support',
      href: 'support',
      links: [
        {
          title: 'Contact Us',
          href: 'support',
        },
      ],
    },
    {
      title: 'Subscription',
      href: 'subscription',
      links: [
        {
          title: 'Plans',
          href: 'subscription',
        },
        {
          title: 'Features',
          href: 'subscription',
        },
      ],
    },
    {
      title: 'Connect With Us',
      socialLinks: [
        {
          label: 'Facebook',
          iconName: 'facebook',
          href: 'https://www.facebook.com/',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
          href: 'https://twitter.com/',
        },
        {
          label: 'LinkedIn',
          iconName: 'linkedin',
          href: 'https://www.linkedin.com/',
        },
      ]
    },
  ]

  const extraLinks = [
    {
      title: 'Terms of Use',
      href: 'terms'
    },
    {
      title: 'Privacy Policy',
      href: 'privacy'
    },
    {
      title: 'Cookie Policy',
      href: 'cookie'
    },
  ]

  const getHref = (href) => href && href.startsWith('/') ? href : `/${href}`;

  return (
    <footer className='footer'>
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title,href, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title h6" href={getHref(href)}>
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list" >
                  {links.map(({ title, href }, index)  => (
                    <li className="footer__menu-item" key={index}>
                      <a className="footer__menu-link" href={getHref(href)}>
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__socials" links={socialLinks}/>
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map(({ title, href }, index) => (
              <a className="footer__extra-link" href={getHref(href)} key={index}>
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer