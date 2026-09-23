import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  max-width: ${theme.width};
  margin: 0 auto;
  padding: 24px 24px 80px;
`;

const Intro = styled.div`
  max-width: 44rem;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 16px;
`;

const Lead = styled.p`
  color: ${theme.color.muted};
  font-size: 1.12rem;
`;

const Calendar = styled.div`
  margin-bottom: 72px;
  padding: 12px;
  background: ${theme.color.surface};
  border: 1px solid ${theme.color.line};
  border-radius: 12px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
`;

const CalendarFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 600px;
  border: 1px solid rgba(191, 203, 218, 0.53);
  border-radius: 8px;
  background: ${theme.color.bg};

  @media (max-width: 700px) {
    height: 520px;
  }
`;

const Events: React.FC = () => {
  return (
    <Section id="events">
      <Intro>
        <SectionTitle>Upcoming events</SectionTitle>
        <Lead>
          Find upcoming Automation & Deep Tech Club events, then explore the
          highlights from our first semester below.
        </Lead>
      </Intro>
      <Calendar>
        <CalendarFrame
          src="https://luma.com/embed/calendar/cal-W8lRFxvwjpGEf34/events"
          title="Automation & Deep Tech Club events"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </Calendar>
    </Section>
  );
};

export default Events;
