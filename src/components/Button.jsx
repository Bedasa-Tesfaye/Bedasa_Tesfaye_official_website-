export default function Button({ href = '#contact', variant = 'primary', children, className = '' }) { return <a href={href} className={`btn btn-${variant} ${className}`}>{children}</a>; }
