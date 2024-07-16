const socialLinks = [
  {
    type: 'Email',
    handle: 'levbakin@gmail.com',
    href: 'mailto:levbakin@gmail.com',
    iconClass: 'fas fa-envelope'
  },
  {
    type: 'LinkedIn',
    handle: 'lev-bakin',
    href: 'https://www.linkedin.com/in/lev-bakin/',
    iconClass: 'fab fa-linkedin'
  },
  {
    type: 'GitHub',
    handle: 'lbakin',
    href: 'https://github.com/lbakin',
    iconClass: 'fab fa-github'
  }
];

const SocialLinks = () => (
  <div className="relative z-10 flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 mb-4 w-full justify-center">
    {socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.href}
        target={link.type !== 'Email' ? '_blank' : '_self'}
        rel={link.type !== 'Email' ? 'noopener noreferrer' : ''}
        className="hover:text-rose-800 hover:bg-rose-300  text-white p-3 transition duration-300 ease-in-out items-center flex flex-row space-x-6 border-t-2 md:w-60 lg:w-80 justify-between"
      >
        <div className="text-left ">
          <span className="text-2xl font-medium">{link.type}</span>
          <br />
          <span>{link.handle}</span>
        </div>
        <i className={`${link.iconClass} text-3xl`}></i>
      </a>
    ))}
  </div>
);

export default SocialLinks;
