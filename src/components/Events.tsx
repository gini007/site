import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

type EventItem = {
  date: string;
  title: string;
  place: string;
  format: string;
  angle: string;
};

type EventGroup = {
  label: string;
  events: EventItem[];
};

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

const Group = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GroupLabel = styled.h3`
  font-family: ${theme.font.sans};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.color.crimson};
  padding-bottom: 12px;
  margin-bottom: 4px;
  border-bottom: 1px solid ${theme.color.line};
`;

const EventRow = styled.article`
  display: grid;
  grid-template-columns: 88px 1fr auto;
  gap: 16px 24px;
  padding: 20px 0;
  border-bottom: 1px solid ${theme.color.line};
  align-items: start;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const EventDate = styled.time`
  color: ${theme.color.faint};
  font-size: 0.92rem;
  font-weight: 600;
  padding-top: 4px;
`;

const EventTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 6px;
`;

const EventPlace = styled.p`
  color: ${theme.color.faint};
  font-size: 0.92rem;
  margin-bottom: 8px;
`;

const EventAngle = styled.p`
  color: ${theme.color.muted};
  font-size: 0.98rem;
  max-width: 46rem;
`;

const FormatChip = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${theme.color.muted};
  border: 1px solid ${theme.color.lineStrong};
  border-radius: 999px;
  padding: 6px 10px;
  white-space: nowrap;
  margin-top: 4px;

  @media (max-width: 700px) {
    justify-self: start;
  }
`;

const groups: EventGroup[] = [
  {
    label: 'Launch',
    events: [
      {
        date: 'Sep 11',
        title: 'Automation & Deep Tech Club Kick-Off',
        place: 'Aldrich 111 · 6:00–7:30 PM',
        format: 'Club launch',
        angle:
          'Established the club’s mission, previewed the year, opened officer roles, and engaged roughly 200 students.',
      },
    ],
  },
  {
    label: 'Firesides',
    events: [
      {
        date: 'Sep 17',
        title: 'Fireside chat with Lisa Yan & Drew Borinstein, Argus Systems',
        place: 'Aldrich 009 · 4:00–5:00 PM · EC-only',
        format: 'Fireside',
        angle:
          'Showcased HBS founders building the evaluation layer for Physical AI, and the path from NVC winners to startup builders.',
      },
      {
        date: 'Sep 24',
        title: 'Waabi fireside chat: The Business of Physical Automation',
        place: 'Aldrich 110 · 5:30–6:15 PM',
        format: 'Fireside',
        angle:
          'Connected students to autonomous trucking, generative AI for the physical world, and deep-tech strategy careers.',
      },
      {
        date: 'Oct 20',
        title: 'Fireside chat with Dávid Lakatos, Formlabs',
        place: 'Aldrich 107 · 5:00–6:00 PM',
        format: 'Fireside',
        angle:
          'Explored innovation, product leadership, and scaling 3D-printing technology from startup to global leader.',
      },
      {
        date: 'Nov 17',
        title: 'Conversation with Zack Kass, former OpenAI executive',
        place: 'Aldrich 207 · 4:00–5:00 PM',
        format: 'Conversation',
        angle:
          'Connected the club’s automation lens to the AI frontier through reflections on ChatGPT and the future of AI.',
      },
    ],
  },
  {
    label: 'On the ground',
    events: [
      {
        date: 'Sep 25',
        title: 'Tinkering on campus: Engineering School / The Grid tour',
        place: 'SEAS / The Grid · 5:00–6:00 PM',
        format: 'Campus tour',
        angle:
          'Made Harvard’s commercialization infrastructure tangible through makerspace and robotics-lab access.',
      },
      {
        date: 'Oct 1',
        title: 'Harvard Tech Mixer: Innovation Exchange',
        place: 'SEC West Atrium · 4:30–6:30 PM',
        format: 'Mixer',
        angle:
          'Brought researchers, faculty, students, and potential technical co-founders together around spinning out research.',
      },
      {
        date: 'Nov 5',
        title: 'RightHand Robotics product & workflows showcase',
        place: 'RightHand Robotics HQ, Charlestown · 3:00–8:00 PM',
        format: 'Company visit',
        angle:
          'Moved from classroom theory to operating reality through product demos and workflow exposure.',
      },
      {
        date: 'Nov 11',
        title: 'HBS Robotics alumni breakfast',
        place: 'Batten 201 · 10:00–11:00 AM',
        format: 'Alumni breakfast',
        angle:
          'Created an informal bridge between students and HBS alumni working in and around robotics.',
      },
      {
        date: 'Nov 13',
        title: 'Fall mixer',
        place: 'Hamilton Hall Lounge · 6:30–8:30 PM',
        format: 'Club mixer',
        angle:
          'Turned shared interest into community through co-founder conversations, project ideas, food, and drinks.',
      },
    ],
  },
];

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
