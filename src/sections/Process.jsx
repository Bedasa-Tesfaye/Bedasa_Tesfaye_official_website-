import { Fragment } from 'react';
import SectionHeading from '../components/SectionHeading';

export default function Process() {
  const steps = [
    ['fa-comments', 'Understand', 'We listen to your business need and assess the current situation.'],
    ['fa-compass-drafting', 'Design', 'We recommend a solution that fits your goals, environment and budget.'],
    ['fa-screwdriver-wrench', 'Implement', 'We install, configure, develop and test the solution properly.'],
    ['fa-headset', 'Support', 'We provide guidance and maintenance so your solution keeps working.'],
  ];

  return (
    <section className="process-section">
      <div className="container">
        <SectionHeading eyebrow="How we work" title={<><span>From idea to</span> <span>implementation.</span></>} />

        <div className="process-grid">
          {steps.map(([icon, title, text], index) => (
            <Fragment key={title}>
              <div className="process-step reveal">
                <span>0{index + 1}</span>
                <i className={`fas ${icon}`} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              {index < steps.length - 1 && <div className="process-line" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
