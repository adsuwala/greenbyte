import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      <p className="text-[14px] font-medium tracking-[0.05em] text-[#3BB056] uppercase md:text-[18px] xl:text-[24px]">
        {label}
      </p>
      <h2 className="mt-3.75 md:mt-5 font-syne text-[30px] min-[336px]:text-logo-desktop font-bold leading-[1.1] text-black md:text-[48px] xl:text-[64px]">
        {title}
      </h2>
      <p 
        className={`mt-6.25 max-w-6xl text-[16.5px] font-medium leading-snug text-[#7B8291] md:text-[22px] xl:text-[30px] ${
          isCenter ? 'mx-auto' : 'mr-auto'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
