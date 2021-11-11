import React from 'react';

type SectionPropsType = {
  title: string;
  background: string;
};

const Section: React.FC<SectionPropsType> = ({
  title,
  background,
  children,
}) => (
  <section>
    <div>
      <h2>{title}</h2>
    </div>
    <div>{children}</div>
  </section>
);

export default Section;
