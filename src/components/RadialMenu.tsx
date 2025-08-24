import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

interface MenuItemProps {
  to: string;
  label: string;
  angle: number;
  radius: number;
}

const MenuItem = ({ to, label, angle, radius }: MenuItemProps) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <Link
      to={to}
      className="menu-item"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        left: '50%',
        top: '50%',
      }}
      aria-label={`Navigate to ${label} page`}
    >
      {label}
    </Link>
  );
};

export const RadialMenu = () => {
  const [radius, setRadius] = useState(160);

  useEffect(() => {
    const calculateRadius = () => {
      const baseRadius = 140;
      const vwAddition = Math.min(window.innerWidth * 0.12, 80);
      setRadius(baseRadius + vwAddition);
    };

    calculateRadius();
    window.addEventListener('resize', calculateRadius);
    return () => window.removeEventListener('resize', calculateRadius);
  }, []);

  const menuItems = [
    { to: '/resume', label: 'Resume', angle: -90 },
    { to: '/portfolio', label: 'Portfolio', angle: -30 },
    { to: '/contact', label: 'Contact', angle: 30 },
    { to: '/about', label: 'About', angle: 90 },
  ];

  return (
    <div className="radial-menu">
      {menuItems.map((item) => (
        <MenuItem
          key={item.to}
          to={item.to}
          label={item.label}
          angle={item.angle}
          radius={radius}
        />
      ))}
    </div>
  );
};